import React from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
} from 'react-native';

import {API_KEY} from '../constants';


import { BackButton } from '../components/BackButton';
import { SuggButton } from '../components/SuggButton';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5367ff',
		alignItems: 'center',
	},
	mapregion: {
		height: '70%',
		width: '100%',
		backgroundColor: '#d9d9d9',
	},
	map: {
		height: '100%',
		width: '100%',
		backgroundColor: '#d9d9d9',
	},	
});

const Suggestions = ({nav, route}) => {
	return(
		<View 
			style={{
				width: '100%',
				backgroundColor: '#5367ff',
				justifyContent: 'flex-start',
				alignItems: 'center',
				paddingTop: 10,
			}}
		>
			<SuggButton 
				color='#0e91ad'
				ETA={20}
				Distance={15}
				safetyScore={4.5}
				routeName='Route 1'
				onPress={() => nav.push('ConfirmRide', {pickupLoc: route.params.pickupLoc, dropoffLoc: route.params.dropoffLoc, dLocDesc: route.params.dLocDesc, pLocDesc: route.params.pLocDesc})}
			/>
			<SuggButton 
				color='#0b843b'
				ETA={35}
				Distance={17}
				safetyScore={4.4}
				routeName='Route 2'
				onPress={() => nav.push('ConfirmRide', {pickupLoc: route.params.pickupLoc, dropoffLoc: route.params.dropoffLoc, dLocDesc: route.params.dLocDesc, pLocDesc: route.params.pLocDesc})}
			/>
			<SuggButton 
				color='#e52cbc'
				ETA={25}
				Distance={15}
				safetyScore={4.1}
				routeName='Route 3'
				onPress={() => nav.push('ConfirmRide', {pickupLoc: route.params.pickupLoc, dropoffLoc: route.params.dropoffLoc, dLocDesc: route.params.dLocDesc, pLocDesc: route.params.pLocDesc})}
			/>
		</View>
	);
}

const SelectRoute = ({navigation, route}) => {
	const pickupLoc = route.params.pickupLoc;
	const dropoffLoc = route.params.dropoffLoc;
	const pDesc = route.params.pLocDesc;
	const dDesc = route.params.dLocDesc;

	// () => 

  return (
    <View style={styles.container}>
    	<View style={styles.mapregion}>
				{dropoffLoc ? (
					<MapView 
						provider={PROVIDER_GOOGLE}
						style={styles.map}
						region={{
							latitude: (pickupLoc.latitude + dropoffLoc.latitude ) / 2,
		          longitude: (pickupLoc.longitude + dropoffLoc.longitude ) / 2,
		          latitudeDelta: Math.abs(dropoffLoc.latitude-pickupLoc.latitude)+0.0922,
		          longitudeDelta: Math.abs(dropoffLoc.longitude-pickupLoc.longitude)+0.0421,
						}}
						customMapStyle={mapStyle}
					>
						<Marker
		            draggable
		            coordinate={{
		              latitude: pickupLoc.latitude,
		              longitude: pickupLoc.longitude,
		            }}
		            onDragEnd={
		              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
		            }
		            title={'Pick Up'}
		            description={'Pick up Location'}
		          />

		        <Marker
		            draggable
		            coordinate={{
		              latitude: dropoffLoc.latitude,
		              longitude: dropoffLoc.longitude,
		            }}
		            onDragEnd={
		              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
		            }
		            title={'Drop Off'}
		            description={'Drop off Location'}
		          />

						<MapViewDirections
							strokeColor="#5367ff"
							strokeWidth={5}
					    origin={pDesc}
					    destination={dDesc}
					    apikey={API_KEY}
					  />
					</MapView>
				) : (

					<Text> Loading ...</Text>
					
				)}
			</View>

    	<Text style={{fontSize: 22, textAlign: 'center', color: 'white', position: 'absolute', top: 25, left: 140, fontWeight: 'bold',}}> Select Route </Text>

    	<Suggestions nav={navigation} route={route}/>
			{/*<BottomBar />*/}
			<BackButton mode='default' nav={navigation}/>

    </View>
  );
};

export default SelectRoute;

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#111111'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];
