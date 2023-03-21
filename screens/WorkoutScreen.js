import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowRightIcon, CakeIcon, FireIcon, FlagIcon } from 'react-native-heroicons/mini';
import { TextInput } from 'react-native';

const WorkoutScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [val,setval] = useState(0);
  const [text, setText] = useState();

  return (
    <SafeAreaView classname="bg-white">
      <ScrollView>
      <View className="flex pt-5 items-center mx-4">
      <View>
      <Text className="font-bold text-gray-700  text-4xl">Workouts</Text>
      </View>
      </View>

     
{/* calorie calculator*/}


<View className="pt-3 flex items-center">
<View className="border-2 rounded-xl border-[#0A2647] bg-white h-52 w-96 ">
  <View>


    <Text className="font-bold text-center pt-2 text-xl"> Calories Burned</Text>
    
    <View className='flex-row '>
        <View className=' pt-2 pl-8 h-36 w-36'>
            <View className=" rounded-full h-36 border-8 items-center  border-[#144272] w-36">
              <Text className='text-3xl font-bold pt-10'>{val}</Text>
              <Text className="font-semibold">Burned</Text>
            </View>
        </View>
        <View className=" absolute gap-y-2 right-12 pt-4 h-36 w-28  ">
          <View className="flex-row items-center gap-x-2">
            <FlagIcon color={"#0A2647" }/>
            <View>
            <Text className="text-sm ">Base Goal</Text>
            <Text className="text-md font-bold">500</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-x-2">
            <ArrowRightIcon color={"#0A2647" }/>
            <View>
            <Text className="text-sm ">Walking</Text>
            <Text className="text-md font-bold">28</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-x-2">
            <FireIcon color={"#0A2647" }/>
            <View>
            <Text className="text-sm ">Other</Text>
            <Text className="text-md font-bold">42</Text>
            </View>
          </View>
        </View>
        
    </View>
    
</View>
</View>
</View>
<View className="pt-2 px-5 ">
      <View className="bg-white rounded-2xl">
<View className="flex-row space-x-3 pb-3 pl-2 items-baseline  pt-4">
      <Text className="text-xl  font-bold">Enter Duration of workout (mins)</Text>
      <TextInput 
        value={text}
        onChangeText={(text) => {
            setText(text)
          }}
             className="text-2xl font-bold  border-b-2  border-black  w-10  " keyboardType='number-pad' maxLength={3}/>

</View>
<View className="flex pb-4 items-center">
<TouchableOpacity 
onPress={() =>
      {
            setval(val+text*6)
      }}
className="w-32  h-10 bg-[#BFEAF5]  rounded-l-full rounded-r-full ">
      <Text className="text-center pt-1  text-xl font-bold">Calculate</Text>
</TouchableOpacity>
</View>
</View>
</View>
<ScrollView>
{/* {TARGET AREA} */}
      <View className="flex-row pt-2 pl-4">
      <View>
      <Text className="font-bold pt-3 text-xl"> Target Area </Text>
      </View>
      </View>

{/* {TARGET AREA COMPONENTS} */}
<View className='flex items-center'>
<View className="flex-row  gap-x-4">
      <TouchableOpacity onPress={() => navigation.navigate('Abs')}>
      <View className="h-45 w-45 pt-4 border-spacing-2 border-y-cyan-700 ">
          {/* {ProVideos} */}
          <Image source ={{ uri:"https://img.mensxp.com/media/content/2018/Nov/the-right-diet-for-men-in-order-to-get-abs-1400x653-1543405879.jpg?w=820&h=540&cc=1"}} className="h-40 w-40 rounded-xl" />
          <Text className = "text-xl font-light text-center "> Abs </Text>
    </View>
    </TouchableOpacity> 

    

    <TouchableOpacity onPress={() => navigation.navigate('Booty')}>
    <View className="h-45 w-45 pt-4 ">
          {/* {ProVideos} */}
          <Image source ={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3sNYipv2vPP4O444i59ossnpEAgNlTEqtA&usqp=CAU"}}className = "h-40 w-40 rounded-xl" />
          <Text className = "text-xl font-light text-center  "> Booty </Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
    </ScrollView>


    <View className='flex items-center'>
<View className="flex-row  gap-x-4">
      <TouchableOpacity onPress={() => navigation.navigate('Legs')}>
      <View className="h-45 w-45 pt-4 ">
          {/* {ProVideos} */}
          <Image source ={{ uri:"http://cdn.shopify.com/s/files/1/1497/9682/articles/1_09671e69-0c95-48ad-a928-aa301fb6e400.jpg?v=1647700121"}} className="h-40 w-40 rounded-xl" />
          <Text className = "text-xl font-light text-center "> Legs </Text>
    </View>
    </TouchableOpacity> 

    

    <TouchableOpacity onPress={() => navigation.navigate('Arms')}>
    <View className="h-45 w-45 pt-4 ">
          {/* {ProVideos} */}
          <Image source ={{uri: "https://skinnyms.com/wp-content/uploads/2020/12/shutterstock_1677271378-e1607210619556.jpg"}}className = "h-40 w-40 rounded-xl" />
          <Text className = "text-xl font-light text-center"> Arms </Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>

    <View className='flex items-center'>
<View className="flex-row  gap-x-4">
      <TouchableOpacity onPress={() => navigation.navigate('Cardio')}>
      <View className="h-45 w-45 pt-4 ">
          {/* {ProVideos} */}
          <Image source ={{ uri:"https://thumbs.dreamstime.com/b/asian-friends-treadmills-run-gym-asian-women-friends-running-exercise-treadmills-sport-fitness-gym-copy-space-183866377.jpg"}} className="h-40 w-40 rounded-xl" />
          <Text className = "text-xl font-light text-center "> Cardio </Text>
    </View>
    </TouchableOpacity> 

    

    <TouchableOpacity onPress={() => navigation.navigate('Full Body')}>
    <View className="h-45 w-45 pt-4 ">
          {/* {ProVideos} */}
          <Image source ={{uri: "https://hips.hearstapps.com/hmg-prod/images/exercise-with-weights-royalty-free-image-587204700-1547584208.jpg"}}className = "h-40 w-40 rounded-xl" />
          <Text className = "text-xl font-light text-center  "> Full Body </Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>

    <View className="flex-row pt-10 mx-4">
      <View>
      <Text className="font-bold pt-3 text-xl"> Latest in Pro </Text>
      </View>
      </View>


    <ScrollView contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,}}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
          <View>
            {/* {ProVideos} */}
            <TouchableOpacity>
            <Image source = {{ uri: "https://cdn.shopify.com/s/files/1/2705/9430/files/yoga_inverted_leg_pose_480x480.jpg?v=1603913628"}} className="h-40 w-80 mx-2 rounded-lg"/>
            <Text className="absolute bottom px-2 pt-2 left-2 text-white font-extrabold text-2xl">PERIOD PAIN RELIEF</Text>
            </TouchableOpacity>
            </View>

            <View>
            {/* {ProVideos} */}
            <TouchableOpacity>
            <Image source = {{ uri: "https://post.greatist.com/wp-content/uploads/sites/2/2019/05/HIIT20workouts_0.jpg"}} className="h-40 w-80 mx-2 rounded-lg"/>
            <Text className="absolute bottom px-2 pt-2 left-2 text-white font-extrabold text-2xl">HIIT WORKOUT</Text>
            </TouchableOpacity>
            </View>

            <View>
            {/* {ProVideos} */}
            <TouchableOpacity>
            <Image source = {{ uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-using-medicine-ball-at-cross-training-gym-royalty-free-image-1617118485.?crop=0.669xw:1.00xh;0.0505xw,0&resize=640:*"}} className="h-40 w-80 mx-2 rounded-lg"/>
            <Text className="absolute bottom px-2 pt-2 left-2 text-white font-extrabold text-2xl">GYM CARDIO WORKOUT</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>

    
    </ScrollView>
    </SafeAreaView>
  );
};

export default WorkoutScreen;