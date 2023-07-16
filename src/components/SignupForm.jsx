import React from 'react';
import { 
  View, 
  Text, 
  Alert, 
  Button, 
  TextField,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import { Or } from '../components/Or';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 23,
  },
  content: {
    display: 'flex',
    marginTop: 40,
    marginHorizontal: 40,
    marginBottom: 10
  },
  text: {
    color: 'black',
    textAlign: 'left',
  },
  gmailbutton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    borderRadius: 5,
  },
  signupbutton: {
    backgroundColor: '#5367ff',
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  input: {
    width: 300,
    height: 40,
    marginVertical: 5,
    color: 'black',
    backgroundColor: 'white',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    padding: 12,
    fontSize: 13,
    borderRadius: 5,
  },
});

const onPressFun = () => {
  return('');
}

const GmailButton = ({nav}) => {
  return(
    <Pressable onPress={() => nav.navigate('PhoneNum')} style={styles.gmailbutton}>
      <Image style={{height: 25, width: 25, marginRight: 8}} source={require('../assets/images/icons/gmail.png')} />
      <Text style={{fontSize: 15, color:'black', fontWeight: 'bold'}}>Gmail</Text>
    </Pressable>
  );
}

const SignupButton = ({nav}) => {
  return(
    <Pressable onPress={() => nav.navigate('PhoneNum')} style={styles.signupbutton}>
      <Text style={{fontSize: 15, color:'white',}}> SIGN UP </Text>
    </Pressable>
  );
}

const SignupForm = (props) => {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [cpassword, onChangeCPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style = {styles.content}>
        <Text style={{...styles.text, fontWeight: 'bold', fontSize: 18, paddingBottom: 20,}}>Sign up</Text>
        {/*<Text style={{...styles.text, fontSize: 13, textAlign: 'left', paddingBottom: 10, color: '#d9d9d9'}}>Login via</Text>*/}

        <GmailButton nav={props.nav}/>

        <Or />

        <TextInput 
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="Email Address"
          value={email}
          inputMode="email"
        />

        <TextInput 
          style={styles.input}
          onChangeText={onChangePassword}
          placeholder="Password"
          value={password}
          inputMode="text"
          secureTextEntry={true}
        />

        <TextInput 
          style={styles.input}
          onChangeText={onChangeCPassword}
          placeholder="Confirm Password"
          value={cpassword}
          inputMode="text"
          secureTextEntry={true}
        />

        <SignupButton nav={props.nav}/>

        <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10, flexDirection: 'row'}}>
          <View><Text style={{...styles.text, fontSize: 13, textAlign: 'center', }}>Already have an account? </Text></View>
          <Pressable style={{alignItems: 'center', justifyContent: 'center',}} onPress={() => props.nav.navigate('UserLogin')}><Text style={{color: '#5367FF'}}>Log In</Text></Pressable>
        </View>
      </View>
    </View>
  );
}

export default SignupForm;