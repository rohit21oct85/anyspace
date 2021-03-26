import React, { useEffect } from "react";
import { View, StyleSheet, Linking, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Text, Button, Colors } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as actionCreator from "../Store/Actions/Index"


const HomeScreen = ({ navigation }) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(actionCreator.getSateData())
    },[])



    return <View style={{ paddingTop: 20 }}>
        <StatusBar backgroundColor="#151515" barStyle="light-content" />
        <TouchableOpacity
            onPress={() => navigation.navigate('SearchScreen')}>
            <View style={styles.postbox}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={{ flex: 4 }}>
                        <Text style={
                            [styles.helptext]
                        }>Search Warehouses around you</Text>
                        <Text style={
                            styles.helptsubext
                        }>Get best deals & offers fron AnySpaze.com</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Icon
                            name="magnify"
                            color={"#000"}
                            size={80}
                        />
                    </View>
                </View>


            </View>
        </TouchableOpacity>
        <View style={styles.postbox}>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ flex: 4 }}>
                    <Text style={
                        styles.helptext
                    }>Need help</Text>
                    <Text style={
                        styles.helptsubext}>We are just a click away</Text>
                    <Text style={
                        [styles.helptsubext, { fontSize: 14 }]
                    }>Monday to Saturday 9am to 6pm IST</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Icon
                        name="headphones"
                        color={"#000"}
                        size={50}
                    />
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Button mode="contained" color="#dc3545"
                    style={{ marginTop: 15, marginRight: 10, flex: 1 }}
                    onPress={() => { Linking.openURL('tel:+919569774455') }}>Call Us</Button>
                <Button mode="contained" color="#dc3545"
                    style={{ marginTop: 15, marginLeft: 10, flex: 1, backgroundColor: Colors.blueA700 }}
                    onPress={() => navigation.navigate('Contact')}>Email us</Button>
            </View>



        </View>
    </View>
}

export default HomeScreen;

const styles = StyleSheet.create({
    postbox: {
        backgroundColor: "#fff",
        padding: 30,
        borderWidth: 1,
        flexGrow: 1,
        alignContent: "center",
        justifyContent: "space-evenly",
        display: "flex",
        borderColor: "#eee",
        marginBottom: 10,
        marginHorizontal: 10


    },
    helptext: {
        fontSize: 22,
        fontWeight: "700",
        color: Colors.black
    },
    helptsubext: {
        fontSize: 18,
        color: "#494949"
    }

})