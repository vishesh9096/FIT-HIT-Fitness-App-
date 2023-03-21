import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const BootyScreen = ({ imgUrl, title}) => {
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
        <Text className="font-bold text-gray-700 text-4xl">Booty Workout</Text>
        </View>
        </View>
            {/* {Exercise Component Video 1} */}
   <View >
   
    <TouchableOpacity className="relative mx-4" onPress = {() => navigation.navigate('Toned Glutes')} >
    <Image source={{ uri:"https://cdn.mos.cms.futurecdn.net/7j8ComfEUvbRadWWgpgBAZ-320-80.jpeg"}}
            className="h-40 w-400 rounded-xl"
        />
        <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">TONED GLUTES</Text>
    </TouchableOpacity>
    </View>


{/* {Exercise component video 2} */}
    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXAo30rUNOWY__benCHUjOX0SHqzfzHkRQxQ&usqp=CAU"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">SUMMER BUTT</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/37/gettyimages-605772224.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">BEGINNER BUTT</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://i.etsystatic.com/38594548/c/1284/1020/0/263/il/a383bc/4420302487/il_340x270.4420302487_ljcp.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">BOOTY SHAPER</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://media.self.com/photos/5dd2f7580e115400090e89be/2:1/w_2580,c_limit/190916_SELF_1101.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">TONE & SHAPE</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "http://static.stuff.co.nz/files/Pose1Upward.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">YOGA FOR BOOTY</Text>
    </TouchableOpacity>
    </View>

    </ScrollView>
</SafeAreaView>
    );
};

export default BootyScreen