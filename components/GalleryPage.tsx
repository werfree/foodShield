import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {globalStyle} from '../style/style';

const GalleryPage = () => {
  useEffect(() => {}, []);
  return (
    <View style={globalStyle.homeContainer}>
      <Text style={globalStyle.text}>Gallery Page</Text>
    </View>
  );
};

export default GalleryPage;

const styles = StyleSheet.create({});
