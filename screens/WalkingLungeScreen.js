import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable  from "react-native-animatable"
import { Timer } from 'react-native-stopwatch-timer';
import { useNavigation } from '@react-navigation/native';
import { XMarkIcon } from 'react-native-heroicons/mini';


const WalkingLungeScreen = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timeDuration, setTimerDuration] = useState(60000);
  const [resetTimer, setResetTimer] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
      setTimeout(() => {
          navigation.navigate("");
      },400000);
     
  },[]);
       
  return (
    <SafeAreaView className="bg-gray-300 flex-1 justify-centre items-center">
         <Animatable.Image
      source={require("../assets/WalkingLunge.gif")}
      animation="slideInUp"
      iterationCount={1}
      className="h-96 w-96"
      />

      <Animatable.Text
      animation="slideInUp"
      iterationCount={2}
      className="text-3xl font-extrabold my-10 text-white text-center"
      >

            Ready..

      </Animatable.Text>

      <View>
        <Text className = "text-[#0A2647] font-bold pb-4 text-xl">Timer starts now</Text>
      </View>
      <View >
        <Timer 
        totalDuration = {timeDuration}
        start={isTimerStart}

        reset={resetTimer}

  
        handleFinish={() => {alert('Finished');
    }}/>

<View className="flex-row">
    <TouchableOpacity className="pt-4" onPress={() => {
        setIsTimerStart(!isTimerStart);
        setResetTimer(false);
    }}>
        <Text className="text-[#0A2647] font-extrabold text-xl">
            {!isTimerStart ? 'START' : 'STOP'}
        </Text>
    </TouchableOpacity>

    <TouchableOpacity className="pt-4 mx-4"onPress={() => {
      navigation.navigate('Donkey Kicks')
    }}>
        <Text  className="text-[#0A2647] font-extrabold text-xl">NEXT</Text>
    </TouchableOpacity>
</View>
</View>
<TouchableOpacity onPress={ ()=>{
    navigation.navigate("Toned Glutes")
}} className="absolute top-16 right-5">

    <XMarkIcon size={45} color={"white"}/>
</TouchableOpacity>
      
    </SafeAreaView>
  );
};

export default WalkingLungeScreen;