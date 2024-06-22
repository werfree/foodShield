import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {globalStyle} from '../style/style';
import FontAwesome from 'react-native-vector-icons/MaterialCommunityIcons';

import * as ImagePicker from 'react-native-image-picker';

const BANNER_IMAGE = require('../img/logo.png');
const HomePage = ({navigation}) => {
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    console.log(ImagePicker);

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.assets) {
        const assets = response.assets;
        if (Array.isArray(assets) && assets.length >= 1) {
          const {uri: path, type} = assets[0];
          console.log(path, type);
          navigation.navigate('MediaPage', {
            path: path,
            type: 'photo',
          });
        }
      }
    });
  };

  return (
    <View style={globalStyle.homeContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={BANNER_IMAGE} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonView}
          title="Go to Camera"
          onPress={() => navigation.navigate('CameraPage')}>
          <FontAwesome name="camera-iris" color="#1e5387" size={70} />
          <Text style={styles.text}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => {
            openImagePicker();
          }}>
          <FontAwesome name="file-image" color="#1e5387" size={70} />
          <Text style={styles.text}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItemss: 'center',
  },
  logoContainer: {
    borderColor: '#1f3e5c',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    color: '#1f3e5c',
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 16,
  },
  logo: {
    opacity: 1,
    bottom: 0,
    left: 0,
    resizeMode: 'contain',
    height: 220,
    width: 220,
  },
});
