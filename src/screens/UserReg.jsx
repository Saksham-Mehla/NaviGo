import React, {useState} from 'react';
import {
	View, 
	Text,
	TextInput,
	Button, 
	StyleSheet, 
	Image,
} from 'react-native';

import SignupForm from '../components/SignupForm';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5367ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		textAlign: 'center',
		color: 'white',
		fontSize: 26,
		fontWeight: 'bold',
	}
	
});


const UserReg = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 20,}}>
    		  <Text style={styles.title}>Welcome to Navi</Text>
    		  <Image style={{height:40, width:40,}} source={require('../assets/images/logo.png')}/>
    		  <Text style={styles.title}>o</Text>
    	</View>
      <SignupForm nav={navigation}/>
    </View>
  );
};

export default UserReg;
