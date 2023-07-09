import React from 'react';
import {
	View, 
	Text, 
	StyleSheet, 
	Image,
	Pressable,
} from 'react-native';

import Carousel from '../components/Carousel';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5367ff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	skip: {
	    color: '#a7b1fa',
	    fontSize: 20,
	    fontFamily: 'Inder-Regular',
	},
	skipButton: {
		position: 'absolute',
		bottom: 30,
		right: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	car: {
		position: 'absolute',
		height: 200,
		width: 200,
		bottom: -50,
		display: 'flex',
		left: 10,
	},
});

const onPressFun = () => {
	return('');
}

const Features = () => {
	return(
		<View style={styles.container}>
			<Carousel
				style='slide'
				items = {[{
					title: 'We prioritise your safety!',
					desc: '',
					image: undefined,
				}, {
					title: 'Be in control of your ride.',
					desc: 'Choose the path that makes you feel the safest.',
					image: require('../assets/images/icons/routeSelection.png'), 
				}, {
					title: 'Route Monitoring',
					desc: 'Stay informed about large deviations from your route.',
					image: require('../assets/images/icons/arrows.png'),
				}, {
					title: 'Wellbeing Checks',
					desc: 'Stay connected with us during your rides.',
					image: require('../assets/images/icons/security.png'),
				}, {
					title: 'Safety Assessment',
					desc: 'Know the Safety Rating of your route and area.',
					image: require('../assets/images/icons/rate.png'),
				}, {
					title: 'Drop-off Time Monitoring',
					desc: 'We let you know when your ride is taking longer than expected.',
					image: require('../assets/images/icons/timeAlert.png'),
				}, {
					title: 'Emergency Contacts',
					desc: 'Your loved ones are just one click away.',
					image: require('../assets/images/icons/emergency-call.png'),
				}]}
			/>
			<Image style={styles.car} source={require('../assets/images/car.png')} />
			<Pressable onPress={onPressFun} style={styles.skipButton}><Text style={styles.skip}> Skip </Text></Pressable>
		</View>

	);
};

export default Features;