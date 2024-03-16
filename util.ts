export const filterObject = (obj: Object) => Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined)
  );