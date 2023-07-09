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
		height: 275,
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

const BottomButtons = (props) => {
	return(
		<View style={{
			width: '100%',
			height: 48,
			backgroundColor: '#d9d9d9',
			position:'absolute',
			bottom: 0,
			flexDirection: 'row',
		}}>
			<Pressable
				onPress={props.shareFun}
				style={{
					width: '50%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					borderTopWidth: StyleSheet.hairlineWidth,
					borderColor: '#444444'
			}}>
					<Text style={{fontSize: 17, color: '#444444', textAlign: 'center',}}> Message </Text>
			</Pressable>
			<Pressable
				onPress={props.shareFun}
				style={{
					width: '50%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#5367ff'
					
			}}>
					<Text style={{fontSize: 17, color: 'white', textAlign: 'center',}}>Call</Text>
			</Pressable>
		</View>
	);
}

const CrossButton = () => {
	return(
		<Pressable
			onPress={onPressFun}
			style={{
				width: 30,
				height: 30,
				justifyContent: 'center',
				alignItems: 'center',
				position: 'absolute',
				top: 15,
				right: 15,
			}}>
			<Text style={{fontSize: 24, color: '#5367ff', fontWeight: 'bold',}}>&#10005;</Text>
		</Pressable>
	);
}

const Popup = (props) => {
	return(
		<View style={styles.popupContainer}>
			<View style={{marginTop: 30, height: 180, width: '100%', backgroundColor: '#d9d9d9', justifyContent: 'center', alignItems: 'center',}}>
				<Image style={{width: 100, height: 100, borderRadius: 100,}} source={require('../assets/images/icons/dp.png')} />
				<Text style={{fontSize: 18, color: '#000000', paddingTop: 10, width: '100%', textAlign: 'center',}}>Saksham Mehla</Text>
				<Text style={{fontSize: 16, color: '#888888', paddingBottom: 10, width: '100%', textAlign: 'center',}}>+91 9654xxxxxx</Text>
			</View>
			<BottomButtons />
			<CrossButton />
		</View>
	);
}


export const ContactPopup = (props) => {
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

export default ContactPopup;
