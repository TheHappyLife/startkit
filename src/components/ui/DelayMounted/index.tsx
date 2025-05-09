import type { GeneralProps } from '@/types/ui';
import { useEffect, useState } from 'react';

type DelayMountedPropsType = {
  delay?: number;
} & GeneralProps;
function DelayMounted({ children, delay = 1000 }: DelayMountedPropsType) {
  const [allowMount, setAllowMount] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAllowMount(true);
    }, delay);
  }, []);

  return <>{allowMount && children}</>;
}

export default DelayMounted;
