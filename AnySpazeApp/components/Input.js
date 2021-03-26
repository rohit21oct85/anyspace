import React from "react";
import { useForm, Controller } from "react-hook-form";
import {

    TextInput,
    StyleSheet

} from 'react-native';

export default Input = ({name}) => {
    const { control, handleSubmit, errors } = useForm();
    return (
        <React.Fragment>
            <Controller
                control={control}

                render={({ onChange, onBlur, value }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                        style={styles.textInput}

                    />
                )}
                name={name}
                rules={{ required: "Contact person name is required" }}
            />
            {errors && errors.name && <Text style={styles.errorMsg}>{errors.name.message}</Text>}
        </React.Fragment>
    )
}

const styles = StyleSheet.create({

    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        padding: 10,
        color: '#05375a',
        borderWidth: 1,
        borderColor: "#e7e7e7"
    },
})