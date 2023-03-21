import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const CardioScreen = ({}) => {
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
        <Text className="font-bold text-gray-700 text-4xl">Cardio Workout</Text>
        </View>
        </View>

            {/* {Exercise Component Video 1} */}
   <View >
   
    <TouchableOpacity className="relative mx-4" >
    <Image source={{ uri:"https://images.herzindagi.info/image/2022/May/fun-cardio-workout.jpg"}}
            className="h-40 w-400 rounded-xl"
        />
        <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">Quick Cardio</Text>
    </TouchableOpacity>
    </View>


{/* {Exercise component video 2} */}
    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://cdn.shopify.com/s/files/1/0044/7266/8275/articles/Warm_up_routine_1000x.jpg?v=1599032855"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">Cardio & Core</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://www.muscleandfitness.com/wp-content/uploads/2019/09/Shirtless-Man-Beard-Battle-Ropes-Smokey-Gym.jpg?quality=86&strip=all"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">ADVANCE CARDIO WORKOUT</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/workout/power-hour-cardio.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">TOTAL BODY CARDIO</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://static.toiimg.com/photo/87138920.cms"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">STRENGTH CARDIO</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://barbend.com/wp-content/uploads/2022/03/The-Best-HIIT-Workouts-for-Any-Fitness-Goal.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">HIIT CARDIO</Text>
    </TouchableOpacity>
    </View>

    </ScrollView>
</SafeAreaView>
    );
};

export default CardioScreen;