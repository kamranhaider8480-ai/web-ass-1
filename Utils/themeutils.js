// utils/themeUtils.js
import { THEMES, THEME_KEYS } from '../constants/themeConstants.js';

export const applyTheme = (theme, callback) => {
  const body = document.body;

  if (theme === THEMES.DARK) {
    body.classList.add('dark');
    body.classList.remove('light');
  } else {
    body.classList.add('light');
    body.classList.remove('dark');
  }

  localStorage.setItem(THEME_KEYS.MODE, theme);

  // Update all theme toggle buttons
  const toggleButtons = document.querySelectorAll('#themeToggle, #gawk');
  toggleButtons.forEach(btn => {
    if (btn) {
      if (theme === THEMES.DARK) {
        btn.textContent = '☀️ Light Mode';
      } else {
        btn.textContent = '🌙 Dark Mode';
      }
    }
  });

  // Execute callback if provided
  if (callback) callback(theme);
};

export const loadTheme = (callback) => {
  const savedTheme = localStorage.getItem(THEME_KEYS.MODE) || THEMES.LIGHT;
  applyTheme(savedTheme, callback);
};

export const initializeThemeToggle = () => {
  const toggleButtons = document.querySelectorAll('#themeToggle, #gawk');
  
  toggleButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark')
          ? THEMES.DARK
          : THEMES.LIGHT;

        const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
        applyTheme(newTheme);
      });
    }
  });
};