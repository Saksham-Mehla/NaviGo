import React from 'react';
import {
	View, 
	Text,
	StyleSheet, 
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: '25%',
		height: 36,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		// borderWidth: 1,
		margin: 5,
	},
	text: {
		fontSize: 28,
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'black',
	}
});

export const Fare = (props) => {
	if(props.mode==='inRide') {
		return(
			<View style={{...styles.container, width: '40%', marginBottom: 40,}}>
				<Text style={styles.text}><Text style={{color: '#5367ff'}}>&#8377;</Text> {props.fare}</Text>
			</View>
		);
	}
	else {
		return(
			<View style={styles.container}>
				<Text style={styles.text}><Text style={{color: '#5367ff'}}>&#8377;</Text> {props.fare}</Text>
			</View>
		);
	}
	
}

export default Fare;
