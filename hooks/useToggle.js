import { useState } from 'react';

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  console.log('true ', value);
  const toggle = () => {
    setValue(!value);
  };
  console.log('false ', value);

  return [value, toggle];
}

export { useToggle };
