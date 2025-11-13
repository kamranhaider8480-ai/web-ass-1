// src/pages/home/home.js
import { THEMES } from '../../../constants/themeConstants.js';
import { loadTheme, initializeThemeToggle } from '../../../utils/themeUtils.js';

// Initialize theme when page loads
window.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  initializeThemeToggle();
  
  // Mobile menu functionality
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      alert('Use the navigation links on larger screens.');
    });
  }
});