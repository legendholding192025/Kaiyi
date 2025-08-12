#!/usr/bin/env node

/**
 * Performance Check Script for KAIYI Website
 * This script helps identify render-blocking resources and performance issues
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 KAIYI Website Performance Check');
console.log('=====================================\n');

// Check for common performance issues
function checkPerformanceIssues() {
  const issues = [];
  
  // Check bundle size
  const bundlePath = path.join(__dirname, '../.next/static/chunks');
  if (fs.existsSync(bundlePath)) {
    const bundles = fs.readdirSync(bundlePath);
    const largeBundles = bundles.filter(bundle => {
      const stats = fs.statSync(path.join(bundlePath, bundle));
      return stats.size > 500 * 1024; // 500KB threshold
    });
    
    if (largeBundles.length > 0) {
      issues.push({
        type: 'Large Bundles',
        description: `Found ${largeBundles.length} bundles larger than 500KB`,
        files: largeBundles,
        recommendation: 'Consider code splitting and lazy loading'
      });
    }
  }
  
  // Check for render-blocking resources in HTML
  const htmlFiles = [
    '../src/app/layout.tsx',
    '../src/app/page.tsx'
  ];
  
  htmlFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for inline styles
      if (content.includes('<style>') || content.includes('dangerouslySetInnerHTML')) {
        issues.push({
          type: 'Inline Styles',
          description: 'Found inline styles in HTML',
          file: file,
          recommendation: 'Move critical CSS to external file, inline only above-the-fold styles'
        });
      }
      
      // Check for render-blocking scripts
      if (content.includes('<script') && !content.includes('defer') && !content.includes('async')) {
        issues.push({
          type: 'Render-blocking Scripts',
          description: 'Found scripts without defer/async attributes',
          file: file,
          recommendation: 'Add defer or async attributes to non-critical scripts'
        });
      }
    }
  });
  
  return issues;
}

// Check for optimization opportunities
function checkOptimizationOpportunities() {
  const opportunities = [];
  
  // Check image optimization
  opportunities.push({
    type: 'Image Optimization',
    description: 'Ensure all images use Next.js Image component with proper sizing',
    recommendation: 'Use loading="lazy" for below-the-fold images, priority for above-the-fold'
  });
  
  // Check font loading
  opportunities.push({
    type: 'Font Loading',
    description: 'Optimize Google Fonts loading',
    recommendation: 'Use font-display: swap and preload critical fonts'
  });
  
  // Check CSS optimization
  opportunities.push({
    type: 'CSS Optimization',
    description: 'Minimize and compress CSS',
    recommendation: 'Use CSS purging, minification, and critical CSS extraction'
  });
  
  // Check JavaScript optimization
  opportunities.push({
    type: 'JavaScript Optimization',
    description: 'Optimize JavaScript bundle',
    recommendation: 'Use code splitting, lazy loading, and tree shaking'
  });
  
  return opportunities;
}

// Generate performance report
function generateReport() {
  const issues = checkPerformanceIssues();
  const opportunities = checkOptimizationOpportunities();
  
  console.log('📊 Performance Issues Found:');
  if (issues.length === 0) {
    console.log('✅ No critical performance issues found!\n');
  } else {
    issues.forEach((issue, index) => {
      console.log(`\n${index + 1}. ${issue.type}`);
      console.log(`   Description: ${issue.description}`);
      console.log(`   File: ${issue.file}`);
      console.log(`   Recommendation: ${issue.recommendation}`);
    });
    console.log('');
  }
  
  console.log('🎯 Optimization Opportunities:');
  opportunities.forEach((opp, index) => {
    console.log(`\n${index + 1}. ${opp.type}`);
    console.log(`   Description: ${opp.description}`);
    console.log(`   Recommendation: ${opp.recommendation}`);
  });
  
  console.log('\n🔧 Next Steps:');
  console.log('1. Run "npm run build" to check bundle sizes');
  console.log('2. Use Lighthouse in Chrome DevTools for detailed analysis');
  console.log('3. Check Core Web Vitals in Google Search Console');
  console.log('4. Monitor performance with real user data');
  
  console.log('\n📈 Expected Results After Optimization:');
  console.log('- First Contentful Paint (FCP): < 1.8s');
  console.log('- Largest Contentful Paint (LCP): < 2.5s');
  console.log('- First Input Delay (FID): < 100ms');
  console.log('- Cumulative Layout Shift (CLS): < 0.1');
  console.log('- Time to Interactive (TTI): < 3.8s');
}

// Run the performance check
generateReport();
