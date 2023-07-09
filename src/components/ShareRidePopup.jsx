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
		height: 170,
		backgroundColor: 'white',
		borderRadius: 20,
		elevation: 10,
		overflow: 'hidden',
	},
	button: {
		width: 90,
		height: 90,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 0,
	},
	icon: {
		borderRadius: 60,
		width: 60,
		height: 60,
		backgroundColor: '#eeeeee',
		alignItems: 'center',
		justifyContent: 'center',
	},

});

const onPressFun = () => {
	return('');
}

const Icon = (props) => {
	icon = require('../assets/images/icons/gmail.png');
	if(props.icon==='Whatsapp') {
			icon = require('../assets/images/icons/whatsapp.png');
	}
	else if(props.icon==='Message'){
			icon = require('../assets/images/icons/message.png');
	}
	else if(props.icon==='Copy Link'){
			icon = require('../assets/images/icons/link.png');
	}
	else {
			icon = require('../assets/images/icons/more.png');
	}
	return(
		<Pressable onPress={onPressFun} style={styles.icon}>
			<Image style={{width: 40, height: 40,}} source={icon} />
		</Pressable>
	);
}

const Button = (props) => {
	return(
		<View style={styles.button}>
			<Icon icon={props.icon}/>
			<Text style={{paddingTop: 5,}}>{props.icon}</Text>
		</View>
	);
}

const Popup = () => {
	return(
		<View style={styles.popupContainer}>
			<Text style={{fontSize: 18, color: 'white', paddingVertical: 10, width: '100%', textAlign: 'center', backgroundColor: 'black'}}><Text style={{color: '#5367ff'}}>SHARE</Text> Ride Details</Text>
			<View style={{height: 120, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
				<Button icon='Copy Link'/>
				<Button icon='Whatsapp'/>
				<Button icon='Message'/>
				<Button icon='More'/>
			</View>
		</View>
	);
}


export const ShareRidePopup = (props) => {
	if(props.hide===true){
		return null;
	}
	else {
		return (
	    <View style={styles.container}>
	    	<Popup />
				<BackButton mode='popup'/>			

	    </View>
	  );
	}
};

export default ShareRidePopup;
