import React from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
} from 'react-native';

import { BackButton } from './BackButton';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(53,67,255,0.4)',
		alignItems: 'center',
		position: 'absolute',
		justifyContent: 'center',
	},
	popupContainer: {
		width: '95%',
		height: 265,
		backgroundColor: '#d9d9d9',
		borderRadius: 20,
		elevation: 10,
		overflow: 'hidden',
	},
	icon: {
		width: 60,
		height: 60,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},

});

const onPressFun = () => {
	return('');
}

const BottomButton = (props) => {
	return(
		<View style={{
			width: '100%',
			height: 48,
			backgroundColor: '#d9d9d9',
			position:'absolute',
			bottom: 0,
			borderTopWidth: StyleSheet.hairlineWidth,
		}}>
			<Pressable
				onPress={props.shareFun}
				style={{
					width: '100%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
			}}>
					<Text style={{fontSize: 17, color: '#5367ff', textAlign: 'center',}}> Noted </Text>
			</Pressable>
		</View>
	);
}

const Popup = () => {
	return(
		<View style={styles.popupContainer}>
			<Text style={{fontSize: 18, color: '#5367ff', paddingVertical: 10, width: '100%', textAlign: 'center', backgroundColor: 'black'}}>ALERT!</Text>
			<View style={{height: 180, width: '100%', backgroundColor: '#d9d9d9', justifyContent: 'center', alignItems: 'center',}}>
				<Image style={{width: 100, height: 100,}} source={require('../assets/images/icons/warning.png')} />
				<Text style={{fontSize: 18, color: '#888888', paddingVertical: 10, width: '100%', textAlign: 'center',}}>High Risk area ahead!</Text>
			</View>
			<BottomButton />
		</View>
	);
}


export const Warning = (props) => {
	if(props.hide===true){
		return null;
	}
	else {
		return (
	    <View style={styles.container}>
	    	<Popup />
	    </View>
	  );
	}
  
};

export default Warning;
