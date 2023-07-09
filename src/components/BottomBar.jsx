import React from 'react';
import {
	View,
	Icon,
	Image,
	StyleSheet,
	// Dimensions,
	Text,
} from 'react-native';


const styles = StyleSheet.create({
	barContainer: {
		flexDirection: 'row',
		position: 'absolute',
		bottom: 0,
		alignItems: 'center',
		width: '100%',
		// backgroundColor: '#d9d9d9',
	},
	bar: {
		backgroundColor: '#d9d9d9',
		height: 80,
		width: '50%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	mainbutton: {
		position: 'absolute',
		height: 100,
		width: 100,
		borderRadius: 100,
		borderColor: "#5367ff",
		borderWidth: 10,
		top: -50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#d9d9d9',
		left: 145,
		elevation: 2,
	},

});
const Settings = () => {
	return(
		<View style={{...styles.bar, left: 0,}}>
			<Image source={require('../assets/images/icons/settings.png')} style={{width: 35, height: 35, marginRight: 30,}} />
		</View>
	);
}

const Profile = () => {
	return(
		<View style={{...styles.bar, right: 0,}}>
			<Image source={require('../assets/images/icons/profile.png')} style={{width: 40, height: 40, marginLeft: 30,}} />
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

export const BottomBar = () => {
	return(
		<View style={styles.barContainer}>
			<Settings />
			<Profile />
			<MainButton />
		</View>
	);
}

export default BottomBar;