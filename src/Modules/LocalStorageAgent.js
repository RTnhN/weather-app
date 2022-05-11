class LocalStorageAgent {
  constructor(classTemplate, key) {
    this.classTemplate = classTemplate;
    this.key = key;
  }
  store(array) {
    window.localStorage.setItem(this.key, JSON.stringify(array));
  }
  unstore() {
    let blob = JSON.parse(window.localStorage.getItem(this.key));
    if (blob === null) {
      return [{},[]];
    } else {
      return [blob[0], blob[1].map(object => Object.assign(new this.classTemplate(), object))];
    }
  }
  clear() {
    window.localStorage.removeItem(this.key);
  }
}

export default LocalStorageAgent; 