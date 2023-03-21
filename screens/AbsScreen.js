import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const AbsScreen = ({ imgUrl, title}) => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
  
    return (
      <SafeAreaView classname="bg-white">
        <ScrollView>
        <View className="flex-row pt-6 mx-4">
        <View>
        <Text className="font-bold text-gray-700 text-4xl">Abs Workout</Text>
        </View>
        </View>

            {/* {Exercise Component Video 1} */}
   <View >
   
    <TouchableOpacity className="relative mx-4" onPress = {() => navigation.navigate('Toning side abs')} >
    <Image source={{ uri:"https://www.shutterstock.com/image-photo/side-view-muscular-incognito-woman-260nw-1669274986.jpg"}}
            className="h-40 w-400 rounded-xl"
        />
        <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">TONING SIDE ABS</Text>
    </TouchableOpacity>
    </View>


{/* {Exercise component video 2} */}
    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" onPress = {() => navigation.navigate('Lower abs')}>
    <Image source={{ uri: "https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2017/04/The-Hard-Truth-About-Your-Lower-Ab-Workout.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">GET LOWER ABS</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8aIGFRhExb-hYT94-E6CpIIjfYsg8az3-A&usqp=CAU"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">LOSE BELLY FAT</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://media.self.com/photos/58af37c3b4e983785e9c1e75/4:3/w_320%2Cc_limit/abs-workout-trainers.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">STARTER ABS</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8aIGFRhExb-hYT94-E6CpIIjfYsg8az3-A&usqp=CAU"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">AB SHRED</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://www.valerieorsoni.com/en/wp-content/uploads/2022/03/valerie-orsoni-flat-stomach.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">FLAT ABS</Text>
    </TouchableOpacity>
    </View>

    </ScrollView>
</SafeAreaView>
    );
};

export default AbsScreen