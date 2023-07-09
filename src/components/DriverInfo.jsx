import React from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: '85%',
		height: 120,
		position: 'absolute',
		bottom: 180,
		backgroundColor: '#5367ff',
		right: 10,
		borderRadius: 20,
		elevation: 10,
		flexDirection: 'row',
	},
	imagecontainer: {
		position: 'absolute',
		width: 80,
		height: 80,
		top: -10,
		left: -40,
		backgroundColor: '#d9d9d9',
		right: 10,
		borderRadius: 80,
		borderWidth: 5,
		borderColor: '#5367ff',
		elevation: 20,
	},
});

const DriverImage = (props) => {
	return(
		<View style={styles.imagecontainer}>
			<Image style={{width: '100%', height: '100%', borderRadius: 80}} source={props.source} />
		</View>
	);
}

const callFun = () => {
	return('');
}

const ContactButtons = (props) => {
	return(
		<View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
			<Pressable onPress={callFun} style={{
				height: 30,
				width: 65,
				backgroundColor: '#d9d9d9',
				borderRadius: 10,
				alignItems: 'center',
				justifyContent: 'center',
				margin: 5,
			}}>
				<Text style={{fontSize: 18, color: 'black'}}>&#128222;</Text>
			</Pressable>
			<Pressable onPress={callFun} style={{
				height: 30,
				width: 65,
				backgroundColor: '#d9d9d9',
				borderRadius: 10,
				alignItems: 'center',
				justifyContent: 'center',
				margin: 5,
			}}>
				<Image style={{width: 20, height: 20}} source={require('../assets/images/icons/paper-plane.png')} />
			</Pressable>
		</View>
	);
}

export const DriverInfo = (props) => {
	const mode = props.mode;

	if(mode==='waiting') {
		return(
			<View style={styles.container}>
				<DriverImage source={props.image}/>
				<View style={{width: '50%', height: '100%', justifyContent: 'flex-end'}}>
					<Text style={{fontSize: 18, color: 'white', textAlign: 'left', paddingLeft: 10,}}>{props.name}</Text>
					<Text style={{fontSize: 14, color: 'black', textAlign: 'left', paddingLeft: 14, paddingBottom: 5,}}>{props.rating} &#9733;</Text>
				</View>
				<View style={{width: '50%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
					<Text style={{fontSize: 18, color: 'white', textAlign: 'right', paddingRight: 10, paddingTop: 10,}}>{props.model}</Text>
					<Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'right', paddingRight: 10, paddingBottom: 5, marginTop: -8,}}>{props.carNum}</Text>
					<ContactButtons phoneNum={props.phoneNum} />
				</View>
			</View>
		);
	}
	else {
		return(
			<View style={{...styles.container, bottom: 235,}}>
				<DriverImage source={props.image}/>
				<View style={{width: '50%', height: '100%', justifyContent: 'flex-end'}}>
					<Text style={{fontSize: 18, color: 'white', textAlign: 'left', paddingLeft: 10,}}>{props.name}</Text>
					<Text style={{fontSize: 14, color: 'black', textAlign: 'left', paddingLeft: 14, paddingBottom: 5,}}>{props.rating} &#9733;</Text>
				</View>
				<View style={{width: '50%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
					<Text style={{fontSize: 18, color: 'white', textAlign: 'right', paddingRight: 10, paddingTop: 10,}}>{props.model}</Text>
					<Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'right', paddingRight: 10, paddingBottom: 5, marginTop: -8,}}>{props.carNum}</Text>
				</View>
			</View>
		);
	}
	
}

export default DriverInfo;
