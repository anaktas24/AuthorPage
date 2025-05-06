import { HTMLAttributes } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    className?: string;
  }

  namespace JSX {
    interface IntrinsicElements {
      marquee: HTMLAttributes<HTMLElement>;
    }
  }
}