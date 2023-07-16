import React from 'react';
import {
	View, 
	Text, 
	StyleSheet, 
	Image,
	Pressable,
} from 'react-native';

const address = {
		width: '80%',
		height: 50,
		justifyContent: 'center',
		borderRadius: 15,
		elevation: 30,
}

const styles = StyleSheet.create({
	icon: {
		height: 25,
		width: 25,
		marginLeft: 10,
		marginRight: 5,

	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

});

export const LocButton = (props) => {
	const text1 = props.text1;
	const text2 = props.text2;

	const pickup = props.route.params.pickupLoc;
	const pDesc = props.route.params.pLocDesc;

	var iconLoc = '';
	if(props.locType===1){
		iconLoc = require('../assets/images/icons/target.png');
	}
	else if(props.locType===2){
		iconLoc = require('../assets/images/icons/location.png');
	}
	else {
		iconLoc = require('../assets/images/icons/star.png');
		return(
			<Pressable
				onPress={() => props.nav.navigate('SearchLocDropoff', {pickupLoc: pickup, pLocDesc: pDesc})}
				style={{
					...address,
					...props.styles, 
					width: '80%'
				}}
			>
				<View style={{...styles.buttonContainer,}}>
					<Image style={{...styles.icon, width: 20, height: 20,}} source={iconLoc} />
					<Text style={{color: props.textColor, fontSize: 14, width: '80%', textAlign: 'center'}}>{text1}  <Text style={{fontWeight: 'bold', fontSize: 16,}}>{text2}</Text></Text>
				</View>
			</Pressable>
		);
	}

	return(
		<Pressable
			onPress={() => props.nav.push('SearchLocDropoff', {pickupLoc: pickup, pLocDesc: pDesc})}
			style={{
				...address,
				...props.styles, 
			}}
		>
			<View style={{...styles.buttonContainer,}}>
				<Image style={styles.icon} source={iconLoc} />
				<Text style={{color: props.textColor, fontSize: 14, width: '80%', textAlign: 'center'}}>{text1}  <Text style={{fontWeight: 'bold', fontSize: 16,}}>{text2}</Text></Text>
			</View>
		</Pressable>
	);
}

export default LocButton;
