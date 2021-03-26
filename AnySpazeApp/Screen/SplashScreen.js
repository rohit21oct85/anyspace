import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import {Colors} from "react-native-paper"
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//import { useTheme } from '@react-navigaticd ioson/native';
MaterialIcons.loadFont()
const SplashScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="#151515" barStyle="light-content" />
         <View style={styles.header}>
            <Animatable.Image
            animation="bounceIn"
            duration={1500}
            source={require("../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
            />
         </View>
         <Animatable.View
            animation="fadeInUpBig"
         style={styles.footer}>
         <Text style={styles.title}>Find Warehouses near you</Text>
         <Text style={styles.text}>Sign in with account</Text>

         <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate("SignInScreen")}    style={styles.signIn}>


                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons
                            name="navigate-next"
                            color="#fff"
                            size={23}
                    />

            </TouchableOpacity>
            </View>
         </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#151515"
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: 300,


  },
  title: {
      color: '#151515',
      fontSize: 22,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5,
      fontSize:18
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 200,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      backgroundColor:Colors.black,
      paddingVertical:15
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold',
      fontSize:20
  }
});