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
		height: 30,
		width: 30,
		margin: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

});

export const LocButton = (props) => {
	var iconLoc = props.locType==1 ? require('../assets/images/icons/target.png') : require('../assets/images/icons/location.png');

	const text1 = props.text1;
	const text2 = props.text2;

	return(
		<Pressable
			onPress={props.onPress}
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
