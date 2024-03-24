import { useState } from 'react';
import {
  DefaultSectionT,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SectionList,
} from 'react-native';

export const useScrollToTop = (ref: React.RefObject<SectionList<any, DefaultSectionT>>) => {
  const SCREEN_HEIGHT = Dimensions.get('window').height;

  const [showButton, setShowButton] = useState<Boolean>(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > SCREEN_HEIGHT) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    ref.current?.scrollToLocation({ sectionIndex: 0, itemIndex: 0 });
  };

  return { showButton, handleScroll, scrollToTop, ref };
};
