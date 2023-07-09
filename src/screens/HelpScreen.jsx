import React, {useState} from 'react';
import {
	View, 
	Text,
	StyleSheet, 
	Image,
	Pressable,
	ScrollView,
} from 'react-native';

import { BackButton } from '../components/BackButton';
import { ContactPopup } from '../components/ContactPopup';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
	},
	contactButton: {
		width: '95%',
		height: 75,
		backgroundColor: '#d9d9d9',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderRadius: 15,
		margin: 2,
		marginLeft: 9, 
	},

});

const onPressFun = () => {
	return('');
}


const BottomBar = (props) => {
	return(
		<View style={{
			position: 'absolute',
			bottom: 0,
			width: '100%',
			height: 64,
			backgroundColor: 'black',
			flexDirection: 'row',
		}}>
			<View
				style={{
					width: '100%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
			}}>
					<Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center',}}>HELP SECTION</Text>
			</View>
		</View>
	);
}

const Contact = (props) => {
	var image=require('../assets/images/icons/dp.png');
	return(
		<Pressable
			onPress={onPressFun}
			style={styles.contactButton}
			>
			<Image style={{width: 50, height: 50, borderRadius: 50, marginLeft: 20,}} source={image} />
			<View style={{width: 180, height: '100%', alignItems: 'flex-start', justifyContent: 'center'}}>
				<Text style={{fontSize: 18, color: '#000000', marginLeft: 10,}}> Saksham Mehla </Text>
			</View>
			<View style={{height: '100%', alignItems: 'flex-start', justifyContent: 'center'}}>
				<Text style={{fontSize: 13, color: '#888888', marginLeft: 5,}}>96547 xxxxx</Text>
				<Text style={{fontSize: 13, color: '#888888', marginLeft: 5,}}>xxx@gmail.com</Text>
			</View>
		</Pressable>
	);
}

const EmergencyContacts = (props) => {
	var contact = props.EmergencyContacts;

	return(
		<View style={{
			width: '100%',
			justifyContent: 'flex-start',
			height: 304,
			backgroundColor: '#ffffff',
		}}>
			<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: 5, }}>
				<View style={{width: 120, height: 0, borderWidth: 0.2, margin: 5, borderColor: '#888888', backgroundColor: '#888888'}} />
				<Text style={{fontSize: 12, color: '#888888'}}>EMERGENCY CONTACTS</Text>
				<View style={{width: 120, height: 0, borderWidth: 0.2, margin: 5, borderColor: '#888888', backgroundColor: '#888888'}} />
			</View>
			<ScrollView contantContainerStyle={{
				width: '100%',
				alignItems: 'center',
				alignContent: 'center',
			}}>
				<Contact />
				
			</ScrollView>
		</View>
		
	);
}

const HelpScreen = () => {
	[hideContact, setHideContact] = useState(true);
	
  return (
    <View style={styles.container}>
    	<BackButton mode='popup'/>
    	<View style={{
    		width: '100%',
    		alignItems: 'center',
    		justifyContent: 'flex-end',
    	}}>
    		<Pressable
	    		onPress = {onPressFun}
	    		style={{
	    			height: 180,
	    			width: 180,
	    			borderRadius: 180,
	    			backgroundColor: '#ea3737',
	    			elevation: 10,
	    			marginTop: 120,
	    			marginBottom: 20,
	    			alignItems: 'center',
	    			justifyContent: 'center',
	    		}}>
	    		<Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>SOS</Text>
	    	</Pressable>
	    	<Text style={{fontSize: 12, color: '#888888', padding: 30, paddingBottom: 5, textAlign: 'center'}}>On clicking the SOS button, a panic signal along with your ride details and location will be sent to our User Safety Team and the nearest police authority. They will get back to you as soon as possible.</Text>
    	</View>
    	<Text style={{fontSize: 12, color: '#888888', padding: 10, paddingBottom: 15, textAlign: 'center'}}>You can also contact your emergency contacts instantly below.</Text>
    	<EmergencyContacts />
			<BottomBar />
			<ContactPopup hide={hideContact}/>
    </View>
  );
};

export default HelpScreen;
