import React from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
} from 'react-native';

import { BottomBar } from '../components/BottomBar';
import { BackButton } from '../components/BackButton';
import { LocButton } from '../components/LocButton';


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
		height: '60%',
		width: '100%',
		backgroundColor: '#d9d9d9',
	},
	pickup: {
		...address,
		position: 'absolute',
		backgroundColor: '#5367ff',
		bottom: 70,
		left: -30,
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

const Pickup = () => {
	return(
		<Pressable
			onPress={onPressFun}
			style={styles.pickup}
		>
			<View style={{...styles.buttonContainer, left: 50,}}>
				<Image 
				style={{
					height: 30,
					width: 30,
					marginRight: 25,
				}} 
				source={require('../assets/images/icons/target.png')} />
				<Text style={{color: 'white', fontSize: 14,}}>Pick Up:  <Text style={{fontWeight: 'bold', fontSize: 16,}}>Current Location</Text></Text>
			</View>
		</Pressable>
	);
}

const MapRegion = () => {
	return(
		<View style={styles.mapregion}>
			<View style={styles.map}>
				
			</View>
			<Pickup />
			<LocButton
				locType={2}
				styles={{
					position: 'absolute',
					backgroundColor: '#5367ff',
					bottom: 10,
					right: -10,
				}}
				onPress={onPressFun}
				text1={'Drop off:'}
				text2={'Search Drop off'}
				textColor={'white'}
			/>
		</View>
	);
}

const Suggestions = () => {
	return(
		<View 
			style={{
				right: -10,
				width: '100%',
				alignItems: 'flex-end',

			}}
		>
			<LocButton
				locType={2}
				styles={{
					backgroundColor: '#d9d9d9',
					marginTop: 10,
				}}
				textColor={'black'}
				textColor={'black'}
				text1={''}
				text2={'Location 1'}
			/>

			<LocButton
				locType={2}
				styles={{
					backgroundColor: '#d9d9d9',
					marginTop: 10,
				}}
				textColor={'black'}
				textColor={'black'}
				text1={''}
				text2={'Location 2'}
			/>

			<LocButton
				locType={2}
				styles={{
					backgroundColor: '#d9d9d9',
					marginTop: 10,
				}}
				textColor={'black'}
				textColor={'black'}
				text1={''}
				text2={'Location 3'}
			/>
		</View>
	);
}

const MainScreen = () => {

  return (
    <View style={styles.container}>
    	<MapRegion />

    	<Suggestions />
			<BottomBar />

    </View>
  );
};

export default MainScreen;
