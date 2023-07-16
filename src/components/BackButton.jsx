import React from 'react';
import {
	View,
	Image,
	Text,
	Pressable,
} from 'react-native';


const onPressFun = () => {
	return('');
}

export const BackButton = (props) => {

	if(props.mode==='popup'){
		return(
			<Pressable 
				onPress={() => props.nav.goBack()}
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					position: 'absolute',
					top: 20,
					left: 20,
					height: 45,
					width: 45, 
					borderRadius: 45,
					backgroundColor: '#d9d9d9',
					borderWidth: 1,
					borderColor: 'white',
					elevation: 5,
					
				}}>
					<Text 
					style={{
						color: 'black', 
						fontSize: 60,
						marginTop: -26,
						marginLeft: -5,
					}}>
					&#8249;
					</Text>
			</Pressable>
		
		);
	}


	return(
		<Pressable 
		onPress={() => props.nav.goBack()}
		style={{
			alignItems: 'center',
			justifyContent: 'center',
			position: 'absolute',
			top: 20,
			left: 20,
			height: 45,
			width: 45, 
			borderRadius: 45,
			backgroundColor: '#5367ff',
			borderWidth: 1,
			borderColor: 'white',
			elevation: 5,
			
		}}>
			<Text 
			style={{
				color: 'white', 
				fontSize: 60,
				marginTop: -26,
				marginLeft: -5,
			}}>
			&#8249;
			</Text>
		</Pressable>
		
	);
} 

export default BackButton;

