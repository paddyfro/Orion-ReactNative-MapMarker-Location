import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Location, Permissions} from 'expo';
import MapView from'react-native-maps';
import { Marker } from 'react-native-maps';
import {requestPermissionsAsync} from 'expo-location';

export default function App() {
  state = {

  }

  return (

    <View style={styles.container}>
      <MapView style={styles.map}
        region={{
          latitude:54.040528,
          longitude:-6.184873,
          latitudeDelta:0.1,
          longitudeDelta:0.1          
        }}
        showsUserLocation={true}
      >      
      <MapView.Marker
      coordinate={{
        latitude:54.040528,
        longitude:-6.184873
      }}
      title={'My Marker Title'}
      description={'My marker description'}
    />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map:{
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0
  }
});
