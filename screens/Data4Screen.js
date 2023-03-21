import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Data4Screen = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
    <SafeAreaView className="p-2">
<Progress.Bar progress={0.8} width={410} color={"#0A2647" } />
    <View>
        <Text className="text-center pt-3 text-lg font-semibold">Step 4 of 5</Text>
        <Text className="text-center pt-5 text-2xl font-bold">How tall are you?</Text>
        <View className="flex items-center">
        <View className="pt-5 flex-row  items-center">
        <TextInput placeholder='?' className="text-2xl pl-2  w-12 h-12 border-gray-400 rounded-xl "keyboardType='number-pad' />
        <Text className="text-xl pt-3">CM</Text>
        </View>
        </View>
        <TouchableOpacity className="pt-8 w-full" onPress={()=>navigation.navigate('Data5')} >
            <View className="bg-[#0A2647] rounded-xl h-11">
            <Text className=" text-center  text-white font-semibold  pt-2 text-lg h-8">Continue</Text>
            </View>
        </TouchableOpacity>
    </View>
    
</SafeAreaView>
  )
}

export default Data4Screen