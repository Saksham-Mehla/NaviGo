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
  loginbutton: {
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
    <Pressable onPress = {() => nav.navigate('PhoneNum')} style={styles.gmailbutton}>
      <Image style={{height: 25, width: 25, marginRight: 8}} source={require('../assets/images/icons/gmail.png')} />
      <Text style={{fontSize: 15, color:'black', fontWeight: 'bold'}}>Gmail</Text>
    </Pressable>
  );
}

const LoginButton = ({nav}) => {
  return(
    <Pressable onPress={() => nav.navigate('PhoneNum')} style={styles.loginbutton}>
      <Text style={{fontSize: 15, color:'white',}}> LOGIN </Text>
    </Pressable>
  );
}

const LoginForm = (props) => {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style = {styles.content}>
        <Text style={{...styles.text, fontWeight: 'bold', fontSize: 18, paddingBottom: 20,}}>Login to your Account</Text>

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

        <LoginButton nav={props.nav}/>
        <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10, flexDirection: 'row'}}>
          <View><Text style={{...styles.text, fontSize: 13, textAlign: 'center', }}>Don't have an account? </Text></View>
          <Pressable style={{alignItems: 'center', justifyContent: 'center',}} onPress={() => props.nav.navigate('UserReg')}><Text style={{color: '#5367FF'}}>Sign In</Text></Pressable>
        </View>
      </View>
    </View>
  );
}

export default LoginForm;