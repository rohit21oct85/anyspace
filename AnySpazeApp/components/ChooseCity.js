import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { Text, Colors } from "react-native-paper";
import { config } from "../config";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { updateSearchState } from "../Store/Actions/Index";
import { useDispatch, useSelector } from "react-redux";
import ScreenLoader from "./ScreenLoader"

import axios from "axios";

const chooseCity = ({ navigation }) => {
    const dispatch = useDispatch();
    const [cityList, setCityList] = useState()
    const [loading, setLoading] = useState(false);
    const [inputCities, setInputCities] = useState([])
    const StateData =  useSelector(state => state.commonData.stateData)


    const selectedState = useSelector(state => state.currentSearch)

    const updateAndBack = (city) => {
        dispatch(updateSearchState({ city: city }))
        navigation.goBack()
    }
    if (!selectedState.state) {
        return <Text style={{ padding: 20, textAlign: "center", fontSize: 18, fontWeight: "600", color: Colors.red700 }}>Please select an state first</Text>
    }
    useEffect(()=>{
        let Cities =[]
        StateData.forEach(state => {
            if(state.slug === selectedState.state){

              setInputCities(state.cities)
            }

        });

    },[selectedState])

    if(loading){
        return <ScreenLoader/>
    }

    return (

        <ScrollView style={{ paddingVertical: 40 }}>
            <SafeAreaView  >


                {cityList && !cityList.length &&
                    <Text style={{ padding: 20, textAlign: "center", fontSize: 18, fontWeight: "600", color: Colors.red700 }}>Sorry, We do not have any warehouse for the state you selected. Please try changing the state</Text>
                }

                {inputCities && inputCities.map((item, k) => {
                    return <TouchableOpacity
                        accessibilityLabel={item.city}
                        style={{
                            paddingHorizontal: 10,
                            marginHorizontal: 15,
                            marginBottom: 15,
                            color: Colors.black,
                            display: "flex",
                            flexDirection: "row"
                        }}
                        onPress={() => updateAndBack(item.name)} key={k}>
                        {selectedState.city === item.city ?
                            <MaterialCommunityIcons
                                name="checkbox-marked"
                                color={Colors.red700}
                                size={20}
                            /> :
                            <MaterialCommunityIcons
                                name="checkbox-blank-outline"
                                color={Colors.red700}
                                size={20}
                            />
                        }
                        <Text style={{ fontWeight: "500", marginLeft: 10 }}>{item.name}</Text></TouchableOpacity>
                })}
            </SafeAreaView>
        </ScrollView>
    )
}
export default chooseCity;