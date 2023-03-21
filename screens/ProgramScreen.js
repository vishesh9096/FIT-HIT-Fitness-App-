import { View, Text, TouchableOpacity,Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StarIcon } from 'react-native-heroicons/mini';


const ProgramScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
<View>
        <Image source={{ uri:"https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2w"}} className="h-72  w-full"/>

        <View className="absolute top-64 left-12">
    <View className="flex items-center">
        <View className="flex-row gap-x-12 ">
        <TouchableOpacity onPress={()=>{navigation.navigate("Data1")}}>
            <View className="border bg-gray-50 h-36 w-36 rounded-2xl shadow-2xl pt-4  items-center">
            <Image source={require('../Icons/gain.png')} className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Weight Gain</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Data1")}}>
            <View className="border h-36 bg-gray-50 w-36 rounded-2xl shadow-2xl pt-4  items-center">
            <Image source={require('../Icons/loss.png')}className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Weight Loss</Text>
            </View>
            </TouchableOpacity>
        </View>

        
        
        <View className="flex-row gap-x-12 pt-5 ">
        <TouchableOpacity>
            <View className="border h-36 w-36 bg-gray-50 rounded-2xl shadow-2xl pt-4  items-center">
            <Image source={require('../Icons/muscle.png')} className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Muscle Gain</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity >
            <View className="border h-36 w-36 bg-gray-50 rounded-2xl shadow-2xl pt-4  items-center">
            <Image source={require('../Icons/trainer.png')} className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Guidance</Text>
            </View>
            </TouchableOpacity>
        </View>
    </View>
    </View>
    
    <Text className="top-64 pt-12 text-center text-3xl font-bold">What Brings you to FIT HIIT?</Text>
    <View className="pt-72 flex items-center ">
    <TouchableOpacity className=" pt-12 w-72" >
            <View className="bg-[#0A2647] flex rounded-xl h-11">
            <Text className=" pl-20  text-white font-extrabold  pt-2 text-xl  h-8">Go Pro</Text>
            
            </View>
            <View className="absolute top-14 flex-row left-40 ">
            <StarIcon color={"yellow"}/>
            <StarIcon color={"yellow"}/>
            <StarIcon color={"yellow"}/>
            </View>
        </TouchableOpacity>
    </View>
    <Text className="pt-40 text-xs text-center">By Continuing you agree to our </Text>

        <Text className="pt-1 text-xs text-center">Terms of Service || Privacy Policy || Content Policy</Text>

    </View>
    
    
  )
}

export default ProgramScreen