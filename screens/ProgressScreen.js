import { View, Text, Image, ScrollView,RefreshControl } from 'react-native'
import React, { useLayoutEffect }  from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from "axios";
import { useEffect , useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { CakeIcon, CalendarIcon, FireIcon, FlagIcon, HomeIcon, MagnifyingGlassIcon, PlayIcon, UserIcon } from 'react-native-heroicons/mini';
import { TextInput } from 'react-native';



    
let Searchtext
let keys

const ProgressScreen = () => {
    const [Searchtext, setSearchText] = useState('')

    const [FoodItems1 , setFoodItems1] = useState();
    const [FoodName1 , setFoodName1] = useState();
    const [keys , setkeys] = useState('');

    const [FoodItems2 , setFoodItems2] = useState();
    const [FoodName2, setFoodName2] = useState();

    const [FoodItems3 , setFoodItems3] = useState();
    const [FoodName3 , setFoodName3] = useState();

    const [calorie , setcalorie] = useState();
    const [active , setactive]= useState(0);

    


    


    

    const navigation = useNavigation();
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    
    )

    useEffect( () => {
        axios.request(options).then(function (response) {

            console.log(response.data)
            console.log(response.data.Recipes[0].dataPoints[7].value)
            setFoodItems1(Math.floor(Math.random() * 500) + 300)
            setFoodItems2(Math.floor(Math.random() * 500) + 300)
            setFoodItems3(Math.floor(Math.random() * 500) + 300)
            setFoodName1(response.data.Recipes[0].name)
            setFoodName2(response.data.Recipes[1].name)
            setFoodName3(response.data.Recipes[2].name)

            

        }).catch(function (error) {
            console.error(error);
        });
    },[])

    console.log(FoodItems3)
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);




console.log(keys)
const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/site/search',
  params: {query: keys},
  headers: {
    'X-RapidAPI-Key': "b81d6fde17msh7ee913d0805b21dp18f8a5jsn8722ea984fcb",
    'X-RapidAPI-Host': "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
  }
};
    
  return (
        <SafeAreaView>
      <Text className="text-center pb-2 text-2xl">FIT HIIT</Text>
        <View className="px-6 flex-row">
          <View className="flex-row  items-center space-x-3">
      <TextInput 
        value={Searchtext}
        onChangeText={(Searchtext) => {
            setSearchText(Searchtext)
          }}
        placeholder='Search for a food' className="text-2xl pl-2 bg-gray-200 border-solid border-2 border-[#0A2647] w-80  h-10 rounded-xl"  />
        <TouchableOpacity className="" onPress={()=>{
        setkeys(Searchtext)
        }}>
          <MagnifyingGlassIcon size={40} color={"#0A2647"}/>
        </TouchableOpacity>
        </View>
        </View>

        <View className="pt-3 flex items-center">
<View className="border-2 rounded-xl border-[#0A2647]  h-52 w-96 ">
  <View>


    <Text className="font-bold text-center pt-2 text-xl"> Calories Intake</Text>
    <View className='flex-row '>
        <View className=' pt-2 pl-8 h-36 w-36'>
            <View className=" rounded-full h-36 border-8 items-center  border-[#144272] w-36">
              <Text className='text-3xl font-bold pt-10'>{active}</Text>
              <Text className="font-semibold">Consumed</Text>
            </View>
        </View>
        <View className=" absolute gap-y-2 right-12 pt-4 h-36 w-28  ">
          <View className="flex-row items-center gap-x-2">
            <FlagIcon color={"#0A2647" }/>
            <View>
            <Text className="text-sm ">Base Goal</Text>
            <Text className="text-md font-bold">3000</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-x-2">
            <CakeIcon color={"#0A2647" }/>
            <View>
            <Text className="text-sm ">Food</Text>
            <Text className="text-md font-bold">{active}</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-x-2">
            <FireIcon color={"#0A2647" }/>
            <View>
            <Text className="text-sm ">Exercise</Text>
            <Text className="text-md font-bold">0</Text>
            </View>
          </View>
        </View>
    </View>
</View>
</View>
</View>


<ScrollView

        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }className="pt-3 gap-y-3 px-4">
  <Text className="text-2xl pl-2 font-bold">Select food items (100 gms)</Text>
  <TouchableOpacity className=" bg-[#BFEAF5] py-3 rounded-xl gap-y-2" onPress={()=>{
    setactive(active+FoodItems1)
    
  }}>
  <Text className="text-xl font-bold pl-6">{FoodName1}</Text>
    <View className="flex-row items-center pl-6">
    <Text className="text-xl  font-bold  pr-2">{FoodItems1}</Text>
    <FireIcon size={35} color={"#0A2647"}/>
    </View>
  </TouchableOpacity>
  <TouchableOpacity className=" bg-[#BFEAF5] py-3 rounded-xl gap-y-2"  onPress={()=>{
    setactive(active+FoodItems2)
    
  }}>
    <Text className="text-xl font-bold pl-6">{FoodName2}</Text>
    <View className="flex-row items-center pl-6">
    <Text className="text-xl  font-bold  pr-2">{FoodItems2}</Text>
    <FireIcon size={35} color={"#0A2647"}/>
    </View>
  </TouchableOpacity>
  <TouchableOpacity className=" bg-[#BFEAF5] py-3 rounded-xl gap-y-2"  onPress={()=>{
    setactive(active+FoodItems3)
    
  }}>
    <Text className="text-xl font-bold pl-6">{FoodName3}</Text>
    <View className="flex-row items-center pl-6">
    <Text className="text-xl  font-bold  pr-2">{FoodItems3}</Text>
    <FireIcon size={35} color={"#0A2647"}/>
    </View>
  </TouchableOpacity>
<View className="h-28"></View>
</ScrollView>






      <View className="absolute bottom-0  space-x-12  bg-white w-full pt-2 pl-12  flex-row  h-20">
    <TouchableOpacity className="flex items-center" onPress={()=>{navigation.navigate("Home")}} >
      <HomeIcon size={36} color={"#0A2647"}/>
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex items-center" onPress={()=>{navigation.navigate("Progress")}}>
      <CalendarIcon size={36} color={"#0A2647"}/>
      <Text>Progress</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex items-center" onPress={()=>{navigation.navigate("Workouts")}}>
      <PlayIcon size={36} color={"#0A2647"}/>
      <Text>Workout</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex items-center"onPress={()=>{navigation.navigate("User Details")}}>
      <UserIcon size={36} color={"#0A2647"}/>
      <Text>Profile</Text>
    </TouchableOpacity>
    
</View>
      </SafeAreaView>
  )
}





export default ProgressScreen