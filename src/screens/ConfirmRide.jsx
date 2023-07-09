import React from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
} from 'react-native';

import { BackButton } from '../components/BackButton';
import { RideDetails } from '../components/RideDetails';



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

const Cancel = () => {
	return(
		<Pressable
			onPress={onPressFun}
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

const ConfirmRide = () => {

  return (
    <View style={styles.container}>
    	<MapRegion />
    	<View style={{position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white', justifyContent: 'flex-end'}}>
	    	<RideDetails 
					from='Current Location'
					to='IIIT Delhi'
					via='Ashram Road'
					time={25}
					distance={15}
					fare={255}
					mode='waiting'
				/>
				<Cancel />
			</View>
			<SlideToConfirm />
			<BackButton mode='default'/>
			

    </View>
  );
};

export default ConfirmRide;
