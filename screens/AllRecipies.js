import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const AllReciepes = () => {
    const navigation = useNavigation();
  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
  })
  
  )
  return (
    <SafeAreaView>
        <Text className="font-bold text-gray-700 text-center text-4xl">Explore Recipes</Text>
    <ScrollView>

        <View className="px-3 pt-3">
            <Text className="text-xl font-bold ">Pre-Workout</Text>
        <ScrollView horizontal={true} className="pt-2 space-x-3 ">

            <TouchableOpacity 
            onPress={()=>{
                navigation.navigate("Oat")
            }}
            className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://i0.wp.com/ahintofrosemary.com/wp-content/uploads/2017/06/DSC_0048.jpg?fit=3479%2C2329&ssl=1"}}/>
                <Text className="text-lg pl-1 font-semibold">Oatmeal and Fruit</Text>
                <Text className="text-md pl-1 pt-2">110 cal</Text>
                </View>
            </TouchableOpacity>




            <TouchableOpacity
            onPress={()=>{navigation.navigate("Mango")}}
            className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://www.funfoodfrolic.com/wp-content/uploads/2020/05/Mango-Smoothie-Thumbnail.jpg"}}/>
                <Text className="text-lg pl-1 font-semibold">Mango Smoothie</Text>
                <Text className="text-md pl-1 pt-2">237 cal</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://www.milkandhoneynutrition.com/wp-content/uploads/2020/08/Low-sugar-peanut-butter-fruit-dip-8.jpg"}}/>
                <Text className="text-lg pl-1 font-semibold">Fruits</Text>
                <Text className="text-md pl-1 pt-2">194 cal</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
        </View>



        <View className="px-3 pt-3">
            <Text className="text-xl font-bold ">Post-Workout</Text>
        <ScrollView horizontal={true} className="pt-2 space-x-3 ">

            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Greek-Grilled-Chicken-Pitas_EXPS_MTCBBZ18_86339_B02_28_8b.jpg"}}/>
                <Text className="text-lg pl-1 font-semibold">Chicken Pita</Text>
                <Text className="text-md pl-1 pt-2">477 cal</Text>
                </View>
            </TouchableOpacity>




            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://www.licious.in/blog/wp-content/uploads/2022/11/shutterstock_1476312209.jpg"}}/>
                <Text className="text-lg pl-1 font-semibold">Sandwich</Text>
                <Text className="text-md pl-1 pt-2">377 cal</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Karthika_Gopalakrishnan/Spinach_Mushroom_Scrambled_Eggs.jpg"}}/>
                <Text className="text-lg pl-1 font-semibold">Spinach Scramble</Text>
                <Text className="text-md pl-1 pt-2">259 cal</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
        </View>




        <View className="px-3 pt-3">
            <Text className="text-xl font-bold ">High Protein</Text>
        <ScrollView horizontal={true} className="pt-2 space-x-3 ">

            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/04/paneer-salad.jpg"}}/>
                <Text className="text-lg pl-1 font-semibold">Paneer Salad</Text>
                <Text className="text-md pl-1 pt-2">288 cal</Text>
                </View>
            </TouchableOpacity>




            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://media.self.com/photos/5a37440a83ab3f54feacf877/master/w_870,h_580,c_limit/cumin-roasted-chickpea-chicken-2.jpg"}}/>
                <Text className="text-lg pl-1 font-semibold">Chicken</Text>
                <Text className="text-md pl-1 pt-2">349 cal</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://i0.wp.com/ahintofrosemary.com/wp-content/uploads/2017/06/DSC_0048.jpg?fit=3479%2C2329&ssl=1"}}/>
                <Text className="text-lg pl-1 font-semibold">Oatmeal and Fruit</Text>
                <Text className="text-md pl-1 pt-2">110 cal</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
        </View>






        



        
    </ScrollView>
    </SafeAreaView>
  )
}

export default AllReciepes