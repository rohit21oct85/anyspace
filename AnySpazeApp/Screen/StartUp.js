import React, { useEffect } from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont()
import { CommonActions } from '@react-navigation/native';

const ContactStack = createStackNavigator();
const ContactWarehouseStack = createStackNavigator();
const ChangePWStack = createStackNavigator();
const SearchStack = createStackNavigator();
const SearchStartStack = createStackNavigator();
const Drawer = createDrawerNavigator();

import RootStackScreen from "./RootStackScreen";
import HomeScreen from "./HomeScreen";
import ContactUs from "./ContactUs";
import SearchScreen from "./SearchScreen";
import SearchResultsScreen from "./SearchResultsScreen"
import DrawerContent from "./DrawerContent";
import WarehouseDetailsScreen from "./WarehouseDetailsScreen"
import ChooseState from "../components/ChooseState"
import ChooseCity from "../components/ChooseCity";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from "../Store/Actions/Index"

import AsyncStorage from "@react-native-community/async-storage";
import ChangePWScreen from "./ChangePWScreen";
import { HeaderStyle } from "../config";
import MyWarehosues, {ScreenOptions as MyWarehosuesScreenOptions} from "./MyWarehouses";

const HomeStack = createStackNavigator();
const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={HeaderStyle}>
        <HomeStack.Screen name="Home" component={HomeScreen}
            options={{
                title: "Home",
                headerLeft: () => (
                    <Icon.Button
                        name="ios-menu"
                        backgroundColor="#000"
                        onPress={() => navigation.toggleDrawer()}
                    />

                )
            }} />

    </HomeStack.Navigator>
)
const MyWareHouseStack = createStackNavigator();
const MyWareHouseScreen = ({ navigation }) => (
    <MyWareHouseStack.Navigator screenOptions={HeaderStyle}>
        <MyWareHouseStack.Screen name="MyWarehouse" component={MyWarehosues}
            options={MyWarehosuesScreenOptions}/>

    </MyWareHouseStack.Navigator>
)
const ContactStackScreen = ({ navigation }) => (
    <ContactStack.Navigator screenOptions={HeaderStyle}>
        <ContactStack.Screen name="Contact" component={ContactUs}

            options={{
                title: "Contact",
                headerLeft: () => (
                    <Icon.Button
                        name="ios-menu"
                        backgroundColor="#000"
                        onPress={() => navigation.toggleDrawer()}
                    />

                )
            }} />

    </ContactStack.Navigator>
)


const ChangePWStackScreen = ({ navigation }) => (
    <ChangePWStack.Navigator screenOptions={HeaderStyle}>
        <ChangePWStack.Screen name="ChangePW" component={ChangePWScreen}

            options={{
                title: "Change Password",
                headerLeft: () => (
                    <Icon.Button
                        name="ios-menu"
                        backgroundColor="#000"
                        onPress={() => navigation.toggleDrawer()}
                    />

                )
            }} />

    </ChangePWStack.Navigator>
)

const SearchStartScreenStack = ({ navigation }) => (
    <SearchStartStack.Navigator screenOptions={HeaderStyle}>
        <SearchStartStack.Screen name="SearchStartScreen" component={SearchScreen}

            options={{
                title: "SearchScreen",
                headerLeft: () => (
                    <Icon.Button
                        name="ios-menu"
                        backgroundColor="#000"
                        onPress={() => navigation.toggleDrawer()}
                    />

                )
            }} />

    </SearchStartStack.Navigator>

)

const SearchStackScreen = ({ navigation }) => (
    <SearchStack.Navigator screenOptions={HeaderStyle}>
        <SearchStack.Screen name="SearchScreen" component={SearchStartScreenStack}

            options={{
                title: "Search Warehouses",
                headerLeft: () => (
                    <Icon.Button
                        name="ios-menu"
                        backgroundColor="#000"
                        onPress={() => navigation.toggleDrawer()}
                    />

                )
            }} />
        <SearchStartStack.Screen name="ChooseState" component={ChooseState}

            options={{
                title: "Select State",
                headerLeft: () => (
                    <Icon.Button
                        name="arrow-back"
                        backgroundColor="#000"
                        onPress={() => navigation.dispatch(
                            CommonActions.reset({
                                index: 1,
                                routes: [
                                    { name: 'SearchScreen' }
                                ]

                            })
                        )}
                    />

                )
            }} />

        <SearchStartStack.Screen name="ChooseCity" component={ChooseCity}
            options={{
                title: "Select City",
                headerLeft: () => (
                    <Icon.Button
                        name="arrow-back"
                        backgroundColor="#000"
                        onPress={() => navigation.dispatch(
                            CommonActions.reset({
                                index: 1,
                                routes: [
                                    { name: 'SearchScreen' }
                                ]

                            })
                        )}
                    />

                )
            }} />
        <SearchStack.Screen name="Results" component={SearchResultsScreen}

            options={{
                title: "Search Results",
                headerLeft: () => (
                    <Icon.Button
                        name="arrow-back"
                        backgroundColor="#000"
                        onPress={() => {
                            navigation.dispatch(
                                CommonActions.reset({
                                    index: 1,
                                    routes: [
                                        { name: 'SearchScreen' }
                                    ]

                                })
                            );



                        }}
                    />

                )
            }} />
        <SearchStack.Screen name="Details" component={WarehouseDetailsScreen}

            options={{
                title: "Search Results",
                headerMode: false,
                headerShown: false
            }} />




    </SearchStack.Navigator>
)


const StartupScreen = ({ navigation }) => {
    const Auth = useSelector(state => state.Auth.auth);
    const dispatch = useDispatch()
    const tryLogin = async () => {

        let userData = await AsyncStorage.getItem('userData');


        if (!userData) {

            return;
        }
        const transformedData = JSON.parse(userData);

        const { token, userName, expiryDate, userEmail } = transformedData;

        const expirationDate = new Date(expiryDate);

        if (expirationDate <= new Date() || !token || !userName || !userEmail) {


            return;
        }

        dispatch(actionCreators.loginSuccess({
            "token": token,
            "userName": userName,
            "email": userEmail
        }))

    }
    useEffect(() => {


        tryLogin()

    }, [dispatch])

    return (
        <React.Fragment>



            {Auth ? (
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                    <Drawer.Screen name="Home" component={HomeStackScreen} />
                    <Drawer.Screen name="SearchScreen" component={SearchStackScreen} />
                    <Drawer.Screen name="MyWarehouse" component={MyWareHouseScreen} />
                    <Drawer.Screen name="ChangePW" component={ChangePWStackScreen} />
                    <Drawer.Screen name="Contact" component={ContactStackScreen} />

                </Drawer.Navigator>
            ) :
                <RootStackScreen />
            }
        </React.Fragment>
    )
}

export default StartupScreen;