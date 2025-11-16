/// <reference types="vite/client" />

declare module '@assets/*.jpg' {
  const value: string;
  export default value;
}

declare module '@assets/*.png' {
  const value: string;
  export default value;
}

declare module '@assets/*.jpeg' {
  const value: string;
  export default value;
}
