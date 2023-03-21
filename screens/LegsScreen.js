import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const LegsScreen = ({ imgUrl, title}) => {
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
        <Text className="font-bold text-gray-700 text-4xl">Legs Workout</Text>
        </View>
        </View>

            {/* {Exercise Component Video 1} */}
   <View >
   
    <TouchableOpacity className="relative mx-4" >
    <Image source={{ uri:"https://i2-prod.dailystar.co.uk/incoming/article19308163.ece/ALTERNATES/s615b/0_walking-for-weight-loss-fat-burning-workout-1632162"}}
            className="h-40 w-400 rounded-xl"
        />
        <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">FAT BURNING WALK</Text>
    </TouchableOpacity>
    </View>


{/* {Exercise component video 2} */}
    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/thumbs/37214/leg-day.jpg?crop=1xw:0.6666666666666666xh;center,top&resize=640:*"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">GREATER LEG DEFINITION</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://i.ytimg.com/vi/qFkYbXsKRfI/maxresdefault.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">QUADS</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://www.shutterstock.com/image-photo/attractive-man-woman-athletes-performing-260nw-249270781.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">LYING SUMMER LEGS</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://www.bodybuilding.com/fun/images/2015/8-ways-to-build-bigger-and-stronger-hamstrings-cellucor-graphic-5-700xh.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">HAMSTRINGS</Text>
    </TouchableOpacity>
    </View>

    <View claaaName="pt-200">
    <TouchableOpacity className="relative pt-3 mx-4" >
    <Image source={{ uri: "https://www.healthifyme.com/blog/wp-content/uploads/2021/05/Cover-image-4.jpg"}}
            className="h-40 w-400 rounded-xl border-5"
        />
         <Text className="absolute bottom-1 ml-2 text-white font-extrabold text-3xl">TONED LEGS YOGA</Text>
    </TouchableOpacity>
    </View>

    </ScrollView>
</SafeAreaView>
    );
};

export default LegsScreen