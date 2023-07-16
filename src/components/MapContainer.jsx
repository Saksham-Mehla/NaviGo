import React, {useState} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Pressable,
	PermissionsAndroid,
	Alert,
	Button,
} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

 import React, {useState, useEffect} from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
	PermissionsAndroid,
	Alert,
	Button,
} from 'react-native';

import { BottomBar } from '../components/BottomBar';
import { LocButton } from '../components/LocButton';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';


const address = {
		width: '80%',
		height: 50,
		justifyContent: 'center',
		borderRadius: 15,
		elevation: 30,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5367ff',
		alignItems: 'center',
	},
	mapregion: {
		height: '100%',
		width: '100%',
		backgroundColor: '#d9d9d9',
	},
	map: {
		height: '100%',
		width: '100%',
		backgroundColor: '#d9d9d9',
	},
	pickup: {
		...address,
		position: 'absolute',
		backgroundColor: '#5367ff',
		bottom: 310,
		left: -30,
		elevation: 20,
	},
	icon: {
		height: 30,
		width: 30,
		margin: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

});

const onPressFun = () => {
	return('');
}

const MapContainer = ({navigation}) => {
// export default class MapContainer extends React.Component {

// 	state = {
// 		region: {},
// 		locations: [],
// 	};

// 	componentDidMount() {
// 		this.getInitialState();
// 	}

// 	getInitialState() {
// 		getLocation().then(data => {
// 			this.updateState({
// 				latitude: data.latitude,
// 				longitude: data.longitude,
// 			});
// 		});
// 	}

// 	updateState(location) {
// 		this.setState({
// 			region: {
// 				latitude: location.latitude,
// 				longitude: location.longitude,
// 				latitudeDelta: 0.003,
// 				longitudeDelta: 0.003,
// 			},
// 		});
// 	}

// 	getCoordsFromName(loc) {
// 		this.updateState({
// 			latitude: loc.lat,
// 			longitude: loc.lng,
// 		});
// 	}

// 	onMapRegionChange(region) {
// 		this.setState({ region });
// 	}



	const [currentLocation, setCurrentLocation] = useState(null);
	const [locationPermission, setLocationPermission] = useState(false);

	const checkPermission = async () => {
    	try {
    		const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app requires access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }

	      );
				if (granted === PermissionsAndroid.RESULTS.GRANTED) {
	        setLocationPermission('granted');
	      } else {
	        setLocationPermission('denied');
	      }    	
	    } catch (error) {
	    		Alert.alert(error);
	    }
    };



  const handleGetCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      (error) => {
        Alert.alert(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    checkPermission()
    // handleGetCurrentLocation();
    .then(handleGetCurrentLocation());
  }, []);

  return (
    <View style={styles.container}>
    	{locationPermission ? (
    		console.log('location permission granted')
    	) : (
    		console.log('no location permission')
    	)
    	}

    	{/*<MapRegion currentLocation={currentLocation} nav={navigation}/>*/}

    	{
    		currentLocation ? (
    				console.log(currentLocation)
    			) : (
    				console.log('no current location')
    			)
    	}

    	<View style={styles.mapregion}>
				{currentLocation ? (
					<MapView 
						provider={PROVIDER_GOOGLE}
						style={styles.map}
						region={{
							latitude: currentLocation.latitude,
		          longitude: currentLocation.longitude,
		          latitudeDelta: 0.0922,
		          longitudeDelta: 0.0421,
						}}
						customMapStyle={mapStyle}
					>
						<Marker
		            draggable
		            coordinate={{
		              latitude: currentLocation.latitude,
		              longitude: currentLocation.longitude,
		            }}
		            onDragEnd={
		              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
		            }
		            title={'Test Marker'}
		            description={'This is a description of the marker'}
		          />
					</MapView>
				) : (

					<Text> Loading ...</Text>
					
				)}
				

					<Pickup nav={navigation}/>
					<LocButton
						locType={2}
						styles={{
							position: 'absolute',
							backgroundColor: '#5367ff',
							bottom: 250,
							right: -10,
							elevation: 20,
						}}
						onPress={onPressFun}
						text1={'Drop off:'}
						text2={'Search Drop off'}
						textColor={'white'}
						nav={navigation}
					/>
			</View>

    	<Suggestions nav={navigation}/>
			<BottomBar />

    </View>
  );
};

export default MapContainer;

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

// const MapRegion = ({currentLocation, nav}) => {
// 	// const [currentLocation, setCurrentLocation] = useState({latitude: 37.78825, longitude: -122.4324,});

// 	return(
// 		<View style={styles.mapregion}>
// 			{currentLocation ? (
// 				<MapView 
// 					provider={PROVIDER_GOOGLE}
// 					style={styles.map}
// 					initialRegion={{
// 						latitude: currentLocation.latitude,
// 	          longitude: currentLocation.longitude,
// 	          latitudeDelta: 0.0922,
// 	          longitudeDelta: 0.0421,
// 					}}
// 					customMapStyle={mapStyle}
// 				>
// 					<Marker
// 	            draggable
// 	            coordinate={{
// 	              latitude: currentLocation.latitude,
// 	              longitude: currentLocation.longitude,
// 	            }}
// 	            onDragEnd={
// 	              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
// 	            }
// 	            title={'Test Marker'}
// 	            description={'This is a description of the marker'}
// 	          />
// 				</MapView>
// 			) : (
// 				<Text>Loading ...</Text>
// 			)}
			

// 			<Pickup nav={nav}/>
// 			<LocButton
// 				locType={2}
// 				styles={{
// 					position: 'absolute',
// 					backgroundColor: '#5367ff',
// 					bottom: 250,
// 					right: -10,
// 					elevation: 20,
// 				}}
// 				onPress={onPressFun}
// 				text1={'Drop off:'}
// 				text2={'Search Drop off'}
// 				textColor={'white'}
// 				nav={nav}
// 			/>
// 		</View>
// 	);
// }