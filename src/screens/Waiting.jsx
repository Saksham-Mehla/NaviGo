import React from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
} from 'react-native';

import { BottomBar } from '../components/BottomBar';
import { BackButton } from '../components/BackButton';
// import { UserButton } from '../components/UserButton';
import { RideDetails } from '../components/RideDetails';
import { DriverInfo } from '../components/DriverInfo';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#d9d9d9',
		alignItems: 'center',
	},
	mapregion: {
		height: '78%',
		width: '100%',
		backgroundColor: '#3b444b',
	},
});

const onPressFun = () => {
	return('');
}

const MapRegion = () => {
	return(
		<View style={styles.mapregion}>
				{/*<Image style={{height: '100%'}} source={require('../assets/images/waiting.png')} />*/}

		</View>
	);
}

const BottomButtons = (props) => {
	return(
		<View style={{
			width: '100%',
			height: 64,
			backgroundColor: '#5367ff',
			flexDirection: 'row',
		}}>
			<Pressable
				onPress={props.cancelFun}
				style={{
					left: 0,
					width: '50%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
			}}>
				<View style={{
					width: '100%', height: '60%',
					alignItems: 'center',
					justifyContent: 'center',
					borderRightWidth: 0.5,
					borderColor: 'black',
				}}>
					<Text style={{fontSize: 14, color: 'black', textAlign: 'center',}}> CANCEL </Text>
				</View>
			</Pressable>
			<Pressable
				onPress={props.shareFun}
				style={{
					right: 0,
					width: '50%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
			}}>
				<View style={{
					width: '100%', height: '60%',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					<Text style={{fontSize: 14, color: 'white', textAlign: 'center',}}> SHARE </Text>
				</View>
			</Pressable>
		</View>
	);
}

const Digit = (props) => {
	return(
		<View style={{elevation: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10, height: 42, width: 30, backgroundColor: '#5367ff', margin: 3}}>
				<Text style={{fontSize: 18, color: 'white', textAlign: 'center',}}> {props.num} </Text>
		</View>
	);
}

const Pin = () => {
	return(
		<View style={{position: 'absolute', right: 20, bottom: 310, alignItems: 'center', justifyContent: 'center',}}>
			<View style={{width: 75, height: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#d9d9d9', borderRadius: 10, margin: 5,}}>
				<Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', textAlign: 'center',}}>  PIN  </Text>
			</View>
			<View style={{alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row'}}>
				<Digit num={3} />
				<Digit num={9} />
				<Digit num={0} />
				<Digit num={2} />
			</View>
		</View>
	);
}

const Eta = (props) => {
	return(
		<View style={{elevation: 10, position: 'absolute', left: -10, bottom: 320, alignItems: 'center', justifyContent: 'center', width: 120, height: 50, backgroundColor: '#d9d9d9', borderRadius: 10, margin: 3}}>
				<Text style={{fontSize: 18, color: 'black', textAlign: 'center',}}>Arriving in{'\n'}<Text style={{fontWeight: 'bold'}}>{props.Eta} mins</Text></Text>
		</View>
	);
}

const BottomNav = () => {
	return (
    	<View style={{width: '100%', backgroundColor: 'white', justifyContent: 'flex-end'}}>
	    	<RideDetails 
					from='Current Location'
					to='IIIT Delhi'
					via='Ashram Road'
					time={25}
					distance={15}
					fare={255}
					mode='inRide'
				/>
				<BottomButtons helpFun={onPressFun} shareFun={onPressFun} />
			</View>
  );
}

const Waiting = () => {

  return (
    <View style={styles.container}>
    	<MapRegion />
    	<View style={{position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white', justifyContent: 'flex-end'}}>
	    	<RideDetails 
					from='Current Location'
					to='IIIT Delhi'
					via='Ashram Road'
					time={25}
					distance={15}
					fare={255}
				/>
				<BottomButtons cancelFun={onPressFun} shareFun={onPressFun} />
			</View>
			<DriverInfo 
				name='Sameer Kumar'
				rating={4.7}
				model='Suzuki Dzire'
				carNum='DL3CAD XXXX'
				phoneNum='87003xxxxx'
				image={require('../assets/images/driverimg.jpg')}
				mode='waiting'
			/>
			<BackButton mode='default'/>
			<Pin />
			<Eta Eta={4}/>
			{/*<UserButton />*/}
			

    </View>
  );
};

export default Waiting;
