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
import { RideDetails } from '../components/RideDetails';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#d9d9d9',
		alignItems: 'center',
	},
	mapregion: {
		height: '78%',
		width: '100%',
		backgroundColor: '#d9d9d9',
	},
	map: {
		height: '100%',
		width: '100%',
		backgroundColor: '#d9d9d9',
	},
	mainbutton: {
		position: 'absolute',
		left: 0,
		height: 100,
		width: 100,
		borderRadius: 100,
		borderColor: "#5367ff",
		borderWidth: 10,
		// top: -50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#d9d9d9',
		// left: 145,
		elevation: 20,
	},
});

const onPressFun = () => {
	return('');
}

const MapRegion = () => {
	return(
		<View style={styles.mapregion}>

						{/*<Image style={{height: '100%'}} source={require('../assets/images/confirmRide.png')} />*/}

		</View>
	);
}

const MainButton = () => {
	return(
		<View style={styles.mainbutton}>
			<Image source={require('../assets/images/car.png')} style={{width: 80, height: 80, borderRadius: 80,}} />
		</View>
	);
}

const SlideToConfirm = () => {
	return(
		<View style={{
			height: 80,
			width: '90%',
			position: 'absolute',
			bottom: 230,
			justifyContent: 'center',
			alignItems: 'center',
			// elevation: 20,
		}}>
			
			<View style={{
				height: 60,
				width: '85%',
				left: 20,
				backgroundColor: '#5367ff',
				alignItems: 'flex-end',
				justifyContent: 'center',
				borderRadius: 10,
				elevation: 19,
			}}>
				<Text style={{fontSize: 20, color: 'white', marginRight: 20}}>Slide to confirm ride  <Text style={{fontSize: 24}}>&#8250;&#8250;&#8250;</Text></Text>
			</View>
			<MainButton />
			
		</View>
	);
}

const Cancel = ({nav}) => {
	return(
		<Pressable
			onPress={() => nav.navigate('MainScreen')}
			style={{
				width: '100%',
				height: 64,
				backgroundColor: '#5367ff',
		}}>
			<View style={{
				width: '100%', height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				<Text style={{fontSize: 14, color: 'black', textAlign: 'center',}}> CANCEL </Text>
			</View>
		</Pressable>
	);
}

const ConfirmRide = ({navigation, route}) => {
	// const {pickupLoc, dropoffLoc} = route.params;
	const pickupLoc = route.params.pickupLoc;
	const dropoffLoc = route.params.dropoffLoc;
	const pDesc = route.params.pLocDesc;
	const dDesc = route.params.dLocDesc;

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




    	<View style={{position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white', justifyContent: 'flex-end'}}>
	    	<RideDetails 
					from={pDesc.substring(0,14)}
					to={dDesc.substring(0,14)}
					via='Ashram Road'
					time={25}
					distance={15}
					fare={255}
					mode='waiting'
				/>
				<Cancel nav={navigation}/>
			</View>
			<SlideToConfirm />
			<BackButton mode='default' nav={navigation}/>
			

    </View>
  );
};

export default ConfirmRide;

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

