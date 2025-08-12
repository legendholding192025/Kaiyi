'use client';

import React, { useState, useEffect } from 'react';

interface DiagnosticData {
  viewport: {
    width: number;
    height: number;
  };
  stylesheets: {
    href: string;
    rules: number;
    size: string;
  }[];
  fonts: {
    family: string;
    status: string;
  }[];
  layoutShifts: {
    timestamp: number;
    value: number;
  }[];
  timestamp: number;
}

export default function LayoutDiagnostic() {
  const [diagnostics, setDiagnostics] = useState<DiagnosticData>({
    viewport: { width: 0, height: 0 },
    stylesheets: [],
    fonts: [],
    layoutShifts: [],
    timestamp: Date.now()
  });

  useEffect(() => {
    const checkLayout = () => {
      const newDiagnostics: DiagnosticData = {
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        },
        stylesheets: [],
        fonts: [],
        layoutShifts: [],
        timestamp: Date.now()
      };

      // Check stylesheets
      try {
        for (let i = 0; i < document.styleSheets.length; i++) {
          try {
            const sheet = document.styleSheets[i];
            const rules = sheet.cssRules ? sheet.cssRules.length : 0;
            const href = sheet.href || 'inline';
            const size = 'unknown'; // Can't get actual size without fetch
            
            newDiagnostics.stylesheets.push({
              href,
              rules,
              size
            });
          } catch (e) {
            // Skip cross-origin stylesheets
            continue;
          }
        }
      } catch (e) {
        // Handle any stylesheet access errors
      }

      // Check fonts
      try {
        if ('fonts' in document) {
          // @ts-ignore - FontFaceSet API
          const fontStatus = document.fonts.status;
          newDiagnostics.fonts.push({
            family: 'System Fonts',
            status: fontStatus
          });
        }
      } catch (e) {
        // Handle font API errors
      }

      // Check layout shifts
      try {
        if ('PerformanceObserver' in window) {
          // @ts-ignore - PerformanceObserver API
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              // @ts-ignore - LayoutShiftEntry
              if (entry.value) {
                newDiagnostics.layoutShifts.push({
                  timestamp: entry.startTime,
                  // @ts-ignore - LayoutShiftEntry
                  value: entry.value
                });
              }
            }
          });
          
          try {
            // @ts-ignore - PerformanceObserver API
            observer.observe({ entryTypes: ['layout-shift'] });
          } catch (e) {
            // Handle observer errors
          }
        }
      } catch (e) {
        // Handle PerformanceObserver errors
      }

      setDiagnostics(newDiagnostics);
    };

    checkLayout();
    window.addEventListener('resize', checkLayout);
    
    return () => {
      window.removeEventListener('resize', checkLayout);
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs max-w-xs z-50">
      <h3 className="font-bold mb-2">Layout Diagnostic</h3>
      <div className="space-y-1">
        <div>Viewport: {diagnostics.viewport.width} × {diagnostics.viewport.height}</div>
        <div>Stylesheets: {diagnostics.stylesheets.length}</div>
        <div>Fonts: {diagnostics.fonts.length}</div>
        <div>Layout Shifts: {diagnostics.layoutShifts.length}</div>
        <div>Last Update: {new Date(diagnostics.timestamp).toLocaleTimeString()}</div>
      </div>
    </div>
  );
}
