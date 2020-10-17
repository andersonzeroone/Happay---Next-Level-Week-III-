import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TouchableOpacityBase} from 'react-native';
import MapView , {Marker,Callout,PROVIDER_GOOGLE}from 'react-native-maps';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import mapMaker from '../images/Local.png';


export default function OrphanagesMap(){

  const navigation = useNavigation();

  function handleNavigateToOrphanageDetails(){
    navigation.navigate('OrphanagesDetails')
  }
  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude:-11.1902639,
          longitude:-40.5298636,
          latitudeDelta:0.008,
          longitudeDelta:0.008,
        }}
      >
        <Marker
          icon={mapMaker}
          calloutAnchor={{
            x:2.7,
            y:0.8,
          }}
          coordinate={{
            latitude:-11.1902639,
            longitude:-40.5298636,
          }}
        >
          <Callout tooltip={true} onPress={handleNavigateToOrphanageDetails}>
            <View style={styles.callooutContainer}>
              <Text style={styles.callooutText}>Lar doce lar</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Orfanatos encontrados</Text>

        <TouchableOpacity 
          style={styles.createOrphanageButton}
          onPress={()=> {}}
        >
          <Feather name='plus' size={20} color='#FFF'/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  callooutContainer:{
    width:160,
    height:46,
    paddingHorizontal:16,
    backgroundColor:'rgba(255,255,255,0.8)',
    borderRadius:16,
    justifyContent:'center',

  },
  callooutText:{
    fontFamily:'Nunito_700Bold',
    color:'#0089a5',
    fontSize:14,
  },
  footer:{
    position:'absolute',
    left:24,
    right:24,
    bottom:32,

    backgroundColor:'#fff',
    borderRadius:20,
    height:56,
    paddingLeft:24,

    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

    elevation:3,
  },
  footerText:{
    fontFamily:'Nunito_700Bold',
    color:'#8fa7b3',
  },
  createOrphanageButton:{
    width:56,
    height:56,
    backgroundColor:'#15c3d6',
    borderRadius:20,

    justifyContent:'center',
    alignItems:'center'
  }

});