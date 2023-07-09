import React from 'react';
import {
	View, 
	Text,
	TextInput,
	Button, 
	StyleSheet, 
	Image,
} from 'react-native';

import LoginForm from '../components/LoginForm';
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
		paddingBottom: 20,
	}
	
});


const UserReg = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to NaviGo</Text>
      <SignupForm />
    </View>
  );
};

export default UserReg;
