import {View,Text,StyleSheet} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import React, { useEffect } from 'react';
import axios from 'axios';


export default function Home({navigation}:any) {
    const [id, setId] = React.useState<any[]>([]);
    const [randomId, setRandomId] = React.useState(0);
    let filteredIds: any[]=[];
    let newId : any[] = []

  const submit = () =>{
    navigation.navigate('About',{
      id:id
    })
  }

    const handleClick= () =>   {
        axios
            .get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
            .then((response:any) => {
                setId(response.data.near_earth_objects);
               newId  = id.filter((item)=>{
                  filteredIds.push(item.id);    
              });
             
                 const random = filteredIds[Math.floor(Math.random() * filteredIds.length)];
                  setRandomId(random)
                   navigation.navigate('About',{
                    id:randomId
                     })         
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
         <Text style={{fontSize:20}}>
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
           <Text style={{fontSize:20}}>
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
