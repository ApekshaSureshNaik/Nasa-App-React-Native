import {Text,View,StyleSheet} from 'react-native';
import React, { useEffect } from 'react';


export default function About1({route}:any) {

    const {random} = route.params

  return(
   
    <View style={style.container}>
     <>
     <View style={{ marginTop: 60 }}>
        <Text>
        <Text style={style.text}> Name:</Text>
         <Text style={{ fontSize: 20,fontWeight: 'bold'}}> {random.name} </Text>
         </Text>
     </View>
     <View style={{marginTop:15}}>
     <Text>
        <Text style={style.text}> NASA JPL URL:</Text>
        <Text style={{ fontSize: 20,fontWeight: 'bold',textAlign:'auto'}}> {random.nasa_jpl_url} </Text>
        </Text>
      </View>
      <View style={{marginTop:15}}>
      <Text>
        <Text style={style.text}> Is Potentially Hazardous Asteriod:</Text>
        <Text style={{ fontSize: 20,fontWeight: 'bold'}}> {random.is_potentially_hazardous_asteroid? "true":"false"} </Text>
        </Text>
        </View>
        </>
      
    </View>  
  );
}

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  text:{
   
    fontSize:20,
    color:'#2424e3',
    fontWeight:'bold'
  }
})


