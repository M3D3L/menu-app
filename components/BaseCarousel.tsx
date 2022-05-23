import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import tw from 'twrnc';
import { categoriesArray } from '../data/categories';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image
} from 'react-native';

const categories = categoriesArray;

const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = props => {

  function handleChange(event) {
    // Here, we invoke the callback with the new value
    props.onChange(event.target.value);
  }

  const [entries, setEntries] = useState([]);
  const [background, setBackground] = useState('https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  const carouselRef = useRef(null);



  useEffect(() => {
    setEntries(categories);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {

    return (
      <View style={tw`w-[100%] h-[100%] flex-row relative justify-center`}>

        <View style={[styles.item, tw`relative justify-center`]}>

          <ParallaxImage

            source={{ uri: item.img }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.3}
            {...parallaxProps}
          />
          <Text style={tw`absolute text-white text-3xl bg-black bg-opacity-75`}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  };

  function changeBackground(e) {
    setBackground(categories[e].img);
  }

  return (
    <View style={[styles.container, tw`w-full h-full relative`]}>
      <Image style={tw`w-full h-full bg-white`} source={{ uri: background }}
      />

      <Image style={tw`w-[150px] h-[150px] absolute top-[5%] rounded-full bg-white self-center`} source={{ uri: 'https://imgs.search.brave.com/Kd9eN3jovJABDAiRIyGgs1JiV21gGeclN5iI7lnUkTM/rs:fit:512:512:1/g:ce/aHR0cHM6Ly93d3cu/YWRhcHRpdmV3ZnMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA3L2xvZ28t/cGxhY2Vob2xkZXIt/aW1hZ2UtMS5wbmc' }}
      />

      <View style={tw`absolute top-[40%] bg-transparent`}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          loop={true}
          autoplay={true}
          data={entries}
          onSnapToItem={index => {
            changeBackground(index);
          }}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});