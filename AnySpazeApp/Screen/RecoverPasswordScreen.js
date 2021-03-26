import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Text, Headline, ActivityIndicator, Colors, Subheading } from "react-native-paper"
import { useForm, Controller } from "react-hook-form";
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { config } from "../config"
import axios from 'axios';

const RecoverPasswordScreen = ({ navigation }) => {
    const { control, handleSubmit, errors, watch } = useForm();
    const [loding, setLoading] = useState(false)
    const [userFound, setUserFound] = useState(true);
    const [error, setError] = useState(false);
    const [emailSent, setEmailSent] = useState(false)
    const resetPwHandler = (email) => {
        setLoading(true)
        axios.post(`${config.API_ENDPOINT}/forgetPw`, email,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                setEmailSent(true)
                setLoading(false)
            })
            .catch(err => {
                if (err.response.status === 400) {
                    setUserFound(false)
                } else {
                    setError(true)
                }

                setLoading(false)
            })
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ paddingHorizontal: 20, justifyContent: "center", justifyContent: "center", minHeight: Dimensions.get('window').height }}>
                    {emailSent && <View style={{ width: "100%", backgroundColor: Colors.deepPurple900, padding: 30, borderRadius: 15 }}>
                        <Subheading style={{color:"#fff"}}>Email with instructions to reset password has been sent, kindly follow the instructions to reset your password</Subheading>
                        <TouchableOpacity
                                style={{ backgroundColor: "#fff", marginTop: 40, borderRadius: 10, display: "flex", flexDirection: "row", justifyContent: "center" }}
                                onPress={()=>navigation.goBack()}
                            >
                                <Text style={{ textAlign: "center", fontWeight: "bold", marginVertical: 20,  }} >Back to Login</Text>
                            </TouchableOpacity>
                        </View>}
                    {!emailSent &&
                        <View style={{ width: "100%", backgroundColor: Colors.deepPurple900, padding: 30, borderRadius: 15 }}>
                            <Headline style={{ color: "#fff", marginBottom: 30 }}>Forgot your password?</Headline>

                            <Text style={{ color: "#fff", marginBottom: 10 }}>Email</Text>
                            <View style={{ display: "flex", flexDirection: "row", borderBottomColor: "#fff", borderBottomWidth: 1, paddingBottom: 5 }}>
                                <FontAwesome
                                    name="envelope"
                                    color="#fff"
                                    size={20}
                                />
                                <Controller
                                    control={control}
                                    style={{ backgroundColor: "#000" }}

                                    render={({ onChange, onBlur, value }) => (
                                        <TextInput
                                            style={{
                                                width: "100%", paddingHorizontal: 10, color: "#fff",
                                                fontSize: 16
                                            }}
                                            onBlur={onBlur}
                                            onChangeText={value => onChange(value)}
                                            value={value}
                                            autoCapitalize="none"

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
                                    <Text style={{ color: "#eee", marginTop: 10 }}>{errors.email.message}</Text>
                                </Animatable.View>}
                            {!userFound &&

                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={{ color: "#eee", marginTop: 10 }}>No user with this email found. Kindly recheck or try with another email</Text>
                                </Animatable.View>
                            }
                            {error &&

                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={{ color: "#eee", marginTop: 10 }}>Some thing went wrong, please try again later or contact support</Text>
                                </Animatable.View>
                            }

                            <TouchableOpacity
                                style={{ backgroundColor: "#fff", marginTop: 40, borderRadius: 10, display: "flex", flexDirection: "row", justifyContent: "center" }}
                                onPress={handleSubmit(resetPwHandler)}
                            >
                                <Text style={{ textAlign: "center", fontWeight: "bold", marginVertical: 20,  }} >Reset Password </Text>{loding && <ActivityIndicator size="small" color={Colors.black} />}

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{  marginTop: 10, borderRadius: 10, display: "flex", flexDirection: "row", justifyContent: "center" }}
                                onPress={navigation.goBack}
                            >
                                <Text style={{ textAlign: "center", fontWeight: "bold", marginVertical: 20,color:Colors.white  }} >Back To Signin</Text>

                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({

})

export default RecoverPasswordScreen;