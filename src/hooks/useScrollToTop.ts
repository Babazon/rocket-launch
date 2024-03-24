import { useRef, useState } from "react";
import { Dimensions, SectionList, NativeSyntheticEvent, NativeScrollEvent } from "react-native";

export const useScrollToTop = () => {

    const SCREEN_HEIGHT = Dimensions.get('window').height;

    const sectionListRef = useRef<SectionList>(null);
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
        sectionListRef.current?.scrollToLocation({ sectionIndex: 0, itemIndex: 0 });
    };

    return { showButton, handleScroll, scrollToTop, sectionListRef }
}