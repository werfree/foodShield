import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from './style/style';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Camera} from 'react-native-vision-camera';
import {CameraPage} from './components/Camera';
import File from './components/Files';
import HomePage from './components/HomePage';
import {PermissionsPage} from './components/Permission';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MediaPage from './components/MediaPage';
import DevicesPage from './components/DevicePage';
import GalleryPage from './components/GalleryPage';

const App = () => {
  const Stack = createNativeStackNavigator();
  const cameraPermission = Camera.getCameraPermissionStatus();
  const showPermissionsPage = cameraPermission !== 'granted';
  console.log('Camera Permission', showPermissionsPage);

  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={showPermissionsPage ? 'PermissionsPage' : 'Home'}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="PermissionsPage" component={PermissionsPage} />
          <Stack.Screen name="MediaPage" component={MediaPage} />
          <Stack.Screen name="DevicesPage" component={DevicesPage} />
          <Stack.Screen name="CameraPage" component={CameraPage} />
          <Stack.Screen name="GalleryPage" component={GalleryPage} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
