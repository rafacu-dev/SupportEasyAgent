/// <reference types="astro/client" />

declare module '*.astro' {
  const Component: any;
  export default Component;
}

// Extender tipos HTML para aceptar 'class' en lugar de 'className'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {}
