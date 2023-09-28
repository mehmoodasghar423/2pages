import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View,Dimensions } from 'react-native';
import React, { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Register() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;


  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
 



  return (
   
      <View style={{ flex: 1, backgroundColor: "white" }}>
       
        <Text
          style={{
            fontSize:  20,
            letterSpacing: -1,
            position: "relative",
            marginTop: "22%",
            alignSelf:"center"
          }}
        >
        Register to Get Started!
        </Text>

        <TextInput style={{
          backgroundColor: "#F7F8F9",
          borderWidth: 1,
          borderColor: "#E8ECF4",
          width: "90%",
          height: screenHeight*0.06,
          alignSelf: "center",
          borderRadius: 8,
          fontSize:  12,
          position: "relative",
          marginTop: "6.4%",
          padding: 10
        }}
          placeholder='Enter your Username'
          placeholderTextColor="#8391A1"
          value={username}
          onChangeText={text => setUsername(text)}
        />


        <TextInput style={{
          backgroundColor: "#F7F8F9",
          borderWidth: 1,
          borderColor: "#E8ECF4",
          width: "90%",
          height: screenHeight*0.06,
          alignSelf: "center",
          borderRadius: 8,
          fontSize:  12,
        
          position: "relative",
          marginTop: "2%",
          padding: 10
        }}
          placeholder='Enter your Email'
          placeholderTextColor="#8391A1"
          value={email}
          onChangeText={text => setEmail(text)}
        />

      
          <TextInput style={{
            backgroundColor: "#F7F8F9",
            borderWidth: 1,
            borderColor: "#E8ECF4",
            // width: 335,
            width: "90%",
            height: screenHeight*0.06,
            alignSelf: "center",
            borderRadius: 8,
            fontSize: 12,
            position: "relative",
          position: "relative",
          marginTop: "2%",
            padding: 10,
          }}
            placeholder='Enter your password'
            placeholderTextColor="#8391A1"
            value={password}
            onChangeText={text => setPassword(text)}
          />

          <TextInput style={{
            backgroundColor: "#F7F8F9",
            borderWidth: 1,
            borderColor: "#E8ECF4",
            width: "90%",
            height: screenHeight*0.06,
            alignSelf: "center",
            borderRadius: 8,
            fontSize:  12,
          
            position: "relative",
          position: "relative",
          marginTop: "2%",
            padding: 10,
          }}
            placeholder='Confirm password'
            placeholderTextColor="#8391A1"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
         
      

       
        <TouchableOpacity
          style={{
            position: "relative",
           marginTop:"7%",
            borderRadius: 8,
            backgroundColor: '#7689D6',
            width: "90%",
            height: screenHeight*0.06,
            alignSelf: "center",
            justifyContent: "center"
          }}><Text style={{
            fontSize: 15,
            alignSelf: "center",
            color: '#F9F9F9',


          }}
          >Register </Text>
        </TouchableOpacity>





        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position:"relative",
          marginTop:"6%",


        }}>

          <View style={styles.line} />
            <Text
              style={{
                fontSize: 14,
                color: "#6A707C",
                marginHorizontal: 20
              }}
            >
            Or register with
            </Text>
          <View style={styles.line} />
        </View>



        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginTop:"6%",
          // backgroundColor:"red"
        }}>
          <TouchableOpacity style={[styles.box,{borderColor:"#4092FF",height: screenHeight*0.04,}]}>
            <Image
              source={require("../../assets/LostApp/Facebook.png")}
              style={{
                height: screenHeight*0.02,
                width: screenWidth*0.06,
                resizeMode: "contain",
                alignSelf: "center"
              }} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.box,{borderColor:"#FBBB00",height: screenHeight*0.04,}]}>
            <Image
              source={require("../../assets/LostApp/Google.png")}
              style={{
                height: screenHeight*0.02,
                width: screenWidth*0.06,
                resizeMode: "contain",
                alignSelf: "center"
              }} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.box,{borderColor:"#000000",height: screenHeight*0.04,}]}>
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
          marginTop:"6%",
          alignSelf: "center",
          flexDirection:"row"
        }}>
        
        
       
        <Text
          style={{
            fontSize:  12,
            // lineHeight: 16.8,
            letterSpacing: .5,
            color: "#6A707C",
            alignSelf: "center",
            // marginHorizontal: 20,
            color: "#1E232C",
          }}
        >
        Already Have an account? 
        </Text>

        <TouchableOpacity
          onPress={()=>navigation.navigate('Login')}
          style={{
            justifyContent:"center"
          }} >
          <Text style={{
            // lineHeight: 16.8,
            letterSpacing: 1,
             alignSelf: "center",
             color: "#9457E0",
             fontSize:  12 ,
             }}>
           Login Now
          </Text>
          
          </TouchableOpacity>
        </View>

        

      </View>
  )
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 2,
    // borderBottomColor: 'black',
    borderBottomColor: "#E8ECF4",
    width: "28%",
    
    
  },
  box: {
    // width:62.71,
    width: "17.5%",
    height: 33.1,
    borderRadius: 5,
    borderWidth: 1,
    // borderColor: "#E8ECF4",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 2.5,
    justifyContent: "center",
  },
  SocialIcons: {
    height: 15.53,
    width: 15.37,
    resizeMode: "contain",
    alignSelf: "center"
  }
});
