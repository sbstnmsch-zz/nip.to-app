export class PrefixedLocalStorage {

  constructor(_window, _prefix) {
    this.window = _window;
    this.prefix = `${_prefix}.`;
  }

  get(key) {
    return this.window.localStorage.getItem(this.prefix + key);
  }

  set(key, value) {
    this.window.localStorage.setItem(this.prefix + key, value);
  }

  clear() {
    for (let key in this.window.localStorage) {
      if (key.startsWith(this.prefix)) {
        this.window.localStorage.removeItem(key);
      }
    }
  }
}
