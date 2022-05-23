import React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import tw from 'twrnc'

import { productsArray } from '../data/products';

const DATA = productsArray;




const Item = ({ title, image, description }) => (
  <View style={tw`w-full h-[150px] mt-6 flex-row px-8 `}>

    <View style={tw`w-[50%] h-[100%]`}>
      <Image style={styles.image}
          source={{uri: image}}
        />
    </View>

    <View style={tw`w-[50%] h-[100%] flex-col pl-2`}>
      <Text style={tw`text-xl font-bold text-black dark:text-white`}>
        {title}
      </Text>
      <Text style={tw`text-sm text-black dark:text-white`}>
        {description}
      </Text>
      <Text style={tw`text-sm text-black dark:text-white`}>
        {description}
      </Text>
    </View>
    

  </View>
);

export default function TabTwoScreen() {
  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.img} description={item.description} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
