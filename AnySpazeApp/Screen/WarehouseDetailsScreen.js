
import React, { Component } from 'react';
import {
    Animated,
    Platform,
    StyleSheet,
    Modal,
    View,
    TouchableOpacity
} from 'react-native';
import { Text } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

Ionicons.loadFont()
MaterialCommunityIcons.loadFont()
import {DarkBtnText, ButtonDark, BottomTabStyle, BottomTabBtnStyle, BottomTabBtnText, ModalCenteredView, modalView , LightBtnText} from "../config"
import * as actionCreator from "../Store/Actions/Index";
import { connect } from 'react-redux';
import WarehouseDetail from "../components/WarehouseDetails"
import ScreenLoader from "../components/ScreenLoader";
import ContactWarehouse from "../components/ContactWarehouse"

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 80 : 83;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
let warehouseId = null;
class WarehouseDetailsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
            hideContactModal: true
        };

    }

    componentDidMount() {
        this.setState({ warehouseId: this.props.route.params.warehouseId })


        warehouseId = this.props.route.params.warehouseId
        this.props.getPageData()
    }



    render() {
        const headerTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });

        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
        });

        const titleScale = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0.8],
            extrapolate: 'clamp',
        });
        const titleTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, -8],
            extrapolate: 'clamp',
        });
        if (this.props.warehouseDetails.loading) {
            return <ScreenLoader />
        }
        return (
            <View style={[styles.fill, { paddingBottom: 80 }]}>


                <Animated.ScrollView
                    style={styles.fill}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                        { useNativeDriver: true },
                    )}
                >

                    {this.props.warehouseDetails &&
                        <View style={styles.scrollViewContent}>


                            <WarehouseDetail data={this.props.warehouseDetails} />

                        </View>
                    }

                </Animated.ScrollView>
                <Animated.View
                    style={[
                        styles.header,
                        { transform: [{ translateY: headerTranslate }] },
                    ]}
                >
                    {this.props.warehouseDetails && this.props.warehouseDetails.data && this.props.warehouseDetails.data.images && !this.props.warehouseDetails.data.images.length &&

                            <Animated.Image
                                style={[
                                    styles.backgroundImage,
                                    {
                                        opacity: imageOpacity,
                                        transform: [{ translateY: imageTranslate }],

                                    },
                                ]}

                                source={require("../assets/splash.jpg")}

                            />

                    }

                    {this.props.warehouseDetails && this.props.warehouseDetails.data && this.props.warehouseDetails.data.images && this.props.warehouseDetails.data.images.length > 0 &&
                        <Animated.Image
                            style={[
                                styles.backgroundImage,
                                {
                                    opacity: imageOpacity,
                                    transform: [{ translateY: imageTranslate }],
                                },
                            ]}
                            source={{ uri: `https://anyspaze.blob.core.windows.net/image/${this.props.warehouseDetails.data.images[0]}` }}
                        />
                    }

                </Animated.View>
                <Animated.View style={styles.bar}

                >

                    <Ionicons size={25} name="arrow-back"
                        style={{
                            marginTop: 36,
                            marginLeft: 15,
                            color: "#fff"
                        }}
                        onPress={this.props.navigation.goBack}


                    />





                </Animated.View>
                <View style={BottomTabStyle}>
                    <TouchableOpacity style={BottomTabBtnStyle} onPress={() => this.setState({ hideContactModal: false })}>

                        <MaterialCommunityIcons name={"email-send-outline"} size={22}
                        />
                        <Text style={BottomTabBtnText}>Contact Warehouse</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={!this.state.hideContactModal}
                    onRequestClose={() => {
                        console.log("Modal has been closed.");
                    }}
                    style={{ zIndex: 11122221 , backgroundColor:"#000"}}
                >
                    <View style={ModalCenteredView}>
                        <View style={[modalView, {alignItems:"flex-start"}]}>
                            <ContactWarehouse
                            warehouseId={this.state.warehouseId}
                            onCloseModal={()=>this.setState({ hideContactModal: !this.state.hideContactModal })}/>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
        zIndex: 11
    },
    content: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#151515",
        //overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
        zIndex: 11

    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    bar: {
        backgroundColor: 'transparent',
        height: 32,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        minHeight: HEADER_MIN_HEIGHT,
        zIndex: 111,
        display: "flex",
        flexDirection: "row",
    },
    scrollViewContent: {
        marginTop: HEADER_MAX_HEIGHT,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#fff"
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    }


});
export const detailScreenOptions = navData => {

    return {
        headerMode: false,
        headerShown: false

    }
}

const mapPropsTosotre = state => {

    return {
        warehouseDetails: state.warehouse
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPageData: () => dispatch(actionCreator.getWarehouseDetails({ warehouseId: warehouseId }))
    }
}

export default connect(mapPropsTosotre, mapDispatchToProps)(WarehouseDetailsScreen);