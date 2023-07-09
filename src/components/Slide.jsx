import React from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  slide: {
    paddingHorizontal: 20,
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 0,
    backgroundColor: '#5367ff',
  },
  textBox: {
    // marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    padding: 5,
    fontSize: 14,
    fontFamily: 'Inder-Regular',
    color: 'white',
    textAlign: 'center',
    opacity: 0.6,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Inder-Regular',
    color: 'white',
    textAlign: 'center',
  },
});

export const Slide = (props) => {

  const { title, desc, image } = props;

  if(image===undefined){
    return (
      <View style={styles.slide}>
        <View style={styles.textBox}>
          <Text style={styles.heading}>{title}</Text>
          <Text style={styles.text}>{desc}</Text>
        </View>
      </View>
    );
  }
  else if(title==='Be in control of your ride.'){
    return (
      <View style={styles.slide}>
        <View style={{...styles.textBox, marginBottom: 80,}}>
          <Text style={styles.heading}>{title}</Text>
          <Text style={styles.text}>{desc}</Text>
        </View>
        <Image style = {{...styles.image, borderRadius:250, height: 250, width: 250,}} source={image} />
      </View>
    );
  }
  return (
    <View style={styles.slide}>
      <View style={{...styles.textBox, marginBottom: 80,}}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.text}>{desc}</Text>
      </View>
      <Image style = {styles.image} source={image} />
    </View>
  );
}

export default Slide;