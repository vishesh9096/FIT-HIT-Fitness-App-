import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Data3Screen = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
    <SafeAreaView className="p-2">
<Progress.Bar progress={0.6} width={410} color={"#0A2647" } />
    <View>
        <Text className="text-center pt-3 text-lg font-semibold">Step 3 of 5</Text>
        <Text className="text-center pt-5 text-2xl font-bold">What's your gender?</Text>
        

    <View className="flex items-center pt-8">
        <View className="flex-row gap-x-12 ">
        <TouchableOpacity onPress={()=>{navigation.navigate("Data4")}}>
            <View className="border bg-gray-50 h-36 w-36 rounded-2xl shadow-2xl pt-4  items-center">
            <Image source={require('../Icons/male.png')} className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Male</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Data4")}}>
            <View className="border h-36 bg-gray-50 w-36 rounded-2xl shadow-2xl pt-4  items-center">
            <Image source={require('../Icons/female.png')} className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Female</Text>
            </View>
            </TouchableOpacity>
        </View>

        
        
        
    </View>

    </View>
    
</SafeAreaView>
  )
}

export default Data3Screen