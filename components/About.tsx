import {Text,View,StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import axios from 'axios';

interface data{
  name:string,
  nasa_jpl_url:string,
  is_potentially_hazardous_asteroid:boolean
}
export default function About({route}:any) {

  const [about,setAbout]=React.useState<data>()

   useEffect(()=>{
       api();
    },[])

    const api= () =>{  
      axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${route.params.id}?api_key=fO1psOx6k80TiAHeNGHwsxQQ9AaJAUBC73p5ys7Y`)
     .then((res:any)=>{
        setAbout(res.data);     
    })
  .catch((error:any)=> {
 console.error("Error:",error)
  })
}
  return(
   
    <View style={style.container}>
      {about ? (
     <>
     <View style={{ marginTop: 60 }}>
        <Text>
        <Text style={style.text}> Name:</Text>
         <Text style={{ fontSize: 20,fontWeight: 'bold'}}> {about.name} </Text>
         </Text>
     </View>
     <View style={{marginTop:15}}>
     <Text>
        <Text style={style.text}> NASA JPL URL:</Text>
        <Text style={{ fontSize: 20,fontWeight: 'bold',textAlign:'auto'}}> {about.nasa_jpl_url} </Text>
        </Text>
      </View>
      <View style={{marginTop:15}}>
      <Text>
        <Text style={style.text}> Is Potentially Hazardous Asteriod:</Text>
        <Text style={{ fontSize: 20,fontWeight: 'bold'}}> {about.is_potentially_hazardous_asteroid? "true":"false"} </Text>
        </Text>
        </View>
        </>
       ) : (null) }
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


