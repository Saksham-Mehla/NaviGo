import React from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		height: 100,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		// borderWidth: 1,
	},
	textLarge: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'left',
		color: 'black',
	},
	textSmall: {
		fontSize: 14,
		textAlign: 'left',
		color: 'black',
		marginVertical: 14,
	},
	dot: {
		height: 6,
		width: 6,
		borderRadius: 6,
		margin: 1,
	},
	line: {
		width: 0,
		height: 55,
		borderWidth: 0.5,
		borderColor: 'black',
		margin: 4,
		backgroundColor: 'black',
	},
	icon: {
		width: 20,
		height: 20,
	},
});

const Line = () => {
	return(
		<View style={{justifyContent: 'center'}}>
			<View style={{...styles.dot, backgroundColor: '#67c17f'}} />
			<View style={styles.line} />
			<View style={{...styles.dot, backgroundColor: '#5367ff'}} />
		</View>
	);
}

export const FromToVia = (props) => {
	if(props.mode==='inRide'){
		return(
			<View style={styles.container}>
				<Line />
				<View style={{height: '100%', alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'nowrap', overflow:'hidden',}}>
					<Text style={styles.textLarge}>  {props.from}...</Text>
					<Text style={styles.textSmall}>  via {props.via}</Text>
					<Text style={styles.textLarge}>  {props.to}...</Text>
				</View>
			</View>
		);
	}
	else {
		return(
			<View style={styles.container}>
				<Line />
				<View style={{height: '100%', alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'nowrap', overflow:'hidden',}}>
					<Text style={styles.textLarge}>  {props.from}...</Text>
					<Text style={styles.textSmall}>  via {props.via}</Text>
					<Text style={styles.textLarge}>  {props.to}...</Text>
				</View>
				

				<View style={{height: '100%', alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20,}}>
					<Text style={{...styles.textLarge, marginBottom: 10, borderBottomWidth: 0.5, borderColor: 'black', paddingBottom: 10,}}>  <Image source={require('../assets/images/icons/timer.png')} style={styles.icon} />  {props.time} min  </Text>
					<Text style={styles.textLarge}>  &#10148;  {props.distance} km  </Text>
				</View>
			</View>
		);
	}
	
}

export default FromToVia;
