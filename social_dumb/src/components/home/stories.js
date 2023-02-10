// import React from 'react';
import { border } from 'native-base/lib/typescript/theme/styled-system';
import {StyleSheet, Text, Image, TouchableOpacity, View, ScrollView} from 'react-native';
import data from './../../data/storiesData';
function Stories() {

  return <View style={styles.mainStories}>
           <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
            {data.map((data,index)=>{
                return (<TouchableOpacity key={index} onPress={_=console.log("Hello")} style={styles.storiesUser} >
                    <Image
                    style={styles.storyImage}
                     source={{uri:data.image}}></Image>
                    <Text key={index} style={{color:'white'}}>{data.name}</Text>
                </TouchableOpacity>)
            })}
</ScrollView>
  </View>;
}

const styles = StyleSheet.create({
    mainStories:{
        paddingVertical:10
    },
    storiesUser:{
      marginLeft:10,
      alignItems:'center'
    },
    storyImage:{
        width:70,
        height:70,
        borderRadius:50,
        borderWidth:2,
        borderColor:"white",

    
    }
  });
export default Stories;

