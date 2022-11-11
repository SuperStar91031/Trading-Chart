import React from 'react';

type ResultBox<T> = { v: T };

// React hook for creating a value exactly once. useMemo doesn't give this guarantee unfortunately -
// https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
export function useConstant<T>(fn: () => T): T {
  const ref = React.useRef<ResultBox<T>>();

  if (!ref.current) {
    ref.current = { v: fn() };
  }

  return ref.current.v;
}
