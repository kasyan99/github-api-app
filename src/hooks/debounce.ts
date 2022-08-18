import { useEffect, useState } from "react";

export function useDebounce(value: string, delay = 300): string {
  const [debounced, setDebaunced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebaunced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}
