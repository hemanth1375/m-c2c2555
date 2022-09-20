export const LocalStorage = {
  get(key:any) {
    try {
      const item:any = localStorage.getItem(key);
    return JSON.parse(item);
    } catch (e) {
      console.error(e);//handler error differently here
      return null;
    }
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
