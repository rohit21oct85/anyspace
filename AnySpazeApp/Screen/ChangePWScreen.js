import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { Text, ActivityIndicator, Colors } from "react-native-paper"
import { useForm, Controller } from "react-hook-form";
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from "react-redux";
import { LabelBlack, InputContainerDark, InputDark, ButtonDark, DarkBtnText, ErrorDark, SuccessDark } from "../config";
import axios from "axios";
import {config} from "../config"

const ChangePWScreen = ({ navigation }) => {

    const { control, handleSubmit, errors, watch } = useForm();
    const [err,setErr] = useState();
    const [success,setSuccess] = useState();
    const [loading,setLoading] = useState();
    const {authToken} = useSelector(state=>state.Auth)

    const dispatch = useDispatch();

    const ChangePWHandler = (data) => {

        setLoading(true)
        axios.post(`${config.API_ENDPOINT}/changePassword`, data,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + authToken
                }
            }
        )
            .then(res => {
                setLoading(false)
                setSuccess(true)
                setErr(null)
            })
            .catch(err => {
                setLoading(false)
                setErr(err)
            })
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ padding: 20, minHeight: Dimensions.get('window').height }}>


                    <View style={{ width: "100%" }}>

                        <Text style={LabelBlack}>Current Password</Text>
                        <View style={InputContainerDark}>

                            <Controller
                                control={control}

                                render={({ onChange, onBlur, value }) => (
                                    <TextInput
                                        style={InputDark}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        autoCapitalize="none"

                                    />
                                )}
                                name={"currentPassword"}
                                rules={{
                                    required: "Please enter current Password"

                                }}
                            />
                        </View>
                        {errors && errors.currentPassword &&
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={ErrorDark}>{errors.currentPassword.message}</Text>
                            </Animatable.View>}




                        <Text style={LabelBlack}>New Password</Text>
                        <View style={InputContainerDark}>

                            <Controller
                                control={control}

                                render={({ onChange, onBlur, value }) => (
                                    <TextInput
                                        style={InputDark}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        autoCapitalize="none"

                                    />
                                )}
                                name={"newPassword"}
                                rules={{
                                    required: "Please enter new password",
                                    minLength: {
                                        value: 8,
                                        message: "Password should be minimum 8 character long"
                                    },


                                }}
                            />
                        </View>
                        {errors && errors.newPassword &&
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={ErrorDark}>{errors.newPassword.message}</Text>
                            </Animatable.View>}





                        <Text style={LabelBlack}>Confirm Password</Text>
                        <View style={InputContainerDark}>

                            <Controller
                                control={control}

                                render={({ onChange, onBlur, value }) => (
                                    <TextInput
                                        style={InputDark}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        autoCapitalize="none"

                                    />
                                )}
                                name={"confirmPassword"}
                                rules={{
                                    required: "Please enter confirm Password",
                                    validate: value =>
                                        value === watch("newPassword", "") || "The passwords do not match"

                                }}
                            />
                        </View>
                        {errors && errors.confirmPassword &&
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={ErrorDark}>{errors.confirmPassword.message}</Text>
                            </Animatable.View>}





                        {success &&

                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={SuccessDark}>Your passwors has been changed successfully</Text>
                            </Animatable.View>
                        }
                        {err && err.response.status === 422 &&
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={ErrorDark}>Please enter correct current password</Text>
                            </Animatable.View>

                        }

                        <TouchableOpacity
                            style={ButtonDark}
                            onPress={handleSubmit(ChangePWHandler)}
                        >
                            <Text style={DarkBtnText} >Reset Password </Text>{loading && <ActivityIndicator size="small" color={Colors.white} />}

                        </TouchableOpacity>


                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
};


export default ChangePWScreen;