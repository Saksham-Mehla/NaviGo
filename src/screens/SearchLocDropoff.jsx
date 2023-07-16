import React, {useState} from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
	PermissionsAndroid,
} from 'react-native';

import {API_KEY} from '../constants';


import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const styles = StyleSheet.create({
	container: {
			// backgroundColor: '#5367ff',
			flex: 1,
			alignItems: 'center',
	},
	input: {
		position: 'absolute',
		top: 50,
		left: 0,
		color: 'black',
		backgroundColor: 'white',
		borderRadius: 10,
	},
	mapregion: {
		width: '100%',
		backgroundColor: '#d9d9d9',
		height: '100%',
	},
	map: {
		height: '100%',
		width: '100%',
		backgroundColor: '#d9d9d9',
	},
	searchcontainer: {
		width: '100%',
		height: '100%',
		// backgroundColor: '#5367ff',
		flexDirection: 'row',
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
	},
	searchbar: {
		width: '100%',
		height: '100%',
		marginTop: 40,
					// backgroundColor: '#5367ff',
	},
});

const BackButton = ({nav}) => {
	return(
		<Pressable onPress={() => nav.navigate('MainScreen')} 
		style={{
			height: 45, 
			width: 45, 
			alignItems: 'center', 
			justifyContent: 'center', 
			borderColor: 'white', 
			borderRadius: 45,
			// backgroundColor: '#5367ff',
			borderColor: 'white',
			margin: 5,
		}}>
			<Text style={{fontSize: 60, marginTop: -30, marginLeft: -5, color: 'black', padding: 0,}}>&#8249;</Text>
		</Pressable>
	);
}

const Line = () => {
	return(
		<View style={{
			width: 500,
			height: 0,
			backgroundColor: '#d9d9d9',
			borderColor: '#d9d9d9',
			borderWidth: 0.2,
			elevation: 5,
			marginTop: 10,
		}} />
	)
} 

const Result = ({data}) => {
	return(
		<View style={{
			height: 50,
			width: '100%',
			borderBottomWidth: 1,
			borderColor: '#d9d9d9',
			alignItems: 'center',
			justifyContent: 'flex-start',
			flexDirection: 'row',
		}} >
			<Image style={{height: 20, width: 20, marginHorizontal: 10,}} source={require('../assets/images/icons/location.png')} />
			<Text style={{fontSize: 14, color: '#444444', }}>{data.description}</Text>
		</View>
	);
}

const SearchContainer = ({nav, route}) => {
	const [dropoff, setDropoff] = React.useState(route.params.pickupLoc);
	const [dDesc, setDDesc] = React.useState(route.params.pLocDesc);

	const pickup = route.params.pickupLoc;
	const pDesc = route.params.pLocDesc;


	const notifyChangeDropoff = (location, description) => {
		setDropoff(location);
		setDDesc(description);
	}

	// , { pickupLoc: pickup, dropoffLoc : dropoff }

	navigator.geolocation = require('../../node_modules/react-native-geolocation-service/js/Geolocation');

	return(
		<View style={styles.searchcontainer}>
			<View style={styles.searchbar}>
				<GooglePlacesAutocomplete
					styles={{
						textInput: {
							color: 'black',
							fontSize: 16,
						},
						textInputContainer: {
							width: "98%",
							borderRadius: 50,
						}
					}}
					placeholder='Search Dropoff Location'
					minLength={2}
					autoFocus={true}
					returnKeyType={'search'}
					listViewDisplayed={true}
					fetchDetails={true}
					onPress={
						(data, details = null) => {
							console.log(details.geometry.location.lat);
							nav.push('SelectRoute', {pickupLoc: pickup, dropoffLoc: {latitude: details.geometry.location.lat, longitude: details.geometry.location.lng}, dLocDesc: data.description, pLocDesc: pDesc});

						}
					}
					query={{
						key: API_KEY,
						language: 'en'
					}}
					nearbyPlacesAPI='GooglePlacesSearch'
					debounce={200}
					textInputProps={{
						InputComp: TextInput,
						leftIcon:  { type: 'font-awesome', name: 'chevron-left' },
		      	errorStyle: { color: 'red' },
					}}
					supressDefaultStyles={true}
					inbetweenCompo={<Line />}
					renderLeftButton={() => <BackButton nav={nav}/>}
					renderRow={(data, index) => <Result data={data} />}
				/>
			</View>
				
		</View>
	);

}

const onPressFun = () => {
	return('');
}


const SearchLocDropoff = ({navigation, route}) => {

  return (
    <View style={styles.container}>
      <SearchContainer nav={navigation} route={route}/>

    </View>
  );
};

export default SearchLocDropoff;
