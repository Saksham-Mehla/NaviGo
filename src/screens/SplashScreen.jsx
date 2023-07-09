import React from 'react';
import {
	View, Text, StyleSheet, Image
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5367ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		height: 400,
		width: 400,
	},
	name: {
		positon: 'absolute',
		bottom: 100,
		fontSize: 30,
		fontFamily: 'Inder-Regular',
		color: '#dee2ff'
	},
});

export const SplashScreen = () => {
	return(
		<View style={styles.container}>
			<Image style = {styles.logo} source={require('../assets/images/Logo.png')} />
			<Text style= {styles.name}>NaviGo</Text>
		</View>

	);
};

export default SplashScreen;