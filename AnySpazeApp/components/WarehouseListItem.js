import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableHighlight } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

Icon.loadFont()
MaterialCommunityIcons.loadFont()
import {listItem, localityStyle,warehouseListTitle} from "../config"




const WarehouseListitem = (props) => {
   const { warehouseId, warehouseName, locality, city, state, warehouseSpace, racking, avilableFLoor } = props

    const TouchableItem = (Platform.OS === "android" && Platform.Version >= 21) ? TouchableNativeFeedback : TouchableHighlight



    return (
        <TouchableItem
            onPress={() => props.showDetails(warehouseId, warehouseName)}>
            <View style={listItem}>
                <Text style={warehouseListTitle}>{warehouseName}
                </Text>

                <Text style={localityStyle}>

                    {locality && <Text style={styles.textcapitilize}> {locality}, </Text>}

                    {city && <Text style={styles.textcapitilize}>{city}, </Text>}

                    {state && <Text style={styles.textcapitilize}>{state} </Text>}

                </Text>
                <View style={styles.features}>
                    {warehouseSpace &&
                        <Text>
                             <Icon name="space-shuttle"size={17} style={styles.icon} />

                            &nbsp; &nbsp;
                            {warehouseSpace} sq.ft. space
                        </Text>
                    }
                </View>
                <View style={styles.features}>
                    {avilableFLoor &&
                        <Text>
                            <MaterialCommunityIcons name="floor-plan" size={17} style={styles.icon} />
                            &nbsp; &nbsp;
                        Floor Storage
                        </Text>
                    }
                    {racking &&
                        <Text>
                            <MaterialCommunityIcons name="view-stream-outline" size={17} style={styles.icon}/>

                            &nbsp; &nbsp;
                            Racking Storage
                        </Text>
                    }
                </View>
            </View>
        </TouchableItem>
    );
}
const styles = StyleSheet.create({



    features: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12
    },
    icon: {
         color:"#000"
    },
    textcapitilize: {
        textTransform: "capitalize",

    }

})
export default WarehouseListitem;