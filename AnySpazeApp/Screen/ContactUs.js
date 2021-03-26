import React, { useState } from "react";
import { View, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Text, Headline, Subheading, Colors } from "react-native-paper"
import { useForm, Controller, ActivityIndicator } from "react-hook-form";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { config } from "../config";
import axios from "axios";
import {useSelector} from "react-redux"

const ContactUs = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [formError, setFormError] = useState(false);
    const { control, handleSubmit, errors, watch } = useForm();
    const { userName, email } = useSelector(state => state.Auth)

    const onSubmit = (data) => {

        setLoading(true)
        axios.post(`${config.API_ENDPOINT}/contactForm`, data)
            .then(res => {
                setMessageSent(true);
                setSubmissionError(false);
                setLoading(false);
            })
            .catch(err => {
                setSubmissionError(true);
                setLoading(false)
            })
    }
    return <SafeAreaView>
        <ScrollView>
            {messageSent && <View style={{ padding: 20, flex: 1, display: "flex", alignItems: "center", alignItems: "center", justifyContent: "center" }}>
                <React.Fragment>
                    <Subheading>Thank you</Subheading>
                    <Text>We have recieved your query. Our executives will contact you soon
            </Text>

                </React.Fragment></View>}
            {!messageSent &&
                <View style={{ padding: 20 }}>

                    <Headline>Looking for a new warehousing or distribution solution?</Headline>
                    <Text style={[styles.text_footer]}>Full Name</Text>
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
                                    defaultValue={userName}

                                />
                            )}
                            name={"fullname"}
                            rules={{
                                required: "Contact person name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must have minimum 2 character"
                                }
                            }}
                        />
                    </View>
                    {errors && errors.fullname &&
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>{errors.fullname.message}</Text>
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
                                    autoCapitalize="none"
                                    defaultValue={email}
                                    keyboardType="email-address"

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

                    <Text style={styles.text_footer}>Mobile</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="mobile"
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
                                    autoCapitalize="none"
                                    keyboardType="name-phone-pad"

                                />
                            )}
                            name={"mobile"}
                            rules={{
                                required: "Please provide mobile number",
                                pattern: {
                                    value: /^\d{10}$/,
                                    message: "Please enter a valid 10 digit mobile number"
                                },
                                maxLength:{
                                    value:10,
                                    message: "Please enter a valid 10 digit mobile number"

                                }
                            }}
                        />
                    </View>
                    {errors && errors.mobile &&
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>{errors.mobile.message}</Text>
                        </Animatable.View>}

                    <Text style={styles.text_footer}>Company name</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="building"
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
                                    autoCapitalize="none"

                                />
                            )}
                            name={"company"}
                            rules={{
                                required: "Please enter your company name"
                            }}
                        />
                    </View>
                    {errors && errors.company &&
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>{errors.company.message}</Text>
                        </Animatable.View>}


                    <Text style={styles.text_footer}>Message</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="file-text"
                            color="#05375a"
                            size={20}
                        />
                        <Controller
                            control={control}
                            style={styles.textInput}

                            render={({ onChange, onBlur, value }) => (
                                <TextInput
                                    style={[styles.input, {minHeight:150}]}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    multiline={true}
                                    numberOfLines={5}

                                />
                            )}
                            name={"message"}
                            rules={{
                                required: "Please type your message"

                            }}
                        />
                    </View>
                    {errors && errors.message &&
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>{errors.message.message}</Text>
                        </Animatable.View>}

                    {formError && <Text> Something went wrong, kindy try again later or email us at support@anyspaze.com </Text>
                    }

                    <View style={styles.button}>
                        <TouchableOpacity style={styles.btn}
                            onPress={handleSubmit(onSubmit)}>
                            <Text style={styles.btntext} >Sign Up {loading && <ActivityIndicator size="small" color={Colors.white} />}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </ScrollView>
    </SafeAreaView>
}


const styles = StyleSheet.create({
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
    action: {
        flexDirection: 'row',
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 5
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 34
    },
    btn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 50,
        backgroundColor: "#151515"
    },
    btntext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff"
    }
})


export default ContactUs