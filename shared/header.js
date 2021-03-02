import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

export default function Header({navigation, title}){

    const openMenu = () => {
        navigation.openDrawer()
        
    }
    return(
        <View style = {styles.header}>
        <MaterialIcons name= "menu"  size = {28} onPress = {openMenu} style = {styles.icon}/>
        <View>
            <Text style = {styles.headerText}>{title}</Text>
        </View>
        </View>
    );
}
const styles = StyleSheet.create(
    {
        header:{
            height: 40,
            width: Dimensions.get("window").width,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "yellow",
            
        },
        headerText:{
            fontWeight: "bold",
            fontSize: 20,
            color: "#333",
            letterSpacing: 1,
           

        },
        icon :{
            position: "absolute",
            left: 16,
        }
    }
)