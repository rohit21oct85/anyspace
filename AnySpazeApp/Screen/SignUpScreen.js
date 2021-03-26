import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar, SafeAreaView

} from 'react-native';
import { Text, ActivityIndicator, Colors } from "react-native-paper"
import * as Animatable from 'react-native-animatable';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";

import * as actionCreator from "../Store/Actions/Index"
Feather.loadFont()
FontAwesome.loadFont()

const SignInScreen = ({ navigation }) => {
    const { control, handleSubmit, errors, watch } = useForm();

    const dispatch = useDispatch();
    const { error, resposeData, loading, errorData } = useSelector(state => state.signUp);



    onSubmit = (data) => {

        dispatch(actionCreator.signUpUser(data))
    }



    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <SafeAreaView>

                <View>

                    {resposeData &&
                        <View style={{
                            backgroundColor: "green",
                            padding: 20,

                            borderRadius: 15,
                            overflow: "hidden",
                            marginVertical: 30,

                        }}>
                            <Text style={{

                                color: "#fff",
                                lineHeight: 25,
                                fontSize: 18
                            }}>

                                Your account has been created and under screening. Kindly login to validate your details</Text>
                        </View>}
                    {!resposeData && <View>
                        <Text style={styles.text_header}>Register Now</Text>

                        <Text style={[styles.text_footer, { marginTop: 10 }]}>Full Name</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user"
                                color="#05375a"
                                size={20} />
                            <Controller
                                control={control}
                                style={styles.textInput}

                                render={({ onChange, onBlur, value }) => (
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        style={styles.textInput}

                                    />
                                )}
                                name={"name"}
                                rules={{
                                    required: "Contact person name is required",
                                    minLength: {
                                        value: 2,
                                        message: "Name must have minimum 2 character"
                                    }
                                }}
                            />
                        </View>
                        {errors && errors.name &&
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>{errors.name.message}</Text>
                            </Animatable.View>}

                        <Text style={styles.text_footer}>Email</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="envelope"
                                color="#05375a"
                                size={20}
                            />
                            <Controller
                                control={control}
                                style={styles.textInput}

                                render={({ onChange, onBlur, value }) => (
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        style={styles.textInput}

                                    />
                                )}
                                name={"email"}
                                rules={{
                                    required: "Please enter an email",
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                        message: "Please enter an valid email"
                                    }
                                }}
                            />
                        </View>
                        {errors && errors.email &&
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>{errors.email.message}</Text>
                            </Animatable.View>}

                        <Text style={styles.text_footer}>Password</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="lock"
                                color="#05375a"
                                size={20} />
                            <Controller
                                control={control}
                                style={styles.textInput}

                                render={({ onChange, onBlur, value }) => (
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        style={styles.textInput}

                                    />
                                )}
                                name={"password"}
                                rules={{
                                    required: "Please enter a password",
                                    minLength: {
                                        value: 8,
                                        message: "Password should be minimum 8 character"
                                    }
                                }}
                            />
                        </View>
                        {errors && errors.password &&
                            <Animatable.View animation="fadeInLeft" duration={500}><Text style={styles.errorMsg}>{errors.password.message}</Text>
                            </Animatable.View>}

                        <Text style={styles.text_footer}>Confirm Password</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="lock"
                                color="#05375a"
                                size={20} />
                            <Controller
                                control={control}
                                style={styles.textInput}

                                render={({ onChange, onBlur, value }) => (
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        style={styles.textInput}

                                    />
                                )}
                                name={"confirmPassword"}
                                rules={{
                                    required: "Please enter a password",

                                    validate: value =>
                                        value === watch("password", "") || "The passwords do not match"
                                }}
                            />
                        </View>
                        {errors && errors.confirmPassword &&
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>{errors.confirmPassword.message}</Text>
                            </Animatable.View>}



                        {errorData && errorData.response.status === 422 &&
                            <Text style={[styles.errorMsg, { marginTop: 20, fontWeight: "700" }]}>An user with this email already exist </Text>
                        }
                        {errorData && !errorData.response.status === 422 &&
                            <Text style={[styles.errorMsg, { marginTop: 20, fontWeight: "700" }]}>Some thing went wrong, please try again later or contact our customer care </Text>
                        }

                        <View style={styles.button}>
                            <TouchableOpacity style={styles.signIn}
                                onPress={handleSubmit(onSubmit)}>
                                <Text style={styles.textSign} >Sign Up {loading && <ActivityIndicator size="small" color={Colors.white} />}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    }
                    <View style={[styles.button, { marginTop: 10, marginBottom:50 }]}>
                        <TouchableOpacity
                            style={[styles.signIn, {
                                borderColor: "#151515",
                                marginTop: 15,
                                borderWidth: 1,
                                backgroundColor: "#fff",

                            }]}
                            onPress={() => navigation.navigate("SignInScreen")}>
                            <Text style={[styles.textSign, {
                                color: "#000"
                            }]} >Sign In</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </SafeAreaView>
        </ScrollView>

    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,

    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,

    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#151515',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 50,
        marginTop:50
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 34
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
        paddingHorizontal: 10,
        color: '#05375a'

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