import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const FullBodyScreen = ({ imgUrl, title}) => {
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
        <Text className="font-bold text-gray-700 text-4xl">Full Body Workout</Text>
        </View>
        </View>

            {/* {Exercise Component Video 1} */}
   <View >
   
    <TouchableOpacity className="relative mx-4" >
    <Image source={{ uri:"https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn370/wp-content/uploads/2020/04/thumbnail_1200x800-5.jpg"}}
            className="h-40 w-400 rounded-xl"
        />
        <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">BEGINNERS WORKOUT</Text>
    </TouchableOpacity>
    </View>


{/* {Exercise component video 2} */}
    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://cdn.mos.cms.futurecdn.net/ysEdiVCRv8ZuuLbpt2H4WK-1200-80.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">AEROBICS</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://www.olivaclinic.com/wp-content/uploads/2021/06/weight-loss-workout-plan-for-beginners-1.png"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">7 DAY PLAN</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://www.bodybuilding.com/images/2020/january/full-body-workout-for-beginners-square-1200x1200-b.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">ULTIMATE FULL BODY</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://thefitnessphantom.com/wp-content/uploads/2022/01/4-Day-Full-Body-Workout-Plan.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">GYM WORKOUT</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://images.healthshots.com/healthshots/en/uploads/2022/05/11184715/Yoga-for-weight-loss-1600x900.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">YOGA</Text>
    </TouchableOpacity>
    </View>

    </ScrollView>
</SafeAreaView>
    );
};

export default FullBodyScreen