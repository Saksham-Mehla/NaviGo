import React from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';

import { BottomBar } from '../components/BottomBar';
import { BackButton } from '../components/BackButton';
import { LocButton } from '../components/LocButton';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#5367ff',
		alignItems: 'center',
	},
	mapregion: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
	},
	searchview: {
		position: 'absolute',
		flex:1,
		// top: 0,
		// left: 0,
		width: '100%',
		height: '23%',
		backgroundColor: '#5367ff',
		alignItems: 'center',
		elevation: 30,
	},
	input: {
		width: 340,
		height: 40,
		margin: 5,
		color: 'black',
		backgroundColor: 'white',
		// borderColor: '#d9d9d9d'
		padding: 8,
		fontSize: 14,
	}
});


const SearchView = () => {
	const [pickup, onChangePickup] = React.useState('');
	const [dropoff, onChangeDropoff] = React.useState('');

	return(
		<View style={styles.searchview}>
			<BackButton mode='popup'/>
			<View style={{width: '100%', top: 78, flexDirection: 'row', alignItems: 'center',justifyContent: 'flex-start'}}>
				<View style={{borderWidth: 1, marginTop: 0, marginLeft: 20, marginRight: 20, borderColor: 'black', height: 55, width: 0,}} />
				<View style={{alignItems: 'center', justifyContent: 'center', width: 340,}}>
					<TextInput 
						style={styles.input}
		        onChangeText={onChangePickup}
		        placeholder='Pick up location'
		        value={pickup}
		        inputMode="search"
		       />
		       <TextInput 
						style={styles.input}
		        onChangeText={onChangeDropoff}
		        placeholder='Destination'
		        value={dropoff}
		        inputMode="search"
		       />
				</View>
			</View>
			

		</View>
	);

}

const onPressFun = () => {
	return('');
}

const MapRegion = () => {
	return(
		<View style={styles.mapregion}>
			<View style={styles.map}></View>

		</View>
	);
}

const SearchLoc = () => {
  return (
    <View style={styles.container}>
    	<MapRegion />
    	<SearchView />
			{/*<BottomBar />*/}
    </View>
  );
};

export default SearchLoc;
