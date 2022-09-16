export const LocalStorage = {
  get(key:any) {
    const item:any = localStorage.getItem(key);
    return JSON.parse(item);
  },
  set(key:any, value:any) {
    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  },
  remove(key:any) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear()
  },
};
