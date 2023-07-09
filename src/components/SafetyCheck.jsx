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
					backgroundColor: 'red',
			}}>
					<Text style={{fontSize: 17, color: '#ffffff', textAlign: 'center',}}> Help </Text>
			</Pressable>
			<Pressable
				onPress={props.shareFun}
				style={{
					width: '50%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					borderTopWidth: StyleSheet.hairlineWidth,
			}}>
					<Text style={{fontSize: 17, color: '#5367ff', textAlign: 'center',}}> I'm fine </Text>
			</Pressable>
		</View>
	);
}

const Popup = (props) => {
	return(
		<View style={styles.popupContainer}>
			<Text style={{fontSize: 18, color: '#5367ff', paddingVertical: 10, width: '100%', textAlign: 'center', backgroundColor: 'black'}}>Safety <Text style={{color: 'white'}}>Check</Text></Text>
			<View style={{height: 180, width: '100%', backgroundColor: '#d9d9d9', justifyContent: 'center', alignItems: 'center',}}>
				<Image style={{width: 100, height: 100,}} source={require('../assets/images/icons/security.png')} />
				<Text style={{fontSize: 16, color: '#888888', paddingTop: 10, width: '100%', textAlign: 'center',}}>{props.reason}</Text>
				<Text style={{fontSize: 16, color: '#888888', paddingBottom: 10, width: '100%', textAlign: 'center',}}>Are you okay?</Text>
			</View>
			<BottomButtons />
		</View>
	);
}


export const SafetyCheck = (props) => {
	if(props.hide===true){
		return null;
	}
	else {
		return (
	    <View style={styles.container}>
	    	<Popup reason={props.reason}/>
	    </View>
	  );
	}
  
};

export default SafetyCheck;
