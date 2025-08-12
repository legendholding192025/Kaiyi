'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export default function GADebugPage() {
  const [debugInfo, setDebugInfo] = useState<string[]>([]);
  const [networkStatus, setNetworkStatus] = useState<string>('Checking...');

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setDebugInfo(prev => [...prev, `[${timestamp}] ${message}`]);
  };

  const checkNetworkRequests = async () => {
    addLog('🔍 Checking network requests...');
    
    try {
      // Check if we can reach Google Analytics
      const response = await fetch('https://www.google-analytics.com/g/collect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'v=2&tid=G-401233023&cid=test&t=pageview&dp=%2Ftest',
      });
      
      if (response.status === 200 || response.status === 204) {
        addLog('✅ Can reach Google Analytics servers');
        setNetworkStatus('✅ Connected');
      } else {
        addLog(`⚠️ GA server response: ${response.status}`);
        setNetworkStatus('⚠️ Partial Connection');
      }
    } catch (error) {
      addLog(`❌ Cannot reach GA servers: ${error}`);
      setNetworkStatus('❌ No Connection');
    }
  };

  const testGA = () => {
    addLog('🔍 Testing Google Analytics...');
    
    if (typeof window !== 'undefined') {
      // Check if gtag is available
      if (window.gtag) {
        addLog('✅ gtag function is available');
        
        // Send test events
        window.gtag('event', 'debug_test', {
          event_category: 'debug',
          event_label: 'manual_test',
          debug_mode: true,
          value: 1
        });
        addLog('✅ Sent debug_test event');
        
        window.gtag('event', 'page_view', {
          page_title: 'GA Debug Page',
          page_location: window.location.href,
          debug_mode: true
        });
        addLog('✅ Sent manual page_view event');
        
        // Force a collect request
        window.gtag('event', 'test_collect', {
          event_category: 'test',
          event_label: 'collect_test',
          value: 1
        });
        addLog('✅ Sent collect test event');
        
      } else {
        addLog('❌ gtag function not available');
      }
      
      // Check dataLayer
      if (window.dataLayer) {
        addLog(`✅ dataLayer exists with ${window.dataLayer.length} items`);
        addLog(`📊 dataLayer contents: ${JSON.stringify(window.dataLayer.slice(-3))}`);
      } else {
        addLog('❌ dataLayer not found');
      }
      
      // Check current URL
      addLog(`🌐 Current URL: ${window.location.href}`);
      addLog(`📄 Page title: ${document.title}`);
      addLog(`🔗 Referrer: ${document.referrer || 'Direct'}`);
      
      // Check for GA script
      const gaScript = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
      if (gaScript) {
        addLog(`✅ GA script found: ${gaScript.getAttribute('src')}`);
      } else {
        addLog('❌ GA script not found in DOM');
      }
    }
  };

  const checkGAProperty = () => {
    addLog('🔍 Checking GA Property Configuration...');
    addLog('📋 Current GA Property: Kaiyi GA4 (G-401233023)');
    addLog('🌐 Expected Domain: https://kaiyi.ae');
    addLog(`🔍 Current Domain: ${window.location.hostname}`);
    addLog(`🔧 Environment Variable: ${process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'Not set'}`);
    
    if (window.location.hostname === 'kaiyi.ae') {
      addLog('✅ Domain matches GA4 configuration');
    } else if (window.location.hostname === 'localhost') {
      addLog('⚠️ Testing on localhost - GA4 expects kaiyi.ae');
      addLog('💡 This explains why real-time shows 0');
    } else {
      addLog('❌ Domain mismatch with GA4 configuration');
    }
  };

  useEffect(() => {
    // Auto-run tests after component mounts
    const timer = setTimeout(() => {
      checkGAProperty();
      testGA();
      checkNetworkRequests();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            🔍 Google Analytics Deep Debug Page
          </h1>
          
          {/* Status Overview */}
          <div className="mb-6 p-4 bg-blue-50 rounded">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">Status Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">G-401233023</div>
                <div className="text-sm text-blue-600">Tracking ID</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">kaiyi.ae</div>
                <div className="text-sm text-blue-600">Expected Domain</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${networkStatus.includes('✅') ? 'text-green-600' : networkStatus.includes('❌') ? 'text-red-600' : 'text-yellow-600'}`}>
                  {networkStatus}
                </div>
                <div className="text-sm text-blue-600">Network Status</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Debug Controls */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Debug Controls</h2>
              <div className="space-y-2">
                <button
                  onClick={testGA}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  🧪 Run GA Test
                </button>
                
                <button
                  onClick={checkGAProperty}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  🔍 Check GA Property
                </button>
                
                <button
                  onClick={checkNetworkRequests}
                  className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                >
                  🌐 Check Network
                </button>
                
                <button
                  onClick={() => setDebugInfo([])}
                  className="w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  🗑️ Clear Log
                </button>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded">
                <h3 className="font-semibold text-blue-800">Instructions:</h3>
                <ol className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>1. Open browser DevTools (F12)</li>
                  <li>2. Go to Console tab</li>
                  <li>3. Go to Network tab</li>
                  <li>4. Click debug buttons above</li>
                  <li>5. Look for GA requests in Network tab</li>
                  <li>6. Check GA Real-time reports</li>
                </ol>
              </div>
            </div>
            
            {/* Debug Output */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Debug Output</h2>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm h-80 overflow-y-auto">
                {debugInfo.length === 0 ? (
                  <div className="text-gray-500">Waiting for debug output...</div>
                ) : (
                  debugInfo.map((log, index) => (
                    <div key={index} className="mb-1">{log}</div>
                  ))
                )}
              </div>
            </div>
          </div>
          
          {/* Troubleshooting Steps */}
          <div className="mt-6 p-4 bg-red-50 rounded">
            <h3 className="font-semibold text-red-800 mb-2">Why Real-time Shows 0:</h3>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• <strong>Domain Mismatch:</strong> Testing on localhost but GA4 expects kaiyi.ae</li>
              <li>• <strong>Ad Blocker:</strong> Browser extensions blocking GA requests</li>
              <li>• <strong>Network Issues:</strong> Firewall or proxy blocking GA</li>
              <li>• <strong>GA4 Settings:</strong> Property filters or data retention settings</li>
              <li>• <strong>Browser Privacy:</strong> Enhanced privacy features blocking tracking</li>
            </ul>
          </div>
          
          {/* Next Steps */}
          <div className="mt-6 p-4 bg-green-50 rounded">
            <h3 className="font-semibold text-green-800 mb-2">Next Steps:</h3>
            <ol className="text-sm text-green-700 space-y-1">
              <li>1. <strong>Deploy to kaiyi.ae</strong> - This should work immediately</li>
              <li>2. <strong>Test on production domain</strong> - Use the debug page on kaiyi.ae</li>
              <li>3. <strong>Check Network tab</strong> - Look for successful GA requests</li>
              <li>4. <strong>Verify Real-time data</strong> - Should show active users</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
