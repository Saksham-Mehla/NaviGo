import React from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
} from 'react-native';

const styles = StyleSheet.create({
	icon: {
		height: 14,
		width: 14,
	},
	button: {
		width: 370,
		height: 60,
		alignItems: 'center',
		backgroundColor: '#d9d9d9',
		elevation: 20,
		borderRadius: 20,
		margin: 5,
	},
});

const ColorButton = (color) => {
	return(
		<View style={{
			height: 25, 
			width: 25, 
			borderColor: 'white', 
			borderRadius: 25, 
			borderWidth: 3, 
			backgroundColor: color.color,
			margin: 5, 
			marginLeft: 20,
		}} />
	);
}

export const SuggButton = (props) => {
	return(
		<Pressable
				onPress={props.onPress}
				style={styles.button}
			>
	    	<View style={{
					alignItems: 'center',
					flexDirection: 'row',
					margin: 0,
					width: '100%',
					height: '100%',
				}}>
					<ColorButton color={props.color} />
					<View style={{width: 230, height: '100%', alignItems: 'center', justifyContent: 'center'}}>
						<Text style={{fontSize: 14, color: 'black', marginBottom: 2,}}>via {props.routeName}</Text>
						<Text style={{fontSize: 12, color: 'black',}}> Safety Score: {props.safetyScore}</Text>
					</View>
					<View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
						<Text style={{fontSize: 14, color: props.color, marginBottom: 5, borderBottomWidth: 0.5, borderColor: 'black', paddingBottom: 4,}}>  <Image source={require('../assets/images/icons/timer.png')} style={styles.icon} />  {props.ETA} min  </Text>
						<Text style={{fontSize: 14, color: props.color,}}>  &#10148;  {props.Distance} km  </Text>
					</View>
				</View>
	  </Pressable>
		
	);
}

export default SuggButton;
