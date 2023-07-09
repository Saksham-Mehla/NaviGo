import React from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
} from 'react-native';

import { FromToVia } from './FromToVia';
import { Fare } from './Fare';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 100,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginVertical: 10,
	},
});

export const RideDetails = (props) => {
	return(
		<View style={styles.container}>
			<Fare fare={props.fare} mode={props.mode}/>
			<FromToVia 
				from={props.from}
				to={props.to}
				via={props.via}
				time={props.time}
				distance={props.distance}
				mode={props.mode}
			/>
		</View>
	);
}

export default RideDetails;
