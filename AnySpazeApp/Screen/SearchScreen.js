import React, { useState } from "react";
import { View, StyleSheet, Platform, TouchableOpacity, ScrollView } from "react-native";
import { Colors, Searchbar, Text, Headline, Menu, Button, TextInput, TouchableRipple } from 'react-native-paper';
import PickerBox from "../UI/Picker"
import { config } from "../config"
import { useSelector } from "react-redux";
const SearchScreen = ({ navigation }) => {
    const [formError, setFormError] = useState({
        state: null,
        city: null
    });

    const searchData = useSelector(state => state.currentSearch)




    const SearchWareHouse = () => {
        let error = false;
        if (!searchData.state || !searchData.city) {
            setFormError({
                ...formError,
                state: searchData.state ? false : true,
                city: searchData.city ? false : true
            });
            error = true
        }

        if (error) { return }
        navigation.navigate("Results", { data: searchData, title: "Loading.." });
    }
    return (
        <View style={{ padding: 20 }}>
            <ScrollView>
                <Headline>Search warehouses in India</Headline>
                <View style={styles.formFiled}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ChooseState")}

                        style={styles.field}
                    >
                        <Text style={styles.label}>State </Text>
                        <Text style={styles.value}>{searchData.state ? searchData.state.replace(/-/g, " ") : "Please select"}</Text>
                    </TouchableOpacity>
                    {formError.state && !searchData.state && <Text style={styles.errTxt}>Please select State</Text>}
                </View>
                <View style={styles.formFiled}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ChooseCity")}
                        style={styles.field}
                    >
                        <Text style={styles.label}>City </Text>
                        <Text style={styles.value}>{searchData.city ? searchData.city : "Please select"}</Text>
                    </TouchableOpacity>
                    {formError.city && !searchData.city && <Text style={styles.errTxt}>Please select city</Text>}

                </View>

                <Button mode="contained"
                    onPress={SearchWareHouse} color="#dc3545">Search</Button>

            </ScrollView>

        </View>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    formFiled: {
        marginBottom: 20,
    },
    field: {

        padding: 10,
        backgroundColor: Colors.grey300
    },
    label: {
        color: Colors.red700,
        fontWeight: "600",
        marginBottom: 5
    },
    value: {
        color: Colors.black,
        fontSize: 16,
        textTransform:"capitalize"
    },
    errTxt: {
        color: '#FF0000',
        fontSize: 14,
    }
});