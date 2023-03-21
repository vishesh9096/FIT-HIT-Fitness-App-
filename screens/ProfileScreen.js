import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { CalendarDaysIcon, CheckIcon, DocumentIcon, FireIcon, LockOpenIcon, XMarkIcon } from 'react-native-heroicons/mini';

const ProfileScreen = () => {

 const navigation = useNavigation();
  
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
  return (
<SafeAreaView className="bg-[#144272] flex-1">
    <View className="flex-col items-center">
    <View className="pt-10 pb-4 mx-4 px-32">
        <Image source={{uri: "https://img.freepik.com/premium-vector/big-muscular-human-body-silhouette-massive-muscle-flex_637451-113.jpg?w=2000"}}
        className="h-28 w-28 rounded-full"/>
    </View>
    <Text className="text-2xl font-bold text-white  pb-8 mx-20"> Let's get you all set up! </Text>
    </View>
<ScrollView  contentContainerStyle={{
    paddingHorizontal: 15,
    paddingTop: 10,}}
    horizontal
    showsHorizontalScrollIndicator={false} 
    className="px-1 pb-14 space-x-4">
<View  className="w-96 bg-[#BFEAF5] rounded-3xl space-y-2">
<Text className="font-bold text-[#] text-3xl pt-3 text-center">WORKOUT PASS</Text>
<View className=" flex-row pl-5 items-center ">
    <View className="pt-3">
    <CalendarDaysIcon size={30} color={"#144272"}/>
    </View>
<Text className="text-xl font-semibold pt-3 px-2">Access to monthly Calendar</Text>
</View>
<View className=" flex-row pl-5 items-center ">
    <View className="pt-3">
    <FireIcon size={30} color={"#144272"}/>
    </View>
<Text className="text-xl font-semibold pt-3 px-2">Access to ALL Challanges</Text>
</View>
<View className=" flex-row pl-5 items-center ">
    <View className="pt-3">
    <DocumentIcon size={30} color={"#144272"}/>
    </View>
<Text className="text-xl font-semibold pt-3 px-2">Access to ALL Programs</Text>
</View>
<View className="flex-row gap-x-4 pl-6 pt-36">
    <TouchableOpacity className="bg-[#EAFDFC] border-[#0A2647] border-2  pt-8 h-40 flex-column items-center rounded-3xl w-40">
        <Text className="text-center font-bold text-[#0A2647] text-lg">Monthly Plan</Text>
        <Text className="text-center font-bold text-3xl">$49</Text>
        <Text className="text-center">per month</Text>
    </TouchableOpacity>
    <TouchableOpacity className="bg-[#EAFDFC] border-[#0A2647] border-2  pt-8 h-40 flex-column items-center rounded-3xl w-40">
        <Text className="text-center font-bold text-[#0A2647] text-lg">Yearly Plan</Text>
        <Text className="text-center font-bold text-3xl">$249</Text>
        <Text className="text-center">per year</Text>
    </TouchableOpacity>
</View>
</View> 

<View  className="w-96 bg-[#BFEAF5] rounded-3xl space-y-2">
<Text className="font-bold text-[#0A2647] text-3xl pt-3 text-center">ALL-ACCESS PASS</Text>
<View className=" flex-row pl-5  items-center ">
    <View className="pt-3">
    <CalendarDaysIcon size={30} color={"#144272"}/>
    </View>
<Text className="text-xl font-semibold pt-3 px-2">Access to 90 Day Journey</Text>
</View>

<View className="pl-6 space-y-1">
    <View className="flex-row items-center">
        <CheckIcon size={20}  color={"#144272"}/>
        <Text>   Goal setting</Text>
    </View>
    <View className="flex-row items-center">
        <CheckIcon size={20}  color={"#144272"}/>
        <Text>   Daily journaling</Text>
    </View>
    <View className="flex-row items-center">
        <CheckIcon size={20}  color={"#144272"}/>
        <Text>   Visual meal tracking</Text>
    </View>
    <View className="flex-row items-center">
        <CheckIcon size={20}  color={"#144272"}/>
        <Text>   Water Tracking</Text>
    </View>
    <View className="flex-row items-center">
        <CheckIcon size={20}  color={"#144272"}/>
        <Text>   Advance Workout Programs</Text>
    </View>
</View>


<View className=" flex-row pl-5 items-center ">
    <View className="pt-3">
    <LockOpenIcon size={30} color={"#144272"}/>
    </View>
<Text className="text-xl font-semibold pt-4 px-2">Access to Workout Pass</Text>
</View>
<View className="pl-6 space-y-1">
    <View className="flex-row items-center">
        <CheckIcon size={20}  color={"#144272"}/>
        <Text>   Monthly Workout Calendar</Text>
    </View>
    <View className="flex-row items-center">
        <CheckIcon size={20}  color={"#144272"}/>
        <Text>   Workout Challanges</Text>
    </View>
    
   
</View>
<View className="flex-row gap-x-4 pl-6 pt-5">
    <TouchableOpacity className="bg-[#EAFDFC] border-[#0A2647] border-2  pt-8 h-40 flex-column items-center rounded-3xl w-40">
        <Text className="text-center font-bold text-[#0A2647] text-lg">Monthly Plan</Text>
        <Text className="text-center font-bold text-3xl">$49</Text>
        <Text className="text-center">per month</Text>
    </TouchableOpacity>
    <TouchableOpacity className="bg-[#EAFDFC] border-[#0A2647] border-2  pt-8 h-40 flex-column items-center rounded-3xl w-40">
        <Text className="text-center font-bold text-[#0A2647] text-lg">Yearly Plan</Text>
        <Text className="text-center font-bold text-3xl">$249</Text>
        <Text className="text-center">per year</Text>
    </TouchableOpacity>
</View>
</View> 


</ScrollView>

<TouchableOpacity onPress={ ()=>{
    navigation.navigate("Home")
}} className="absolute top-16 right-5">

    <XMarkIcon size={45} color={"white"}/>
</TouchableOpacity>

</SafeAreaView>
  )
}

export default ProfileScreen