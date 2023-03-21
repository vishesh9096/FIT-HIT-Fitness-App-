import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const ToningSideAbsScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
      <ScrollView>
      <View>
        <Image source={{ uri: "https://www.shutterstock.com/image-photo/side-view-muscular-incognito-woman-260nw-1669274986.jpg"}}
        className="h-40"/>
        <Text className="absolute text-3xl text-white font-bold pt-12 mx-20 mt-4">Tone Side Abs</Text>
      </View>

    <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Standing Side Bends')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://www.shutterstock.com/image-vector/woman-doing-standing-side-bend-260nw-2090437066.jpg"}}
        className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">Standing Side Bends</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Side Plank')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://media.istockphoto.com/id/578103862/vector/woman-doing-a-side-plank.jpg?s=612x612&w=0&k=20&c=m2ZR0_LswLTcgwp9_YW2EJ0New2LwNUkya5I-eP4yto="}}
        className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className = "px-8 pt-8 text-lg font-extrabold text-white">Side Plank with Hip lift</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Reverse Crunches')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://ak.picdn.net/shutterstock/videos/1090707885/thumb/1.jpg?ip=x480"}}
        className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className = "px-8 pt-8 text-lg font-extrabold text-white">Reverse Crunches</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Standing Side Bends')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://www.shutterstock.com/image-vector/woman-doing-standing-side-bend-260nw-2090437066.jpg"}}
        className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">Standing Side Bends</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Side Plank')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://media.istockphoto.com/id/578103862/vector/woman-doing-a-side-plank.jpg?s=612x612&w=0&k=20&c=m2ZR0_LswLTcgwp9_YW2EJ0New2LwNUkya5I-eP4yto="}}
        className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className = "px-8 pt-8 text-lg font-extrabold text-white">Side Plank with Hip lift</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Reverse Crunches')}>
      <View className="pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://ak.picdn.net/shutterstock/videos/1090707885/thumb/1.jpg?ip=x480"}}
        className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className = "px-8 pt-8 text-lg font-extrabold text-white">Reverse Crunches</Text>
      </View>
      </TouchableOpacity>

      </ScrollView>
  )
}

export default ToningSideAbsScreen