import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import { Text, ActivityIndicator, Colors } from "react-native-paper"
import { useForm, Controller } from "react-hook-form";
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from "react-redux";
import { LabelBlack, InputContainerDark, InputDark, ButtonDark, DarkBtnText, ErrorDark, SuccessDark, LightBtnText, ButtonLight } from "../config";
import axios from "axios";
import { config } from "../config"

const ContactWarehouse = (props) => {

    const { control, handleSubmit, errors, watch } = useForm();
    const [err, setErr] = useState();
    const [success, setSuccess] = useState();
    const [loading, setLoading] = useState();
    const { authToken, userName, email } = useSelector(state => state.Auth)

    const dispatch = useDispatch();

    const ChangePWHandler = (data) => {
        data.name = userName;
        data.email = email;
        data.warehouseId = props.warehouseId
        setLoading(true)

        axios.post(`${config.API_ENDPOINT}/lead`, data,
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
                props.onCloseModal();
                Alert.alert(
                    'Message Sent',
                    'Your message has been sent. Our executives will contact you soon',
                    [
                      {text: 'OK'},
                    ],
                    { cancelable: false }
                  )
            })
            .catch(err => {

                setLoading(false)
                setErr(err)
            })
    }

    return (

        <View>
            <Text style={[LabelBlack, { fontWeight: "700", marginBottom: 0 }]}>Mobile</Text>
            <View style={InputContainerDark}>


                <Controller
                    control={control}

                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={[InputDark, { paddingHorizontal: 0 }]}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            autoCapitalize="none"

                        />
                    )}
                    name={"mobile"}
                    rules={{
                        required: "Please enter mobile number",
                        minLength: {
                            value: 10,
                            message: "Enter 10 digit mobile number"
                        },
                        maxLength: {
                            value: 10,
                            message: "Enter 10 digit mobile number"
                        }

                    }}
                />
            </View>
            {errors && errors.mobile &&
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={ErrorDark}>{errors.mobile.message}</Text>
                </Animatable.View>}
            <Text style={[LabelBlack, LabelBlack, { fontWeight: "700", marginBottom: 0 }]}>Message</Text>
            <View style={InputContainerDark}>

                <Controller
                    control={control}

                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={[InputDark, { paddingHorizontal: 0 }]}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            autoCapitalize="none"
                            multiline={true}
                            numberOfLines={3}

                        />
                    )}
                    name={"message"}
                    rules={{
                        required: "Please enter your requirement",
                    }}
                />
            </View>
            {errors && errors.message &&
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={ErrorDark}>{errors.message.message}</Text>
                </Animatable.View>}

            {err && err.response &&
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={ErrorDark}>Some thing went wrong, please try after some time or contact customer care</Text>
                </Animatable.View>

            }
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={[ButtonLight, { width: "50%", borderRadius: 0 }]}
                    onPress={props.onCloseModal}
                >
                    <Text style={LightBtnText} >Cancel </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={[ButtonDark, { borderRadius: 0, width: "50%" }]}
                    onPress={handleSubmit(ChangePWHandler)}
                >
                    <Text style={DarkBtnText} >Submit </Text>{loading && <ActivityIndicator size="small" color={Colors.white} />}

                </TouchableOpacity>
            </View>
        </View>
    )
};


export default ContactWarehouse;