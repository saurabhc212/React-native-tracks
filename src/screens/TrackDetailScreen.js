import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView , { Polyline } from 'react-native-maps';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(t=>t._id === _id);
    const initialCords = track.locations[0].coords;
    return <View>
        <Spacer>
        <Text h3>{track.name}</Text>
        </Spacer>
        <MapView
         initialRegion={{
             latitudeDelta: 0.01,
             longitudeDelta: 0.01,
             ...initialCords
         }}
         style={styles.map}
        >
            <Polyline 
              coordinates={track.locations.map(loc => loc.coords)}
            />
        </MapView>
    </View>
}

const styles = StyleSheet.create({
    map:{
        height: 300
    }
});

export default TrackDetailScreen;