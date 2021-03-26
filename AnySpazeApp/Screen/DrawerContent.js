import React from "react";
import {View,  StyleSheet} from "react-native";
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {useTheme, Avatar, Title, Caption, Paragraph,Drawer, Text, TouchableRipple} from "react-native-paper"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as actionCreator from "../Store/Actions/Index";
import {useDispatch, useSelector} from "react-redux"

Icon.loadFont()
const DrawerContent = (props)=>{
    const paperTheme = useTheme();
   const dispatch = useDispatch();
   const {email, userName} = useSelector(state=>state.Auth)

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            {/* <Avatar.Image
                                style={{backgroundColor:"#f1f1f1"}}
                                source={{
                                    uri: 'https://anyspaze.azurewebsites.net/icons/android-icon-96x96.png'
                                }}
                                size={50}
                            /> */}
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{userName}</Title>
                                <Caption style={styles.caption}>{email}</Caption>
                            </View>
                        </View>


                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                         <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="magnify"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Search"
                            onPress={() => {
                                props.navigation.navigate('SearchScreen')
                            }}
                        />
                         <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="warehouse"
                                color={color}
                                size={size}
                                />
                            )}
                            label="My Warehouses"
                            onPress={() => {
                                props.navigation.navigate('MyWarehouse')
                            }}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="lock-reset"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Change Password"
                            onPress={() => {props.navigation.navigate('ChangePW')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="headphones"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Contact US"
                            onPress={() => {props.navigation.navigate('Contact')}}
                        />

                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={()=>dispatch(actionCreator.logout())}
                />
            </Drawer.Section>
        </View>
    )
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    }
  });
export default DrawerContent