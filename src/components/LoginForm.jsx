import React from 'react';
import { 
  View, 
  Text, 
  Alert, 
  Button, 
  TextField,
  StyleSheet,
  TouchableHighlight,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { Slide } from './Slide';
import { Or } from '../components/Or';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '60%',
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

const GmailButton = () => {
  return(
    <View style={styles.gmailbutton}>
      <Image style={{height: 25, width: 25, marginRight: 8}} source={require('../assets/images/icons/gmail.png')} />
      <Text style={{fontSize: 15, color:'black', fontWeight: 'bold'}}>Gmail</Text>
    </View>
  );
}

const LoginButton = () => {
  return(
    <View style={styles.loginbutton}>
      <Text style={{fontSize: 15, color:'white',}}> LOGIN </Text>
    </View>
  );
}

const LoginForm = () => {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style = {styles.content}>
        <Text style={{...styles.text, fontWeight: 'bold', fontSize: 18, paddingBottom: 20,}}>Login to your Account</Text>
        {/*<Text style={{...styles.text, fontSize: 13, textAlign: 'left', paddingBottom: 10, color: '#d9d9d9'}}>Login via</Text>*/}

        <TouchableHighlight 
          onPress = {() => Alert.alert('Gmail')}
          activeOpacity={1}
          underlayColor='#ffffff'>

          <GmailButton />
        </TouchableHighlight>

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

        <TouchableHighlight 
          onPress = {() => Alert.alert('Login')}
          activeOpacity={1}
          underlayColor='#ffffff'>

          <LoginButton />
        </TouchableHighlight>

        <Text style={{...styles.text, fontSize: 13, textAlign: 'center', paddingBottom: 10,}}>Don't have an account? <Text style={{color: '#5367FF'}}>Sign In</Text></Text>
      </View>
    </View>
  );
}

export default LoginForm;