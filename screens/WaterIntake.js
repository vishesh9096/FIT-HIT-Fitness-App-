import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/mini';

const WaterIntake = () => {
    const [val , setval] = useState(0);

    const navigation = useNavigation();
  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
      
      
  })
  

  
  )
  return (
    <SafeAreaView className="px-2">
        <View className="flex-row pt-4 pl-1 items-baseline">
        <Text className="font-bold text-4xl">{val}</Text>
        <Text className="font-bold text-xl text-gray-500"> of 10 Glasses</Text>
        </View>
        <Progress.Bar progress={val/10} width={410} color={"#0A2647" }/>
        <View className="flex-row pt-14 space-x-12 pl-12  items-center">
            <TouchableOpacity onPress={()=>{
    setval(val-1)
    
  }}>
                <MinusCircleIcon color={"#0A2647" } size={45}/>
            </TouchableOpacity>
            <View>
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/2923/2923195.png"}} className="w-36 h-36"/>
            </View>
            <TouchableOpacity onPress={()=>{
    setval(val+1)
    
  }}>
            <PlusCircleIcon
            color={"#0A2647" } size={45}
            /></TouchableOpacity >
        </View>
        <View className="pt-4">
            <Text className="text-center font-bold text-2xl">1 Glass (300 ml)</Text>
            <Text className="text-gray-500 text-center font-bold pt-4 text-lg">You have 60 minutes until your </Text>
            <Text className="text-gray-500 text-center font-bold text-lg">next glass of water </Text>
        </View>
        <View className="pt-4 px-3 ">
            <View className="bg-white rounded-xl">
            <Text className="text-xl font-bold pt-1  pl-3">Today's tip</Text>
            <View className="flex-row  py-4">
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/2447/2447764.png"} } className="w-20 h-20"/>
                <View className="pt-3 ">
                <Text className="text-xl font-bold">While travelling avoid beverages</Text>
                <Text className="text-xl font-bold"> and try to drink more water.</Text>
                <Text className="text-lg font-bold"> </Text>
                </View>
            </View>
            </View>
        </View> 
    </SafeAreaView>
  )
}

export default WaterIntake