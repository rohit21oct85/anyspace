
import React, { useEffect } from "react";
import { View, FlatList, ScrollView, RefreshControl } from "react-native"
import { Text, ActivityIndicator, Colors } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../Store/Actions/Index";
import WarehouseListItem from "../components/WarehouseListItem";
import ScreenLoader from "../components/ScreenLoader";

const SearchResultsScreen = (props) => {
    const dispatch = useDispatch()
    const { data } = props.route.params;
    const { loading, err, isLazyLoading, total } = useSelector(state => state.search)
    const warehouses = useSelector(state => state.search.data)
    const GetResults = (nextPage) => {

        if (warehouses.total / 10 < data.pageNumber) {
            return
        }


        data.pageNumber = data.pageNumber + 1;
        dispatch(actionCreator.LoadMoreResults(data))




    }
    useEffect(() => {

        dispatch(actionCreator.searchResults(data))

    }, [dispatch])

    const showDetails = (warehouseId) => {
        props.navigation.navigate("Details", {
            warehouseId: warehouseId
        })
    }
    const ListFooter = () => {
        return isLazyLoading ? <ActivityIndicator color={Colors.black} size="small" style={{ marginVertical: 10 }} /> : null
    }
    if (loading) {
        return <ScreenLoader />
    }

    if (err) {
        return <Text>
            Something went wrong, Please try refreshing or search again
        </Text>
    }
    return (
        <View>



            {warehouses && warehouses.warehouse &&

                <FlatList
                    data={warehouses.warehouse}
                    renderItem={({ item }) => (<WarehouseListItem
                        warehouseName={item.warehouseName}
                        warehouseId={item._id}
                        locality={item.Addressline3}
                        city={item.city}
                        state={item.state}
                        warehouseSpace={item.warehouseSpace}
                        avilableFLoor={item.avilableFLoor}
                        racking={item.racking}
                        showDetails={showDetails}

                    />)}
                    keyExtractor={item => item._id}
                    onEndReachedThreshold={0.4}
                    onEndReached={() => GetResults(true)}
                    ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, borderBottomColor: "#ddd" }} />}
                    ListFooterComponent={ListFooter}


                />

            }

        </View>
    )

}
export const SerpScreenOptions = navData => {

    return {
        headerTitle: navData.route.params.title


    }
}

export default SearchResultsScreen;