import { View, Text, Button, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ArrowRightIcon, CakeIcon, CalendarIcon, FireIcon, FlagIcon, HomeIcon, PlayIcon, StarIcon, UserIcon, WrenchIcon } from 'react-native-heroicons/mini';
import * as Progress from 'react-native-progress';
import { Calendar } from 'react-native-calendars';


const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
  })
  
  )
  

 

  
  return (
    
    <View>
      <ScrollView className="flex-1">
<View>
<Image source={require('../assets/sample.jpeg')} className="h-96 rounded-b-3xl w-full"/>
</View>

<View className="absolute pt-16 pl-4">
  <Text className='text-3xl font-bold text-white'>Hii Vishesh! </Text>
  <Text className="text-3xl font-bold text-white">Let's put that work in.</Text>
</View>



<Text className="text-2xl font-bold pt-4 pl-4">Your Activities</Text>
<View className="flex-row pt-2 pl-5 items-center gap-x-4">


  <TouchableOpacity 
  onPress={()=>{navigation.navigate("Pro")}}
  className="h-40 w-28 rounded-xl bg-[#BFEAF5]  shadow-lg shadow-black">
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/3187/3187707.png"} } className="w-8 h-8 absolute top-2 left-2"/>
    <View className="pt-10 pl-4">
    <View className="bg-white border-8 border-[#91b3e7] w-20  h-20 rounded-full">
      <Text className="text-2xl pl-3 pt-4 font-bold">11%</Text>
    </View>
    </View>
    <Text className="text-xl text-center pt-2 font-semibold">Cycling</Text>
  </TouchableOpacity>



  <TouchableOpacity 
  onPress={()=>{navigation.navigate("Pro")}}
  className="h-52 w-32 rounded-xl bg-[#BFEAF5]  shadow-lg shadow-black">
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/3867/3867817.png"} } className="w-8 h-8 absolute top-2 left-2"/>
    <View className="pt-14 pl-4">
    <View className="bg-white border-8 border-[#91b3e7] w-24  h-24 rounded-full">
      <Text className="text-3xl pl-3 pt-5 font-bold">24%</Text>
    </View>
    </View>
    <Text className="text-xl text-center pt-5 font-semibold">Walking</Text>
  </TouchableOpacity>



  <TouchableOpacity 
  onPress={()=>{navigation.navigate("Pro")}}
  className="h-40 w-28 rounded-xl bg-[#BFEAF5]  shadow-lg shadow-black">
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/3048/3048398.png"} } className="w-8 h-8 absolute top-2 left-2"/>
    <View className="pt-10 pl-4">
    <View className="bg-white border-8 border-[#91b3e7] w-20  h-20 rounded-full">
      <Text className="text-2xl pl-2 pt-4 font-bold">80%</Text>
    </View>
    </View>
    <Text className="text-xl text-center pt-2 font-semibold">Yoga</Text>
  </TouchableOpacity>



</View>



<View>

</View>
<View className="flex-row">
<Text className="text-2xl pl-4 font-bold pt-3">Meditations</Text>
<TouchableOpacity 
className="pt-4 pl-56"> 
<ArrowRightIcon color={"#0A2647"}/>
</TouchableOpacity>
</View>
<ScrollView horizontal={true} className="pl-4 pt- gap-x-5 pr-4">
<TouchableOpacity className="" onPress={()=>{navigation.navigate("Medi1")}}>
            <View className="border bg-gray-50 h-40 w-96  rounded-2xl shadow-2xl pt-4  flex-row items-center">
            <Image source={{uri:"https://img.mensxp.com/media/content/2022/Oct/yoga-lotus-pose-meditation_635b7b1822f7c.jpeg"}} className="h-40 rounded  w-40"/>
            <View className=" pl-8">
            <Text className="text-2xl font-semibold   ">Focus</Text>
                <Text className="text-2xl font-semibold  ">Meditation</Text>
                <Text className="text-2xl font-semibold  "></Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity className="" onPress={()=>{navigation.navigate("Medi2")}}>
            <View className="border bg-gray-50 h-40 w-96  rounded-2xl shadow-2xl pt-4  flex-row items-center">
            <Image source={{uri:"https://miro.medium.com/max/959/1*VJxzBzMipe3Zz69Qh0_M-w.jpeg"}} className="h-40 rounded  w-40"/>
            <View className=" pl-8">
            <Text className="text-2xl font-semibold   ">Mantra </Text>
                <Text className="text-2xl font-semibold  ">Meditation</Text>
                <Text className="text-2xl font-semibold  "></Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity className="" onPress={()=>{navigation.navigate("Medi3")}}>
            <View className="border bg-gray-50 h-40 w-96  rounded-2xl shadow-2xl pt-4  flex-row items-center">
            <Image source={{uri:"https://images.squarespace-cdn.com/content/v1/577475d22994ca360593faeb/1565990305285-GDKW4VP9E17IX9GO755H/chakra+black.jpg?format=1500w"}} className="h-40 rounded  w-40"/>
            <View className=" pl-8">
            <Text className="text-2xl font-semibold   ">Mind fullness </Text>
                <Text className="text-2xl font-semibold  ">Meditation</Text>
                <Text className="text-2xl font-semibold  "></Text>
                </View>
            </View>
            </TouchableOpacity>
            <View className="w-12"></View>

            

</ScrollView>


<TouchableOpacity className="pl-14 pr-12 pt-4  " onPress={()=>{
  navigation.navigate("chat")
}}>

<View className="bg-[#BFEAF5] rounded-l-full rounded-r-full h-12">
  <Text className="text-xl font-medium pl-4 pt-2 ">Start a conversation with me...</Text>

</View>
<Image source={{uri:"https://cdn-icons-png.flaticon.com/512/6819/6819661.png"}} className="h-12 w-12 rounded-full border border-2 absolute right-3 top-10"/>

</TouchableOpacity>



<View className="pt-4 px-4">
  <Text className="text-2xl font-bold pb-2">Calendar</Text>
<Calendar
        markingType={ 'custom' }
        markedDates={{
            "2023-01-17":{customStyles:{container:{backgroundColor:'black',elevation:2},text:{color:'white'}}},
            "2023-01-12":{customStyles:{container:{backgroundColor:'black',elevation:2},text:{color:'white'}}}
        }}


        onDayPress={
            ()=>{
                
                navigation.navigate("Calendar",{Date})
            }
        }
      />
</View>


<View>
  <Text className="pt-4 pl-4 text-2xl font-bold">Water Intake</Text>
  <View className="w-full h-32 px-4 pt-2 rounded-2xl">
  <TouchableOpacity className="" onPress={()=>{navigation.navigate("water")}}>
            <View className="border bg-gray-50 h-40 w-96  rounded-2xl shadow-2xl pt-4  flex-row items-center">
            <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/6774/6774894.png"}} className="h-36 rounded  w-36"/>
            <View className=" pl-8 ">
            <Text className="text-2xl font-semibold   ">Record Your </Text>
                <Text className="text-2xl font-semibold  ">Water Intake</Text>
                <Text className="text-2xl font-semibold  "></Text>
                </View>
            </View>
            </TouchableOpacity>

  </View>
</View>

<Text className=" pl-4 text-2xl pt-14 font-bold">Explore Recipes</Text>
<View>
<View className="w-full h-32 px-4 pt-2 rounded-2xl">
  <TouchableOpacity className="" onPress={()=>{navigation.navigate("Recipy")}}>
            <View className="border bg-gray-50 h-40 w-96  rounded-2xl shadow-2xl pt-4  flex-row items-center">
            <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/1830/1830878.png"}} className="h-36 rounded  w-36"/>
            <View className=" pl-8 ">
            <Text className="text-2xl font-semibold   ">Try something </Text>
                <Text className="text-2xl font-semibold  ">Different</Text>
                <Text className="text-2xl font-semibold  "></Text>
                </View>
            </View>
            </TouchableOpacity>

  </View>

</View>



<Text className=" pl-4 text-2xl pt-14 font-bold">Your Achievements</Text>
<View>
<View className="w-full h-32 px-4 pt-2 rounded-2xl">
  <TouchableOpacity className="" >
            <View className="border bg-gray-50 h-40 w-96  rounded-2xl shadow-2xl pt-4  flex-row items-center">
            <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/6639/6639680.png"}} className="h-36 rounded  w-36"/>
            <View className=" pl-8 ">
            <Text className="text-2xl font-semibold   ">Train Regularly</Text>
                <Text className="text-2xl font-semibold  ">and Win</Text>
                <Text className="text-2xl font-semibold  "></Text>
                </View>
            </View>
            </TouchableOpacity>

  </View>

</View>



<Text className=" pl-4 text-2xl pt-14 font-bold">Transformations</Text>
<View>
<ScrollView horizontal={true} className="pl-4 pt-2 gap-x-5 pr-4">
            <TouchableOpacity className="" >
            <View className="border pt-3   bg-gray-50 h-80 w-60  rounded-2xl shadow-2xl    items-center">
            <Image
            className="h-52 w-52 rounded-2xl"
            source={{uri:"https://i.pinimg.com/564x/92/0e/ea/920eea58dbd50710e7f5b3c9485dd908.jpg"}}/>
            <Text className="text-xl pt-1">Lost 20 kgs in 8 months</Text>
            <Text className="text-gray-500 text-sm">"I am suprised with the results. Thanks to FIT HIIT" -John</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity className="" >
            <View className="border pt-3   bg-gray-50 h-80 w-60  rounded-2xl shadow-2xl    items-center">
            <Image
            className="h-52 w-52 rounded-2xl"
            source={{uri:"https://i.pinimg.com/564x/63/53/13/6353135b1a7ff32213aa7d60378e738a.jpg"}}/>
            <Text className="text-xl pt-1">Lost 8 kgs in 2 months</Text>
            <Text className="text-gray-500 text-sm">"Installing this app is the best decision I ever made" -Clarke</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity className="" >
            <View className="border pt-3   bg-gray-50 h-80 w-60  rounded-2xl shadow-2xl    items-center">
            <Image
            className="h-52 w-52 rounded-2xl"
            source={{uri:"https://i.pinimg.com/564x/cc/e3/1f/cce31f03a4d7d51a7bac34657cbad662.jpg"}}/>
            <Text className="text-xl pt-1">Lost 12 kgs in 6 months</Text>
            <Text className="text-gray-500 text-sm">"I am amazed with the journey. Thanks  FIT HIIT" -Jasper</Text>
            </View>
            </TouchableOpacity>
            <View className="w-12"></View>

            

</ScrollView>

</View>


<View className="h-32">

</View>


   



</ScrollView>
<View>
  
</View>

<View className="absolute bottom-0 left-0 space-x-12  bg-white w-full pt-2 pl-12  flex-row  h-20">
    
    <TouchableOpacity className="flex items-center" >
      <HomeIcon size={36} color={"#0A2647"}/>
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex items-center" onPress={()=>{navigation.navigate("Progress")}}>
      <CalendarIcon size={36} color={"#0A2647"}/>
      <Text>Progress</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex items-center" onPress={()=>{navigation.navigate("Workouts")}}>
      <PlayIcon size={36} color={"#0A2647"}/>
      <Text>Workout</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
      navigation.navigate("User Details");
    }} className="flex items-center">
      <UserIcon size={36} color={"#0A2647"}/>
      <Text>Profile</Text>
    </TouchableOpacity>
    
</View>




</View>

  )
}

export default HomeScreen