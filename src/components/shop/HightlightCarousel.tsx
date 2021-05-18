import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  LayoutChangeEvent,
  StyleSheet,
  View,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {HighlightScreen} from '../../types/domain/interfaces';
const {width} = Dimensions.get('window');

const MARGIN_HORIZONTAL = 10;
const style = StyleSheet.create({
  cards: {
    marginHorizontal: MARGIN_HORIZONTAL, //Do not modify this
    borderRadius: 10,
    height: 180,
    justifyContent: 'center',
    marginBottom: 10,
  },
});

interface HighlightCarouselProps {
  highlights: HighlightScreen[];
  [key: string]: any;
}

export function HighlightCarousel(props: HighlightCarouselProps) {
  const [mainViewSize, setMainViewSize] = useState({width: 0, height: 0});

  const {highlights} = props;

  function handleMainViewSize(event: LayoutChangeEvent) {
    const {height, width} = event.nativeEvent.layout;
    setMainViewSize({width: width - MARGIN_HORIZONTAL * 2, height: height});
  }

  return (
    <View>
      <SwiperFlatList
        onLayout={handleMainViewSize}
        autoplay
        autoplayDelay={10}
        autoplayLoop
        index={0}>
        {highlights.map((hl, i) => (
          <Image
            key={'hl-' + i}
            style={[{width: mainViewSize.width}, style.cards]}
            source={{uri: hl.image}}
          />
        ))}
      </SwiperFlatList>
    </View>
  );
}
