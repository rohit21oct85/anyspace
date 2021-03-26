import React,{useEffect, useState} from "react";
import { ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import {  Text,  Colors } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { updateSearchState } from "../Store/Actions/Index";
import { useDispatch, useSelector } from "react-redux";

const StateList = ({ navigation }) => {
    const dispatch = useDispatch()
    const selectedState = useSelector(state=>state.currentSearch.state)
    const StateData =  useSelector(state => state.commonData.stateData)
    const [haveCities, setHaveCities] =useState([])
    const updateAndBack = (state) => {

        dispatch(updateSearchState({ state: state, city:null }))
        navigation.goBack()
    }

    useEffect(() => {
        let renderStateData = []
        StateData && StateData.map(state => {
            if (state.cities.length) {
                renderStateData.push(state)
                console.log(renderStateData)
               setHaveCities(renderStateData)
            }
        })

    }, [StateData])
    return (

        <ScrollView style={{ paddingVertical: 40 }}>
            <SafeAreaView  >
                {haveCities.map((state, k) => {
                    return <TouchableOpacity
                        accessibilityLabel={state.name}
                        style={{
                            paddingHorizontal: 10,
                            marginHorizontal: 15,
                            marginBottom: 15,
                            color: Colors.black,
                            display: "flex",
                            flexDirection: "row"
                        }}
                        onPress={() => updateAndBack(state.slug)}

                        key={k}>
                        {selectedState === state.name?
                        <MaterialCommunityIcons
                        name="checkbox-marked"
                        color={Colors.red700}
                        size={20}
                    />:
                        <MaterialCommunityIcons
                            name="checkbox-blank-outline"
                            color={Colors.red700}
                            size={20}
                        />
                }
                        <Text style={{ fontWeight: "500", marginLeft: 10 }}>{state.name.toUpperCase()}</Text></TouchableOpacity>
                })}
            </SafeAreaView>
        </ScrollView>
    )
}
export default StateList;