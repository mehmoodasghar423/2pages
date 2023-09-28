
import { Image, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

const Welcome = () => {

    const navigation = useNavigation();

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;


    const handler = () => {
        navigation.navigate('Login');
    };

    const Registerhandler = () => {
        navigation.navigate('Register');
    };
    
    return (
       


            <View style={{
               
            }}>

                <Image style={{
                     width: screenWidth * 0.7,
                     height: screenHeight * 0.55,
                     alignSelf: "center",
                    resizeMode:"contain",
                    
                 }}
                    source={require("../../assets/LostApp/Welcome.png")} />
              
                    <View style={{ top:"8%"}}>
                 
                <Text style={{alignSelf:"center",fontSize:25 ,
                // fontFamily:"Urbanist_600SemiBold",
                position:"relative" ,}}>Lost<Text style={{}}>&</Text>Found</Text>

                <TouchableOpacity
                    onPress={handler}
                    style={{
                        position:"relative" ,
                        marginTop:"5%",
                        borderRadius: 8,
                        backgroundColor: '#7689D6',
                        width: screenWidth*0.89,
                        height: screenHeight*0.073,
                        alignSelf: "center",
                
                        justifyContent: "center"
                    }}><Text style={{
                        fontSize: 15,
                        alignSelf: "center",
                        color: '#F9F9F9',

                    }}
                    >Login </Text>

                </TouchableOpacity>

                <TouchableOpacity
                onPress={Registerhandler}
                    style={{
                        position:"relative" ,
                        marginTop:"2%",
                        borderRadius: 8,
                        backgroundColor: 'white',
                        borderWidth: 1,
                        width: screenWidth*0.89,
                        height: screenHeight*0.073,
                        alignSelf: "center",
                        justifyContent: "center"
                    }}><Text style={{
                        fontSize:15,
                        alignSelf: "center",
                        color: '#1E232C',

                    }}
                    >Register </Text>

                </TouchableOpacity>

                <TouchableOpacity>

                    <Text style={{
                        fontSize: 14,
                        alignSelf: "center",
                        color: '#CE3932',
                        position:"relative" ,
                        marginTop:"5%",

                    }}
                    >
                        Continue as a guest
                    </Text>
                </TouchableOpacity>

                </View>

            </View>
       
    );
}

const styles = StyleSheet.create({
});
export default Welcome;