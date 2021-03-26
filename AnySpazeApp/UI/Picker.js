import React, { useState } from "react";
import { View, Platform, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { color } from "react-native-reanimated";
import { Picker } from "@react-native-community/picker"


const PickerBox = (props) => {
    const [showPicker, setShowPicker] = useState(false);

    const [selectedValue, setSelectedValue] = useState();
    const showUIPicker = () => {
        setShowPicker(true)
    }
    const setFieldValue = (itemValue) => {
        props.selectValue(itemValue)
        setSelectedValue(itemValue)
        setShowPicker(false)
    }

    return (
        <View style={[styles.container, props.style]}>

            {Platform.OS === "ios" &&
                <View>
                    <TouchableOpacity onPress={showUIPicker}
                        style={{
                            backgroundColor: "#e7e7e7", borderColor: "#727272", borderBottomWidth: 1,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 20,
                            paddingBottom: 20
                        }}>
                        <Text style={{ color: "#727272" }}>{props.labelText}</Text>
                        <Text style={{ color: "#dc3545", fontWeight: "700", textTransform:"capitalize" }}>{selectedValue ? selectedValue : ""}</Text>

                    </TouchableOpacity>

                </View>
            }


            {showPicker && Platform.OS === "ios" && <Picker

                selectedValue={selectedValue}

                onValueChange={(itemValue, itemIndex) => setFieldValue(itemValue)}
            >
                {props.listData.map((item, key)=>{
                    return <Picker.Item label={item.name} value={item.name.toLowerCase()} />
                })}


            </Picker>
            }
            {Platform.OS !== "ios" &&
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            }

        </View>
    );

}

export default PickerBox;
const styles = StyleSheet.create({
    container: {

    }
});