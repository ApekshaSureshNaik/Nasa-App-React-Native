import {View,Text,StyleSheet} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import React, { useEffect } from 'react';
import axios from 'axios';

var filteredIds: any[]=[];
var newId : any[] = []
var random

export default function Home({navigation}:any) {
    const [id, setId]= React.useState('')
    const [ids, setIds] = React.useState<any[]>([]);
    
  
useEffect(()=>{
  axios
  .get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=fO1psOx6k80TiAHeNGHwsxQQ9AaJAUBC73p5ys7Y')
 .then((response:any) => {
   setIds(response.data.near_earth_objects);
   })
   
 },[])

  const handleClick= () => {
     ids.filter((item)=>{
    filteredIds.push(item.ids);    
    random = filteredIds[Math.floor(Math.random() * filteredIds.length)];
    navigation.navigate('About1',{
      random
       })  
    });      
}
   
    const submit = () =>{
      navigation.navigate('About',{
        id
      })
    }
return (
 
    <View style={styles.container}>
      <TextInput 
        mode ="outlined"
        label="Enter Asteriod Id "
        theme={{colors:{primary:'gray'}}}
        style={styles.input}
        onChangeText={(text:any)=>setId(text)}
        />
       <View >
         <Button 
          buttonColor='#4503fc'
          mode='contained'
          uppercase={false}
          color='#5746f2'
          style={styles.btn}
          onPress ={handleClick}
          >
         <Text style={{fontSize:18}}>
          Random Asteriod
         </Text>
         </Button> 
         <Button 
          disabled={id.length==0}
          buttonColor='#4503fc'
          mode='contained'
          uppercase={false}
          color='#5746f2'
          style={styles.btn}
          onPress={submit}> 
           <Text style={{fontSize:18}}>
          Submit
          </Text>
          </Button>    
          </View>
   </View>
    
)
}
const styles = StyleSheet.create({
container:{
     justifyContent: 'center',
     backgroundColor: '#ecf0f1',
     alignItems:'center',
     flex:1
    },
   input:{
     height:50,
     width:260,
     fontSize:20,
     color:'gray',
     marginTop:70
   },
   btn:{
    width:190,
    height:35,
    marginTop:20, 
    borderRadius:11
   },
  
});
