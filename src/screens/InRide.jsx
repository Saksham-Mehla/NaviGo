import React, {useState} from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
} from 'react-native';

import { BottomBar } from '../components/BottomBar';
import { BackButton } from '../components/BackButton';
import { RideDetails } from '../components/RideDetails';
import { DriverInfo } from '../components/DriverInfo';
import { ShareRidePopup } from '../components/ShareRidePopup';
import { Warning } from '../components/Warning'
import { SafetyCheck } from '../components/SafetyCheck'


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
	},
	mapregion: {
		height: '70.6%',
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
							{/*<Image style={{height: '100%'}} source={require('../assets/images/inRide.png')} />*/}
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
			marginTop: 15,
		}}>
			<Pressable
				onPress={props.help}
				style={{
					left: 0,
					width: '50%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#ea3737',
			}}>
				<View style={{
					width: '100%', height: '60%',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					<Text style={{fontSize: 14, color: 'black', textAlign: 'center',}}> HELP </Text>
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


const ETA = (props) => {
	return(
		<View style={{
			width: '100%',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'white',
			marginTop: 20,
		}}>
			<Text style={{fontSize: 16, color: 'black', textAlign: 'center',}}>You are expected to reach by<Text style={{color: '#5367ff'}}> {props.eta}</Text> </Text>
		</View>
	);
}

const SafetyRating = (props) => {
	return(
		<View style={{elevation: 10, position: 'absolute', right: -10, bottom: 360, alignItems: 'center', justifyContent: 'center', width: 200, height: 50, backgroundColor: '#d9d9d9', borderRadius: 10, margin: 3}}>
			<Text style={{fontSize: 14, color: 'black', textAlign: 'center', fontWeight: 'bold'}}>Area Safety Rating:<Text style={{color: '#0ba032'}}> {props.rating}{'/5'}</Text></Text>
		</View>
	);
}

const PaymentMethod = () => {
	return(
		<View style={{
					backgroundColor: '#d9d9d9',
					borderRadius: 10,
					elevation: 5, 
					position: 'absolute', 
					left: 15, 
					bottom: 100, 
					alignItems: 'center', 
					justifyContent: 'center',
					margin: 5,
				}}
		>
			<Pressable
				onPress={onPressFun}
				style={{ 
					alignItems: 'center', 
					justifyContent: 'center',
				}}
			>
					<Text style={{padding: 5, fontSize: 14, color: 'black', textAlign: 'center',}}>  Payment Method  </Text>
			</Pressable>
		</View>

	);
}

const BottomNav = () => {
	return (
    <View style={{width: '100%', backgroundColor: 'white'}}>
    	<View style={{width: '100%', backgroundColor: 'white', justifyContent: 'flex-end'}}>
    		<ETA eta='7:42pm' />
	    	<RideDetails 
					from='Current Location'
					to='IIIT Delhi'
					via='Ashram Road'
					time={25}
					distance={15}
					fare={255}
					mode='inRide'
				/>
				<SafetyRating rating={4.5} />
				<BottomButtons helpFun={onPressFun} shareFun={onPressFun} />
			</View>
    </View>
  );
}

const InRide = () => {
	[hideShare, setHideShare] = useState(true);
	[hideWarning, setHideWarning] = useState(true);
	[hideSafety, setHideSafety] = useState(true);

  return (
    <View style={styles.container}>
    	<MapRegion />
    	<BottomNav />
			<DriverInfo 
				name='Sameer Kumar'
				rating={4.7}
				model='Suzuki Dzire'
				carNum='DL3CAD XXXX'
				phoneNum='87003xxxxx'
				image={require('../assets/images/driverimg.jpg')}
				mode='inRide'
			/>
			<PaymentMethod />
			<BackButton mode='default'/>	
			<ShareRidePopup hide={hideShare}/>
			<Warning hide={hideWarning}/>
			<SafetyCheck reason='The drop off time has exceeded the expected time.' hide={hideSafety}/>
    </View>
  );
};

export default InRide;
