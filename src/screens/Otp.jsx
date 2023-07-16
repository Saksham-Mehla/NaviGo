import React from 'react';
import {
	View, 
	Text,
	TextInput,
	Button, 
	StyleSheet, 
	Image,
	Alert,
	Pressable,
} from 'react-native';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: '100%',
		height: '100%',
	},
	title: {
		textAlign: 'center',
		color: 'black',
		fontSize: 25,
		fontWeight: 'bold',
		paddingBottom: 20,
		marginTop: 100,
	},
	text: {
		color: '#a0a0a0',
		textAlign: 'center',
		marginVertical: 5, 
		fontSize: 14,
	},
	otpbutton: {
		backgroundColor: '#5367ff',
    height: 50,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: 60,
	},	
	input: {
		width: 40,
    height: 50,
    color: 'black',
    backgroundColor: 'white',
    borderColor: '#5367ff',
    borderWidth: 1,
    fontSize: 13,
    borderRadius: 5,
    fontSize: 20,
    marginHorizontal: 10,
	}
});

const OTPButton = ({nav}) => {
  return(
    <Pressable onPress={() => nav.navigate('MainScreen')} style={styles.otpbutton}>
      <Text style={{fontSize: 15, color:'white',}}> Verify OTP </Text>
    </Pressable>
  );
}

const BackButton = ({nav}) => {
	return(
		<Pressable 
		onPress={() => nav.navigate('PhoneNum')}
		style={{
			height: 30,
			width: 30,
			top: 30,
			left: 30, 
			borderRadius: 30,
			position: 'absolute',
		}}>
			<Image style={{width:30, height: 30,}} source={require('../assets/images/icons/back1.png')} />
		</Pressable>
	);
}

const onPressFun = () => {
	return('');
}

const Otp = ({navigation}) => {

	const [D1, onChangeD1] = React.useState('');
	const [D2, onChangeD2] = React.useState('');
	const [D3, onChangeD3] = React.useState('');
	const [D4, onChangeD4] = React.useState('');


  return (
    <View style={styles.container}>
			<BackButton nav={navigation}/>			     
    	<Text style={styles.title}>Verify your OTP</Text>
      <Text style={styles.text}>OTP sent to 9654xxxxxx</Text>
      <View 
      	style={{
      		flexDirection: 'row', 
      		backgroundColor: '#ffffff',
			    height: 52,
			    width: '100%',
			    alignItems: 'center',
			    justifyContent: 'center',
			    marginVertical: 10,
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
      
      <View style={{flexDirection: 'row'}}>
      	<Text style={styles.text}>Didn't receive OTP? </Text>
      	<Pressable onPress={onPressFun} style={{justifyContent: 'center', alignItems: 'center'}}><Text style={{color: '#5367ff',}}>Resend OTP</Text></Pressable>
      </View>

      <OTPButton nav={navigation}/>

    </View>
  );
};

export default Otp;
