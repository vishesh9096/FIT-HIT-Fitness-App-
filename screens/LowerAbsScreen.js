import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const LowerAbsScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
      <ScrollView>
      <View>
        <Image source={{ uri: "https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2017/04/The-Hard-Truth-About-Your-Lower-Ab-Workout.jpg"}}
        className="h-40"/>
        <Text className="absolute text-3xl text-white font-bold pt-12 mx-10 mt-6">GET LOWER ABS</Text>
      </View>

    <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Lying Lower')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://i1.wp.com/womensbest.blog/wp-content/uploads/2019/11/straight-leg-raises-2.jpg?w=1000&ssl=1"}}
         className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">Lying lower Abs</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Side Plank')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://st.depositphotos.com/3616161/57389/v/600/depositphotos_573891056-stock-video-flutter-kicks-exercise-female-workout.jpg"}}
         className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">Scissor Kicks</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Reverse Crunches')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://cdn.shopify.com/s/files/1/0982/0194/files/5bestworkouttodowithwaisttrainers_4.jpg?v=1642018450"}}
         className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">Heel Touches</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Lying Lower')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://i1.wp.com/womensbest.blog/wp-content/uploads/2019/11/straight-leg-raises-2.jpg?w=1000&ssl=1"}}
         className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">Lying lower Abs</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Side Plank')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://st.depositphotos.com/3616161/57389/v/600/depositphotos_573891056-stock-video-flutter-kicks-exercise-female-workout.jpg"}}
         className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">Scissor Kicks</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="pt-4 px-2" onPress = {() => navigation.navigate('Reverse Crunches')}>
      <View className=" pt-4 h-32 bg-[#0A2647] rounded-lg flex-row">
        <Image source={{uri: "https://cdn.shopify.com/s/files/1/0982/0194/files/5bestworkouttodowithwaisttrainers_4.jpg?v=1642018450"}}
         className="h-20 w-20 mx-3 mt-2 rounded-sm"/>
        <Text className="px-8 pt-8 text-lg font-extrabold text-white">Heel Touches</Text>
      </View>
      </TouchableOpacity>

      </ScrollView>
  )
}

export default LowerAbsScreen