import React from "react";
import {StyleSheet,View,Text,Button,Image} from 'react-native'
import {globalStyles, images} from "../styles/global"
import Card from "../shared/card";



export default function ReviewDetails({navigation}){
//     const pressHandler = () => {
//             navigation.goBack();
      
//    }
const rating = navigation.getParam("rating");
    return(
        <View style = {globalStyles.container}>
            {/* <Text style = {globalStyles.container}> ReviewDetails Screen </Text>
            <Button title = "quit this scene" onPress = {pressHandler} /> */}
            <Card>
            <Text> {navigation.getParam("title")} </Text>
            <Text> {navigation.getParam("body")} </Text>
            <View style = {styles.rating}>
                    <Text> Game Zone rating: </Text>
                    <Image style = {{height: "100%", width: 21*rating}} source = {images.ratings[rating]} />
            </View>
         

            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
   rating:{
     flexDirection: "row",
     justifyContent: "center",
     paddingTop: 16,
     marginTop: 10,
     borderTopWidth: 1,
     borderTopColor: "#eee",
   },
 
});
