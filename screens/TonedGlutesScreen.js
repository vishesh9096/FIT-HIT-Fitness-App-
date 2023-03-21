import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const TonedGlutesScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
      <ScrollView>
      <View>
        <Image source={{ uri: "https://cdn.mos.cms.futurecdn.net/7j8ComfEUvbRadWWgpgBAZ-320-80.jpeg"}}
        className="h-40"/>
        <Text className="absolute text-3xl text-white font-bold pt-12 mx-20 mt-4">Toned Glutes</Text>
      </View>

    <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('BarBell Glute')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://t3.ftcdn.net/jpg/04/89/18/52/360_F_489185242_ySRSEkqMmYh6VICl6hvg0O99TCylHgKq.jpg"}}
        className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">BarBell Glute Bridge</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Walking Lunge')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4Vp37YtXxxsPUEEejBX36Tq_iDcx-84pyWCUI13xjbDwQVPBotPUo34LmUmEP-yw7TM&usqp=CAU"}}
        className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">Walking Lunge</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Donkey Kicks')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://previews.123rf.com/images/topvectors/topvectors2006/topvectors200600188/148270205-woman-doing-donkey-kicks-exercise-girl-doing-sports-firming-her-body-buttock-workout-vector-illustra.jpg"}}
        className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">Donkey Kicks</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('BarBell Glute')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://t3.ftcdn.net/jpg/04/89/18/52/360_F_489185242_ySRSEkqMmYh6VICl6hvg0O99TCylHgKq.jpg"}}
        className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">BarBell Glute Bridge</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Walking Lunge')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4Vp37YtXxxsPUEEejBX36Tq_iDcx-84pyWCUI13xjbDwQVPBotPUo34LmUmEP-yw7TM&usqp=CAU"}}
        className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">Walking Lunge</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Donkey Kicks')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://previews.123rf.com/images/topvectors/topvectors2006/topvectors200600188/148270205-woman-doing-donkey-kicks-exercise-girl-doing-sports-firming-her-body-buttock-workout-vector-illustra.jpg"}}
        className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">Donkey Kicks</Text>
      </View>
      </TouchableOpacity>


      </ScrollView>
  )
}

export default TonedGlutesScreen