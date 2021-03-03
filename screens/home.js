import React , {useState} from "react";
import {StyleSheet,View,Text, Button, FlatList, TouchableOpacity} from 'react-native';
// import { FlatList } from "react-native-gesture-handler";
import {globalStyles} from "../styles/global";
import Card from "../shared/card";


export default function Home({navigation}){
    // const pressHandler = () => {
    //      navigation.navigate("ReviewDetails");
    //    // navigation.push("ReviewDetails")
    // }
    const [reviews,setReviews] = useState(
        [
            {title: "Zelda, Breath of bka bka ", rating: 5, body: "lorem", key: "1"},
            {title: "Zelda, Breath of bka bka2 ", rating: 4, body: "lorem", key: "2"},

            {title: "Zelda, Breath of bka bka3 ", rating: 3, body: "lorem", key: "3"}

        ]
    );
    return(
        <View style = {globalStyles.container}>
           <FlatList 
                data = {reviews}
                renderItem = { ({item}) => (

                    <TouchableOpacity onPress = {() => navigation.navigate("ReviewDetails",item) }>
                      <Card>
                      <Text style = {globalStyles.titleText}>{item.title}</Text>
                      </Card>
                    </TouchableOpacity>
                )}

           />
           

            {/* <Button title = "go to review details" onPress = {pressHandler} />*/}
        </View>
    )
}
