class ThemesController {
  #themes;
  #localStorageKey;
  #currentThemeIndex;

  constructor(themes, localStorageKey) {
    this.#currentThemeIndex = Number(localStorage.getItem(localStorageKey));
    this.#themes = themes;
    this.#localStorageKey = localStorageKey;
  }

  setTheme(index) {
    const selectedTheme = this.#themes[index];

    for (let prop in selectedTheme) {
      document.documentElement.style.setProperty(prop, selectedTheme[prop]);
    }
  }

  switchToNextTheme() {
    const maxThemeIndex = this.#themes.length - 1;

    if (this.#currentThemeIndex === maxThemeIndex) {
      this.#currentThemeIndex = 0;
    } else {
      this.#currentThemeIndex++;
    }

    this.setTheme(this.#currentThemeIndex);
  }

  saveLastTheme() {
    localStorage.setItem(this.#localStorageKey, this.#currentThemeIndex);
  }

  getCurrentThemeIndex() {
    return this.#currentThemeIndex;
  }
}

export default ThemesController;
