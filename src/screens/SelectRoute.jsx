import React from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
} from 'react-native';

// import { BottomBar } from '../components/BottomBar';
import { BackButton } from '../components/BackButton';
// import { LocButton } from '../components/LocButton';
import { SuggButton } from '../components/SuggButton';


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
});

const onPressFun = () => {
	return('');
}

const MapRegion = () => {
	return(
		<View style={styles.mapregion}>
			{/*<Image style={{height: '100%'}} source={require('../assets/images/routeSelection.png')} />*/}
		</View>
	);
}

const Suggestions = () => {
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
				onPress={onPressFun}
			/>
			<SuggButton 
				color='#0b843b'
				ETA={35}
				Distance={17}
				safetyScore={4.4}
				routeName='Route 2'
				onPress={onPressFun}
			/>
			<SuggButton 
				color='#e52cbc'
				ETA={25}
				Distance={15}
				safetyScore={4.1}
				routeName='Route 3'
				onPress={onPressFun}
			/>
		</View>
	);
}

const SelectRoute = () => {

  return (
    <View style={styles.container}>
    	<MapRegion />
    	<Text style={{fontSize: 22, textAlign: 'center', color: 'black', position: 'absolute', top: 25, left: 140, fontWeight: 'bold',}}> Select Route </Text>

    	<Suggestions />
			{/*<BottomBar />*/}
			<BackButton mode='default'/>

    </View>
  );
};

export default SelectRoute;
