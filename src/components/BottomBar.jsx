import React, {useState} from 'react';
import {
	View,
	Icon,
	Image,
	StyleSheet,
	Pressable,
	Text,
	Alert,
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
		height: 60,
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
		elevation: 10,
	},

});

const onPressFun = () => {
	return('');
}
const Settings = ({onPress}) => {
	return(
		<Pressable onPress={onPress} style={{...styles.bar, left: 0,}}>
			<Image source={require('../assets/images/icons/settings.png')} style={{width: 35, height: 35, marginRight: 30,}} />
		</Pressable>
	);
}

const Profile = ({onPress}) => {
	return(
		<Pressable onPress={onPress} style={{...styles.bar, right: 0,}}>
			<Image source={require('../assets/images/icons/profile.png')} style={{width: 40, height: 40, marginLeft: 30,}} />
		</Pressable>
	);
}

const MainButton = ({onPress}) => {
	return(
		<Pressable onPress={onPress} style={styles.mainbutton}>
			<Image source={require('../assets/images/car.png')} style={{width: 80, height: 80, borderRadius: 80,}} />
		</Pressable>
	);
}

export const BottomBar = () => {
	[currWindow, setCurrWindow] = useState(0);
	// State 0 -> Main Screen
	// State 1 -> Settings
	// State 2 -> User Profile

	function handleClick0() {
		setCurrWindow(0);
		Alert.alert('Main Button');
	}
	function handleClick1() {
		setCurrWindow(1);
		Alert.alert('Settings');

	}
	function handleClick2() {
		setCurrWindow(2);
		Alert.alert('Profile');

	}

	return(
		<View style={styles.barContainer}>
			<Settings onPress={handleClick1}/>
			<Profile onPress={handleClick2}/>		
			<MainButton onPress={handleClick0}/>
	
		</View>
	);
}

export default BottomBar;