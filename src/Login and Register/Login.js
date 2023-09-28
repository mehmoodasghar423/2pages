import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View,Dimensions } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
 
  return (

      <View style={{ flex: 1, backgroundColor: "white" }}>
       
        <Text
          style={{
            fontSize: 20,
            letterSpacing: -0.5,
            position: "relative",
            marginTop: "21%",
            alignSelf:"center"
          }}
        >
          Welcome back! Glad to {'\n'}       see you, Again!

        </Text>

        <TextInput style={{
          backgroundColor: "#F7F8F9",
          borderWidth: 1,
          borderColor: "#E8ECF4",  
          width: "90%",
          height: screenHeight*0.06,
          alignSelf: "center",
          borderRadius: 8,
          fontSize: 12,
          position: "relative",
          marginTop:"10%",
          padding: 10
        }}
          placeholder='Enter your email'
          placeholderTextColor="#8391A1"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <View style={{
         
        }}>
          <TextInput style={{
            backgroundColor: "#F7F8F9",
            borderWidth: 1,
            borderColor: "#E8ECF4",
            width: screenWidth*0.9,
            height: screenHeight*0.06,
            alignSelf: "center",
            borderRadius: 8,
            fontSize: 12,
          position: "relative",
          marginTop:"2%",
            padding: 10,
          }}
            placeholder='Enter your password'
            placeholderTextColor="#8391A1"
            // secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={text => setPassword(text)}
          />
         
        </View>

        <TouchableOpacity 
        style={{ alignItems: "flex-end",   position: "relative",
        marginTop:"2%", }}>
          <Text
            style={{
              fontSize: 12,
              // lineHeight: 14.4,
              // left: -20,
              left: "-6%",
              letterSpacing: -1,
           
              color: "#6A707C"
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          // onPress={handler}
          style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: '#7689D6',
            width: "90%",
            height:33,
            height: screenHeight*0.06,
            alignSelf: "center",
            marginTop:"2%",
            justifyContent: "center"
          }}><Text style={{
            fontSize: 15,
            // lineHeight: 18,
            alignSelf: "center",
            color: '#F9F9F9',


          }}
          >Login </Text>
        </TouchableOpacity>





        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor:"red",
          position:"relative",
          marginTop:"7%",

        }}>

          <View style={styles.line} />
            <Text
              style={{
                fontSize:14,
                letterSpacing: -0.5,
                color: "#6A707C",
                marginHorizontal: 20
              }}
            >
              Or Login with
            </Text>
          <View style={styles.line} />
        </View>



        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginTop:"5%",
        }}>
          <TouchableOpacity style={[styles.box,{borderColor:"#4092FF", height: screenHeight*0.04,}]}>
            <Image
              source={require("../../assets/LostApp/Facebook.png")}
              style={{
                height: screenHeight*0.02,
                width: screenWidth*0.06,
                resizeMode: "contain",
                alignSelf: "center"
              }} />
          </TouchableOpacity>

          <TouchableOpacity
          style={[styles.box,{borderColor:"#FBBB00", height: screenHeight*0.04,}]}>
            <Image
              source={require("../../assets/LostApp/Google.png")}
              style={{
                height: screenHeight*0.02,
                width: screenWidth*0.06,
                resizeMode: "contain",
                alignSelf: "center"
              }} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.box,{borderColor:"#000000", height: screenHeight*0.04,}]}>
            <Image
              source={require("../../assets/LostApp/Ios.png")}
              style={{
                height: screenHeight*0.02,
                width: screenWidth*0.06,
                resizeMode: "contain",
                alignSelf: "center"
              }} />
          </TouchableOpacity>
        </View>



        <View   style={{
          position: "relative",
          marginTop:"5%",
          alignSelf: "center",
          flexDirection:"row"
        }}>
        
        
       
        <Text
          style={{
            fontSize:12,
            letterSpacing: 1,
            color: "#6A707C",
            alignSelf: "center",
            color: "#1E232C",
          }}
        >
          Dont have an account? 
        </Text>

        <TouchableOpacity
          onPress={()=>navigation.navigate('Register')}
          style={{
            justifyContent:"center"
          }} >
          <Text style={{
             color: "#9457E0",
             fontSize: 12,
             letterSpacing: 1,
             alignSelf: "center",
          
             }}>
           Register Now
          </Text>
          
          </TouchableOpacity>
        </View>

        

      </View>

  )
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "#E8ECF4",
    width: "28%",
    
    
  },
  box: {
  width: "17.5%",
    height: 33.1,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 2.5,
    justifyContent: "center",
  },
 
});
