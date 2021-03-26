import React, { useEffect, useRef } from "react";
import { View, TouchableOpacity, StyleSheet,Alert } from "react-native";
import { Text, Headline, Subheading, Colors } from "react-native-paper"
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { getListedWarehouse, toggleWarehouseStatus } from "../Store/Actions/Index";
import { useSelector, useDispatch } from "react-redux";
import ScreenLoader from "../components/ScreenLoader";
import { ButtonDark, DarkBtnText, listItem, localityStyle, warehouseListTitle } from "../config";
import { SwipeListView } from "react-native-swipe-list-view";
import axios from "axios";



const MyWarehosues = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector(state => state.userWarehouse);


    useEffect(() => {
        dispatch(getListedWarehouse())
    }, []);

    const loadMore = () => {
        console.log("load more")
    }

    if (loading) {
        return <ScreenLoader />;
    }
    if (data && !data.length) {
        return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 20, backgroundColor: Colors.brown100 }}>
            <Headline>No Warehouse listed</Headline>
            <Subheading style={{ textAlign: "center" }}>You have not listed any warehouse yet. If you are a warehouse owner, start listing now</Subheading>
            <TouchableOpacity style={[ButtonDark, { paddingHorizontal: 30 }]}><Text style={DarkBtnText}>Start Listing</Text></TouchableOpacity>
        </View>
    }

    const  handleDeactivate = (wcurrentStaus, wwarehouseId)=>{
        let wdata = {currentStaus:wcurrentStaus, warehouseId : wwarehouseId}
        if(wdata.currentStaus == 1){
            Alert.alert(
                "Deactivating warehouse",
                "Deactivating the warehouse will stop showing this warehouse in search results & no new lead will recieve",
                [
                  {
                    text: "Cancel",

                    style: "cancel"
                  },
                  { text: "OK", onPress: () => toggleStatus(wdata) }
                ],
                { cancelable: false }
              )
        }else if(wdata.currentStaus == 2){
            toggleStatus(wdata)
        }
    }
    const toggleStatus =(toggleStatus)=>{
        dispatch(toggleWarehouseStatus(toggleStatus))

    }

    return <View>
        {data && <SwipeListView

            data={data}
            renderItem={(data, rowMap) => (
                <View style={[listItem, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}>
                    <View style={{ flex: 10 }}>
                        <Text style={warehouseListTitle}>{data.item.warehouseName}</Text>
                        <Text style={localityStyle}>{data.item.Addressline1}</Text>
                        <Text style={localityStyle}>{data.item.city}</Text>
                    </View>
                    <MaterialCommunityIcons
                        name="gesture-swipe-horizontal"
                        size={30}
                        color="#efefef"
                        style={{ flex: 1, marginLeft: 10 }}
                    />
                </View>
            )}
            renderHiddenItem={(data, rowMap) => (
                <>




                    {data.item.status == 1 &&
                        <View style={styles.rowBack}>
                        <TouchableOpacity style={styles.deleteBtn}
                        onPress={() => handleDeactivate(data.item.status, data.item._id)}>
                            <Text style={styles.deleteBtnTXT}>Deactivate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteBtn}
                        onPress={() => handleDeactivate(data.item.status, data.item._id)}
                        >
                            <Text style={styles.deleteBtnTXT}>Deactivate</Text>
                        </TouchableOpacity>
                    </View>}
                    {data.item.status == 2 &&
                        <View style={[styles.rowBack, {backgroundColor:Colors.greenA700}]}>
                        <TouchableOpacity style={[styles.deleteBtn,{backgroundColor:Colors.greenA700}]}
                        onPress={() => handleDeactivate(data.item.status, data.item._id)}>
                            <Text style={styles.deleteBtnTXT}>Activate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.deleteBtn,{backgroundColor:Colors.greenA700}]}
                        onPress={() => handleDeactivate(data.item.status, data.item._id)}
                            >
                            <Text style={styles.deleteBtnTXT}>Activate</Text>
                        </TouchableOpacity>
                    </View>}

                </>
            )}
            leftOpenValue={100}
            rightOpenValue={-100}
            onEndReached={() => loadMore}
            onEndReachedThreshold={0.4}
            keyExtractor={item => item._id}
            ItemSeparatorComponent={() => <View style={{
                borderBottomWidth: 1, borderTopWidth: 1, borderTopColor: "#ddd", borderBottomColor: "#ddd"
            }} />}
        />}

    </View>
}
const styles = StyleSheet.create({
    deleteBtn: { backgroundColor: Colors.redA700 },
    deleteBtnTXT: { color: Colors.white, paddingHorizontal: 10, fontSize: 16 },
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: Colors.redA700,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',


    }

})
export const ScreenOptions = navData => {
    return {
        title: "My Warehouses",
        headerLeft: () => (
            <Icon.Button
                name="ios-menu"
                backgroundColor="#000"
                onPress={() => navData.navigation.toggleDrawer()}
            />

        )
    }

}

export default MyWarehosues