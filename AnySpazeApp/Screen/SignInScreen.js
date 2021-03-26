import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Dimensions, Platform, StyleSheet, StatusBar,ScrollView } from 'react-native';
import { Button, Text, ActivityIndicator, Colors } from "react-native-paper"
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../Store/Actions/Index"

FontAwesome.loadFont()
Feather.loadFont()

const SignInScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const state1
        = useSelector(state => state.Auth)
    const { loading, error } = useSelector(state => state.Auth)
    const [data, setData] = useState({
        email: "",
        password: "",
        checkTextInputChange: false,
        secureTextEntry: true,
        isValidEmail: true,
        isValidPassword: true,
        formError: false
    })

    const textInputChnage = (val) => {
        if (val.trim().length !== 0 && (val).match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            setData({
                ...data,
                email: val,
                checkTextInputChange: true,
                isValidEmail: true,
                formError: false
            })
        } else {
            setData({
                ...data,
                email: val,
                checkTextInputChange: false,
                isValidEmail: false,
                formError: false
            })
        }
    }
    const handlePWChange = (val) => {
        if (val.trim().length >= 6) {
            setData({
                ...data,
                password: val,
                isValidPassword: true,
                formError: false
            })
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false,
                formError: false
            })
        }

    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    const loginHandler = (user, pass) => {
        if (!user || !pass) {

            setData({ ...data, formError: true })

            return;
        } else {
            setData({ ...data, formError: false })
        }
        dispatch(actionCreator.loginUser(
            {
                email: user,
                password: pass
            }
        ))
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#151515" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome</Text>

            </View>
            <View
                style={styles.footer}>
                     <ScrollView>

                <Text style={styles.text_footer}>Email</Text>


                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20} />

                    <TextInput
                        autoCapitalize="none"
                        placeholder="Your Email"
                        style={styles.textInput}

                        onChangeText={(val) => textInputChnage(val)}
                    />
                    {data.checkTextInputChange ?
                        <Animatable.View
                            animation="bounceIn">
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            /></Animatable.View> : null}

                </View>
                {!data.isValidEmail &&
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Please enter a valid email</Text>

                    </Animatable.View>
                }
                <Text style={[styles.text_footer, {
                    marginTop: 34
                }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20} />

                    <TextInput
                        autoCapitalize="none"
                        placeholder="Password"
                        style={styles.textInput}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePWChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="gray"
                                size={20}
                            />
                            : <Feather
                                name="eye"
                                color="gray"
                                size={20}
                            />}
                    </TouchableOpacity>

                </View>
                {!data.isValidPassword &&
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Please provide password</Text>

                    </Animatable.View>
                }
                <View style={styles.button}>
                    {data.formError &&
                        <Text style={[styles.errorMsg, { marginBottom: 10 }]}>
                            Please enter valid email and password
                    </Text>
                    }
                    {error &&
                        <Text style={[styles.errorMsg, { marginBottom: 10 }]}>
                            Incorrect user email or password
                    </Text>
                    }

                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => loginHandler(data.email, data.password)}
                    >
                        <Text style={styles.textSign} >Sign In {loading && <ActivityIndicator size="small" color={Colors.white} />}</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.signIn, {
                            borderColor: "#151515",
                            marginTop: 15,
                            borderWidth: 1,
                            backgroundColor: "#fff",

                        }]}
                        onPress={() => navigation.navigate("SignUpScreen")}>
                        <Text style={[styles.textSign, {
                            color: "#000"
                        }]} >Sign Up</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ {

                            marginTop: 15, color:Colors.blue400

                        }}
                        onPress={() => navigation.navigate("RecoverPasswordScreen")}>
                        <Text style={ {
                           color:Colors.deepPurple900,fontWeight: "bold",
                        }} >Can't access your account?</Text>

                    </TouchableOpacity>



                </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#151515"
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 50
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        backgroundColor: Colors.black,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: "center",
        width:"100%"
    },
    textSign: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        marginVertical: 15,
    }
});