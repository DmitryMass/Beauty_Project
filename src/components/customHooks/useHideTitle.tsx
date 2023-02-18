import { useState } from 'react';

export const useHideTitle = () => {
  const [visibility, setVisibility] = useState<boolean>(true);

  const listenToScroll = () => {
    let heightToHideFrom = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      visibility && setVisibility(false);
    } else {
      setVisibility(true);
    }
  };

  return {
    listenToScroll,
    visibility,
  };
};
