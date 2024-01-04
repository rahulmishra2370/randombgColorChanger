import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

export default function App() {

  const [randomBackground,setRandomBackground]=useState("#FFFFFF")

  const generateColor = ()=>{
    const hexRange="0123456789"
    let color = "#"

    for (let i=0;i<6;i++){
      color += hexRange[Math.floor(Math.random() * 16)]
    }

    setRandomBackground(color)

  }

  return (

    <View style={[styles.container,{backgroundColor:randomBackground}]}>
   <TouchableOpacity onPress={generateColor}>
   <View style={styles.actionbtn}>
      <Text style={styles.actionbtntxt}>press me</Text>
    </View>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
     container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
     },
     actionbtn:{
      borderRadius:12,
      backgroundColor:"#6A1B4D",
      paddingHorizontal:40,
      paddingVertical:10
     },
     actionbtntxt:{
      fontSize:24,
      color:"#FFFFFF",

     }
})
