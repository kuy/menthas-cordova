export function categoryFromPath(path, defaultCategory = 'top') {
  const names = path.split('/');
  if (names.length !== 3) {
    return defaultCategory;
  }
  return names[2];
}

export const APP = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
export const BASE = APP ? 'http://menthas.com' : 'http://localhost:8001';
