import React from 'react';
import {
	View, 
	Text,
	TextInput,
	Button, 
	StyleSheet, 
	TouchableHighlight,
	Image,
	Alert,
} from 'react-native';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'left',
		justifyContent: 'flex-start',
		padding: 50,
	},
	title: {
		textAlign: 'left',
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',
		paddingBottom: 20,
	},
	text: {
		color: '#a0a0a0',
		textAlign: 'left',
	},
	otpbutton: {
		backgroundColor: '#5367ff',
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
	},	
	input: {
		width: 300,
    height: 50,
    marginVertical: 5,
    color: 'black',
    backgroundColor: 'white',
    borderColor: '#5367ff',
    borderWidth: 1,
    padding: 12,
    fontSize: 13,
    borderRadius: 5,
    fontSize: 20,
	}
});

const OTPButton = () => {
  return(
    <View style={styles.otpbutton}>
      <Text style={{fontSize: 15, color:'white',}}> Send OTP </Text>
    </View>
  );
}

const BackButton = () => {
	return(
		<View 
		style={{
			height: 30,
			width: 30,
			marginTop: -20,
			marginBottom: 50,
			marginLeft: -20, 
			borderRadius: 30,
		}}>
			<Image style={{width:30, height: 30,}} source={require('../assets/images/icons/back1.png')} />
		</View>
	);
}


const PhoneNum = () => {

	const [phone, onChangePhone] = React.useState('');

  return (
    <View style={styles.container}>
			<BackButton />			     
    	<Text style={styles.title}>Let's verify your Phone Number</Text>
      <Text style={styles.text}>Enter your phone number</Text>
      <TextInput 
          style={styles.input}
          onChangeText={onChangePhone}
          placeholder=""
          value={phone}
          inputMode="tel"
          maxLength={10}
          
        />
      <Text style={styles.text}>We'll send an OTP to this phone number</Text>

      <TouchableHighlight 
          onPress = {() => Alert.alert('Login')}
          activeOpacity={1}
          underlayColor='#ffffff'
          style={{position: 'absolute', bottom: 70, left: 45,}}
          >
          
          <OTPButton />
       </TouchableHighlight>

    </View>
  );
};

export default PhoneNum;
