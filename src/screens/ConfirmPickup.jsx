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
	button: {
		position: 'absolute',
		bottom: 180,
		width: '60%',
		height: 50,
		backgroundColor: '#5367ff',
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 10,
	},
});

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

const ConfirmButton = () => {
	return(
		<Pressable
				onPress={onPressFun}
				style={styles.button}
			>
	    	<View>
		    	<Text style={{fontSize: 16, color: 'white'}}> Confirm Pick up </Text>
	    	</View>
	  </Pressable>
	);
}

const ConfirmPickup = () => {
  return (
    <View style={styles.container}>
    	<MapRegion />
    	<LocButton
				locType={1}
				styles={{
					position: 'absolute',
					backgroundColor: '#5367ff',
					top: 15,
					right: -30,
				}}
				onPress={onPressFun}
				text1={'Pick up:'}
				text2={'LocationA'}
				textColor={'white'}
			/>
			<ConfirmButton />
			<BottomBar />
			<BackButton mode='default' />

    </View>
  );
};

export default ConfirmPickup;
