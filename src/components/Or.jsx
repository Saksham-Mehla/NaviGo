import React from 'react';
import { 
  View,  
  Text, 
  Image,
} from 'react-native';

export const Or = () => {
  return(
    <View 
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 40,
        marginVertical: 20,
        backgroundColor: 'white',
      }}>

      <View
        style={{
          backgroundColor: '#d9d9d9',
          width: 135,
          height: 1,
        }} /> 

      <View
        style={{
          // flex: 1,
          backgroundColor: 'white',
          width: 50,
          heigth:50,
          borderRadius: 50,
          borderColor: '#d9d9d9',
          borderWidth: 1,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 15, color: '#d9d9d9', textAlign: 'center',}}>OR</Text>
      </View>

      <View
        style={{
          backgroundColor: '#d9d9d9',
          width: 135,
          height: 1,
        }} />

    </View>
  );
}

// export default Or;