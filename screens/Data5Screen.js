import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { SliderPicker } from 'react-native-slider-picker';

const Data5Screen = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    
    )
    
  return (
    <SafeAreaView className="p-2">
<Progress.Bar progress={1} width={410} color={"#0A2647" } />
    <View>
        <Text className="text-center pt-3 text-lg font-semibold">Step 5 of 5</Text>
        <Text className="text-center pt-5 text-2xl font-bold">How often do you exercise in a week?</Text>
        <View className="pt-5">
        <SliderPicker 
          minLabel={'Begineer'}
          maxLabel={'Advance'}
          maxValue={7}
          minValue={1}
          labelFontColor={"#6c7682"}
          labelFontWeight={'200'}
          showFill={true}
          fillColor={'#0A2647'}
          
          showNumberScale={true}
          showSeparatorScale={true}
          buttonBackgroundColor={'#fff'}
          buttonBorderColor={"#6c7682"}
          buttonBorderWidth={1}
          scaleNumberFontWeight={'300'}
          buttonDimensionsPercentage={6}
          heightPercentage={1}
          widthPercentage={80}
           
        />
        </View>




        <TouchableOpacity className="pt-8 w-full" onPress={()=>{
          alert("Logged in")
          navigation.navigate('Notification')}} >
            <View className="bg-[#0A2647] rounded-xl h-11">
            <Text className=" text-center  text-white font-semibold  pt-2 text-lg h-8">Continue</Text>
            </View>
        </TouchableOpacity>

    </View>
    
    
</SafeAreaView>
  )
}

export default Data5Screen