'use client';

import { useState, useEffect } from 'react';

interface DiagnosticData {
  viewport?: {
    width: number;
    height: number;
    devicePixelRatio: number;
  };
  stylesheets?: any[] | string;
  fonts?: any[] | string;
  layoutShifts?: number;
  cssSupport?: {
    flexbox: boolean;
    positioning: boolean;
    alignment: boolean;
  } | string;
}

export default function LayoutDiagnostic() {
  const [diagnostics, setDiagnostics] = useState<DiagnosticData>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for common layout issues
    const checkLayout = () => {
      const issues: DiagnosticData = {};
      
      // Check viewport
      issues.viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio
      };
      
      // Check CSS loading - with proper error handling
      try {
        const stylesheets = Array.from(document.styleSheets);
        issues.stylesheets = stylesheets.map(sheet => {
          try {
            return {
              href: sheet.href,
              disabled: sheet.disabled,
              rules: sheet.cssRules ? sheet.cssRules.length : 'N/A (external)',
              isExternal: sheet.href && !sheet.href.startsWith(window.location.origin)
            };
          } catch (error) {
            // Handle security restrictions for external stylesheets
            return {
              href: sheet.href,
              disabled: sheet.disabled,
              rules: 'N/A (security restricted)',
              isExternal: true
            };
          }
        });
      } catch (error) {
        issues.stylesheets = 'Error accessing stylesheets';
      }
      
      // Check font loading - with proper error handling
      try {
        if ('fonts' in document) {
          document.fonts.ready.then(() => {
            try {
              const fontStatus = Array.from(document.fonts).map(font => ({
                family: font.family,
                status: font.status
              }));
              setDiagnostics((prev: DiagnosticData) => ({ ...prev, fonts: fontStatus }));
            } catch (error) {
              setDiagnostics((prev: DiagnosticData) => ({ ...prev, fonts: 'Error reading fonts' }));
            }
          }).catch(error => {
            setDiagnostics((prev: DiagnosticData) => ({ ...prev, fonts: 'Font loading failed' }));
          });
        }
      } catch (error) {
        issues.fonts = 'Fonts API not supported';
      }
      
      // Check for layout shifts - with proper error handling
      try {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            try {
              const entries = list.getEntries();
              const layoutShifts = entries.filter(entry => entry.entryType === 'layout-shift');
              if (layoutShifts.length > 0) {
                setDiagnostics((prev: DiagnosticData) => ({ ...prev, layoutShifts: layoutShifts.length }));
              }
            } catch (error) {
              console.warn('Error processing performance entries:', error);
            }
          });
          
          observer.observe({ entryTypes: ['layout-shift'] });
        }
      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }
      
      // Check for basic CSS properties
      try {
        const testElement = document.createElement('div');
        testElement.style.position = 'absolute';
        testElement.style.display = 'flex';
        testElement.style.alignItems = 'center';
        testElement.style.justifyContent = 'center';
        
        issues.cssSupport = {
          flexbox: testElement.style.display === 'flex',
          positioning: testElement.style.position === 'absolute',
          alignment: testElement.style.alignItems === 'center'
        };
        
        document.body.appendChild(testElement);
        document.body.removeChild(testElement);
      } catch (error) {
        issues.cssSupport = 'Error testing CSS support';
      }
      
      setDiagnostics((prev: DiagnosticData) => ({ ...prev, ...issues }));
    };
    
    checkLayout();
    
    // Check on resize
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-red-500 text-white p-2 rounded-full z-50"
        title="Show Layout Diagnostics"
      >
        🔍
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg z-50 max-w-sm text-xs">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-white hover:text-gray-300"
      >
        ✕
      </button>
      <h3 className="font-bold mb-2">Layout Diagnostics</h3>
      <div className="space-y-2">
        <div>
          <strong>Viewport:</strong> {diagnostics.viewport?.width} × {diagnostics.viewport?.height}
        </div>
        <div>
          <strong>Stylesheets:</strong> {Array.isArray(diagnostics.stylesheets) ? diagnostics.stylesheets.length : 'Error'}
        </div>
        <div>
          <strong>Fonts:</strong> {Array.isArray(diagnostics.fonts) ? diagnostics.fonts.length : 'Checking...'}
        </div>
        {diagnostics.layoutShifts && (
          <div>
            <strong>Layout Shifts:</strong> {diagnostics.layoutShifts}
          </div>
        )}
        {diagnostics.cssSupport && typeof diagnostics.cssSupport === 'object' && (
          <div>
            <strong>CSS Support:</strong> {diagnostics.cssSupport.flexbox ? '✅' : '❌'} Flexbox
          </div>
        )}
      </div>
      <div className="mt-2 text-xs text-gray-300">
        Check console for detailed info
      </div>
    </div>
  );
}
