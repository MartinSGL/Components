import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native'
import useAnimation from '../hooks/useAnimation'

const Animation101Screen = () => {

  const {opacity,position,fadeIn,fadeOut,startMovingPosition} = useAnimation()

  return (
    <View style={styles.container}>
        <Animated.View style={{
          ...styles.purpleBox,
          marginBottom:20,
          opacity:opacity,
          transform:[{translateY:position}]
        }}/>
        <Button title='FadeIn' onPress={()=>{fadeIn();startMovingPosition(-100)}}/>
        <Button title='FadeIn' onPress={fadeOut}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  purpleBox:{
      backgroundColor:'#5856d6',
      width:150,
      height:150
  }
});

export default Animation101Screen