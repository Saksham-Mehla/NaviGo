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
		<View
			onPress={onPressFun}
			style={{
				position: 'absolute',
				top: 20,
				left: 20,
				height: 45,
				width: 45, 
				borderRadius: 45,
				backgroundColor: '#d9d9d9',
				elevation: 5,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Pressable 
			style={{
				height: 45,
				width: 45,
				alignItems: 'center',
				justifyContent: 'center',
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
		</View>
		
	);
	}


	return(
		<View
			onPress={onPressFun}
			style={{
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
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Pressable 
			style={{
				height: 45,
				width: 45,
				alignItems: 'center',
				justifyContent: 'center',
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
		</View>
		
	);
} 

export default BackButton;

