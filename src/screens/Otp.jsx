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
		textAlign: 'center',
		color: 'black',
		fontSize: 25,
		fontWeight: 'bold',
		paddingBottom: 20,
	},
	text: {
		color: '#a0a0a0',
		textAlign: 'center',
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
		width: 40,
    height: 50,
    color: 'black',
    backgroundColor: 'white',
    borderColor: '#5367ff',
    borderWidth: 1,
    // paddingLeft: 15,
    fontSize: 13,
    borderRadius: 5,
    fontSize: 20,
    marginRight: 15,
	}
});

const OTPButton = () => {
  return(
    <View style={styles.otpbutton}>
      <Text style={{fontSize: 15, color:'white',}}> Verify OTP </Text>
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


const Otp = () => {

	const [D1, onChangeD1] = React.useState('');
	const [D2, onChangeD2] = React.useState('');
	const [D3, onChangeD3] = React.useState('');
	const [D4, onChangeD4] = React.useState('');


  return (
    <View style={styles.container}>
			<BackButton />			     
    	<Text style={styles.title}>Verify your OTP</Text>
      <Text style={styles.text}>OTP sent to 9654xxxxxx</Text>
      <View 
      	style={{
      		flexDirection: 'row', 
      		backgroundColor: '#ffffff',
			    height: 52,
			    width: 300,
			    alignItems: 'center',
			    justifyContent: 'center',
			    marginVertical: 10,
			    marginLeft: 5,
      	}}>

      	<TextInput 
          style={styles.input}
          onChangeText={onChangeD1}
          placeholder="x"
          value={D1}
          inputMode="decimal"
          maxLength={1}
          textAlign='center'
        />
        <TextInput 
          style={styles.input}
          onChangeText={onChangeD2}
          placeholder="x"
          value={D2}
          inputMode="decimal"
          maxLength={1}
          textAlign='center'
        />
        <TextInput 
          style={styles.input}
          onChangeText={onChangeD3}
          placeholder="x"
          value={D3}
          inputMode="decimal"
          maxLength={1}
          textAlign='center'
        />
        <TextInput 
          style={styles.input}
          onChangeText={onChangeD4}
          placeholder="x"
          value={D4}
          inputMode="decimal"
          maxLength={1}
          textAlign='center'
        />

      </View>
      
      <Text style={styles.text}>Didn't receive OTP? <Text style={{color: '#5367ff',}}>Resend OTP</Text></Text>

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

export default Otp;
