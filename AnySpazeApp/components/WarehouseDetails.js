import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar, Modal } from "react-native";
import { List, Colors, Headline, Subheading } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { modalView, ModalCenteredView } from "../config";

Icon.loadFont()
Ionicons.loadFont()
MaterialCommunityIcons.loadFont()

const WarehouseDetail = (props) => {
    const warehouseDetails = props.data.data

    return (

        <View>
            <StatusBar backgroundColor="#151515" barStyle="light-content" />
            <Modal
                animationType="slide"
                transparent={true}
                visible={false}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={ModalCenteredView}>
                    <View style={modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>


                    </View>
                </View>
            </Modal>
            {warehouseDetails &&
                <View>
                    {warehouseDetails.warehouseName &&
                        <Text style={styles.title}>{warehouseDetails.warehouseName}</Text>
                    }
                    <Text style={styles.locality}>

                        {warehouseDetails.locality && <Text style={styles.textcapitilize}> {warehouseDetails.locality}, </Text>}

                        {warehouseDetails.city && <Text style={styles.textcapitilize}>{warehouseDetails.city}, </Text>}

                        {warehouseDetails.state && <Text style={styles.textcapitilize}>{warehouseDetails.state} </Text>}

                    </Text>

                    {warehouseDetails.wareHouseDesc &&
                        <Text style={styles.desc}>{warehouseDetails.wareHouseDesc}</Text>
                    }

                    {warehouseDetails.warehouseSpace &&
                        <View style={styles.info}>
                            <Text>
                                <Icon name="space-shuttle" size={17} style={styles.icon} />&nbsp; &nbsp;



                                            {warehouseDetails.warehouseSpace}+ Square Feet Space
                                    </Text>
                        </View>
                    }
                    {warehouseDetails.shippingStart &&
                        <View style={styles.info}>

                            <Text><Icon name="hourglass-half" size={17} style={styles.icon} />&nbsp; &nbsp;
                                    Ships between {warehouseDetails.shippingStart} - {warehouseDetails.shippingEnd}
                            </Text>
                        </View>
                    }

                    {warehouseDetails.racking &&
                        <View style={styles.info}>
                            <Text>
                                <MaterialCommunityIcons name="view-stream-outline" size={17} style={styles.icon} />
                                &nbsp; &nbsp;
                                Racking Storage
                                </Text>

                            <Text style={styles.subinfo}>
                                <Icon name="check" size={17} style={styles.icon} />&nbsp; &nbsp;
                                                    {warehouseDetails.racking} Racking
                                                </Text>
                            <Text style={styles.subinfo}>
                                <Icon name="check" size={17} style={styles.icon} />&nbsp; &nbsp;
                                                    {warehouseDetails.rackPosAvilable} Rack Positions avilable
                                                </Text>
                            <Text style={styles.subinfo}>
                                <Icon name="check" size={17} style={styles.icon} />&nbsp; &nbsp;
                                                    {warehouseDetails.maxPalletHeight} Max Pallet Height
                                                </Text>
                            <Text style={styles.subinfo}>
                                <Icon name="check" size={17} style={styles.icon} />&nbsp; &nbsp;
                                                    {warehouseDetails.maxRackWeight} Max weight capability
                                                </Text>


                        </View>
                    }
                    {warehouseDetails.avilableFLoor &&
                    <View style={styles.info}>
                        <Text>
                            <MaterialCommunityIcons name="floor-plan" size={17} style={styles.icon} />
                                &nbsp; &nbsp;
                            Floor Storage
                            </Text>
                        {warehouseDetails.avilableFLoor &&
                            <Text style={styles.subinfo}>
                                <Icon name="check" size={17} style={styles.icon} />&nbsp; &nbsp;
                                                    {warehouseDetails.avilableFLoor} Avilable Floor
                                                </Text>}
                        {warehouseDetails.floorPricePerPallet &&
                            <Text style={styles.subinfo}>
                                <Icon name="check" size={17} style={styles.icon} />&nbsp; &nbsp;
                                                    Stackable Pallets
                                                </Text>}
                        {warehouseDetails.sfPricePerPallet &&
                            <Text style={styles.subinfo}>
                                <Icon name="check" size={17} style={styles.icon} />&nbsp; &nbsp;
                                                    Single Floor Loaded Pallets
                                                </Text>
                        }

                    </View>


                    }
                    <View style={styles.card}>

                        <Subheading>Distace from key Points</Subheading>


                        {warehouseDetails.airportDistance ?
                            <Text style={styles.subinfo}> Distance from Airpot  {warehouseDetails.airportDistance}</Text> : null}

                        {warehouseDetails.seaportDistance ? <Text style={styles.subinfo}>Distance from Seaport  {warehouseDetails.seaportDistance}</Text> : null}

                        {warehouseDetails.dryportDistance ? <Text style={styles.subinfo}>Distance from Drypot  {warehouseDetails.dryportDistance}</Text> : null}

                        {!warehouseDetails.airportDistance && !warehouseDetails.seaportDistance && !warehouseDetails.dryportDistance && <Text>No Information Provided</Text>}

                    </View>
                    <View style={styles.card}>
                        <Subheading>Features</Subheading>

                        {warehouseDetails.warehouseType === "nonBonded" &&

                            <Text style={styles.subinfo}>
                                <Icon name="check" size={17} style={styles.icon} />&nbsp; &nbsp;
                                                   Bonded Type warehouse
                                                </Text>
                        }

                        {warehouseDetails.electricityLoad === "comm-standard" &&

                            <Text style={styles.subinfo}>
                                <Icon name="check" size={17} style={styles.icon} />&nbsp; &nbsp;
                                commercial standard electricity load
                                                </Text>

                        }
                        {warehouseDetails.numberOfDocs &&

                            <Text style={styles.subinfo}>
                                <Icon name="check" size={17} style={styles.icon} />&nbsp; &nbsp;
                                {warehouseDetails.numberOfDocs} Doc(s)
                                                </Text>
                        }
                    </View>

                </View>

            }


        </View>

    )

}

const styles = StyleSheet.create({
    headerStyle: {
        position: "absolute",
        height: 80,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: "#ff0000",
        display: "flex",
        zIndex: 12
    },
    tabContainer: {
        flexDirection: "row",
        backgroundColor: "#000",

        overflow: "hidden",
        marginTop: 10
    },
    title: {
        color: "#000",
        fontSize: 22
    },
    locality: {
        color: "#000",
        fontSize: 18,
        marginBottom: 10
    },
    contentarea: {
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 30

    },
    textcapitilize: {
        textTransform: "capitalize",

    },
    desc: {
        color: "#000",
        lineHeight: 26,
        fontSize: 16,
        marginBottom: 10
    },
    info: {
        marginVertical: 5
    },
    subinfo: {
        marginLeft: 30,
        marginTop: 10
    },
    noimage: {
        height: 300,
        backgroundColor: "#000",

    },
    lightbtn: {
        color: "#000"
    },
    requestImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    scrollHeight: {
        maxHeight: Dimensions.get("window").height - 50,

    },
    card: {
        padding: 20,
        backgroundColor: "#f1f1f1",
        marginVertical: 10
    }


})
export default WarehouseDetail