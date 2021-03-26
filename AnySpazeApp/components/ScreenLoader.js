import React from "react";
import {View} from "react-native";
import {ActivityIndicator, Colors, Text} from "react-native-paper";

const ScreenLoader=() =>{

    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <ActivityIndicator animating={true} color={Colors.black}/>
        </View>
    )

}

export default ScreenLoader;