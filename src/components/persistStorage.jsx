function persistStorage(key, fallback = "") {
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      try {
        const parsed = JSON.parse(stored);
        // Ensure cart is always an array
        if (key === "cart" && !Array.isArray(parsed)) {
          return [];
        }
        return parsed;
      } catch {
        return key === "cart" ? [] : fallback;
      }
    } else {
      return key === "cart" ? [] : fallback;
    }
  }

export default persistStorage;