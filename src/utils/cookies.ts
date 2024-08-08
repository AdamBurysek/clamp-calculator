export const setCookie = (name: string, value: string = "", days: number = 7): void => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = date.toUTCString();
  document.cookie = `${name}=${value};expires=${expires};path=/`;
};

export const getCookie = (name: string): string | null => {
  if (typeof window !== "undefined") {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts[1].split(";")[0];
  }
  return null;
};

// Functions for handling boolean values in cookies

export const stringToBoolean = (value: string | null, defaultValue: boolean = true): boolean => {
  if (value === null) return defaultValue;
  return value === "true";
};

export const booleanToString = (value: boolean): string => {
  return value ? "true" : "false";
};
