import { StyleSheet, Image, Button } from 'react-native';
import tw from 'twrnc';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import BaseCarousel from '../components/BaseCarousel'
import Navigation from '../navigation';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


  return (
    <BaseCarousel />
  );
}

