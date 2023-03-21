import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable  from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native'; 



const AnimationScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login");
        },3000);
       
    },[]);
  return (
    <SafeAreaView className="bg-[#0A2647] flex-1 pt-32 justify-centre items-center">
      <Animatable.Image
      source={require("../assets/imm.gif")}
      animation="slideInUp"
      iterationCount={1}
      className="h-96 w-96 p-2"
      />

      <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-lg my-10 text-white font-bold text-center"
      >

            LET'S GET FIT TOGETHER !!

      </Animatable.Text>
      <Progress.Bar  width={200} animationType='decay'  indeterminate={true} />
      
      <Text className="pt-44 text-xs text-white">By Continuing you agree to our </Text>

        <Text className="pt-1 text-xs text-white">Terms of Service || Privacy Policy || Content Policy</Text>


    </SafeAreaView>
  );
};

export default AnimationScreen;