import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth, { AuthProvider } from './hooks/useAuth';
import ChatScreen from './screens/ChatScreen';
import ProgramScreen from './screens/ProgramScreen';
import Data1Screen from './screens/Data1Screen';
import Data2Screen from './screens/Data2Screen';
import Data3Screen from './screens/Data3Screen';
import Data4Screen from './screens/Data4Screen';
import Data5Screen from './screens/Data5Screen';
import AnimationScreen from './screens/AnimationScreen';
import ProgressScreen from './screens/ProgressScreen';
import app from './chatbot/app'
import WorkoutScreen from "./screens/WorkoutScreen";
import ExerciseScreen from "./screens/AbsScreen";
import BootyScreen from "./screens/BootyScreen";
import LegsScreen from "./screens/LegsScreen";
import ArmsScreen from "./screens/ArmsScreen";
import CardioScreen from "./screens/CardioScreen";
import FullBodyScreen from "./screens/FullBodyScreen";
import ToningSideAbsScreen from "./screens/ToningSideAbsScreen";
import SideBendScreen from "./screens/SideBendScreen";
import SidePlankScreen from "./screens/SidePlankScreen";
import ReverseCrunchesScreen from "./screens/ReverseCrunchesScreen";
import LowerAbsScreen from "./screens/LowerAbsScreen";
import Lying2Screen from "./screens/Lying2Screen";
import TonedGlutesScreen from "./screens/TonedGlutesScreen";
import BarBellGluteScreen from "./screens/BarBellGluteScreen";
import WalkingLungeScreen from "./screens/WalkingLungeScreen";
import DonkeyKickScreen from "./screens/DonkeyKickScreen";
import CalendarScreen from './screens/CalendarScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';
import NotificationScreen from './screens/NotificationScreen';

import NewMed1Screen from './screens/NewMed1Screen';
import NewMed2Screen from './screens/NewMed2Screen';
import NewMed3Screen from './screens/NewMed3Screen';
import WaterIntake from './screens/WaterIntake';
import AllRecipies from './screens/AllRecipies';
import OatScreen from './screens/OatScreen';
import MangoScreen from './screens/MangoScreen';







const Stack = createNativeStackNavigator();

export default function App() {
  const user=useAuth();
  return (
    <NavigationContainer>
      
    <TailwindProvider>
    <AuthProvider>
    <Stack.Navigator>

    
    
    
    <Stack.Screen name="AnimationScreen" component={AnimationScreen} options={{presentation:"fullScreenModal" ,headerShown:false}} />
    
    <Stack.Screen name="Pro" component={ProfileScreen} />
    <Stack.Screen name="Progress" component={ProgressScreen} />
    
    <Stack.Screen name="Workouts" component={WorkoutScreen} />
        <Stack.Screen name="Abs" component={ExerciseScreen} />
       
        <Stack.Screen name="Notification" component={NotificationScreen} options={{presentation:"fullScreenModal" ,headerShown:false}} />

<Stack.Screen name = "User Details" component = {UserDetailsScreen}
        options={{ headerShown: false }}/>

<Stack.Screen name="Recipy" component={AllRecipies}/>
<Stack.Screen name="Oat" component={OatScreen}/>
<Stack.Screen name="Mango" component={MangoScreen}/>
        <Stack.Screen name="Booty" component={BootyScreen}/>
        <Stack.Screen name="Legs" component={LegsScreen}/>
        <Stack.Screen name="Arms" component={ArmsScreen}/>
        <Stack.Screen name="Cardio" component={CardioScreen}/>
        <Stack.Screen name="Full Body" component={FullBodyScreen}/>
        <Stack.Screen name="water" component={WaterIntake}/>
        {/* {Abs workout exercise-1} */}
        <Stack.Screen name="Toning side abs" component={ToningSideAbsScreen}/>
        <Stack.Screen name="Standing Side Bends" component={SideBendScreen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>
         <Stack.Screen name="Side Plank" component={SidePlankScreen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>
         <Stack.Screen name="Reverse Crunches" component={ReverseCrunchesScreen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>

        {/* {Abs workout exrecise-2} */}
         <Stack.Screen name="Lower abs" component={LowerAbsScreen}/>
         <Stack.Screen name="Lying Lower" component={Lying2Screen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>

        {/* {Booty workout exercise-1} */}
        <Stack.Screen name="Toned Glutes" component={TonedGlutesScreen}/>
        <Stack.Screen name="BarBell Glute" component={BarBellGluteScreen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>
         <Stack.Screen name="Walking Lunge" component={WalkingLungeScreen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>
         <Stack.Screen name="Donkey Kicks" component={DonkeyKickScreen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>

<Stack.Screen name="chat" component={app} />





    
    <Stack.Screen name="Home" component={HomeScreen} />
    
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Program" component={ProgramScreen} />
    <Stack.Screen name="Data1" component={Data1Screen} />
    <Stack.Screen name="Data2" component={Data2Screen} />
    <Stack.Screen name="Data3" component={Data3Screen} />
    <Stack.Screen name="Data4" component={Data4Screen} />
    <Stack.Screen name="Data5" component={Data5Screen} />
    <Stack.Screen name="Calendar" component={CalendarScreen} />
    
    <Stack.Screen name = "Medi1" component = { NewMed1Screen }
        options = {{ headerShown: false }}/>
         <Stack.Screen name = "Medi2" component = { NewMed2Screen }
        options = {{ headerShown: false }}/>
         <Stack.Screen name = "Medi3" component = { NewMed3Screen }
        options = {{ headerShown: false }}/>
    
    

    

    
      
      
      
      
      


     



      
        
        
      </Stack.Navigator>
      </AuthProvider>
    </TailwindProvider>

    </NavigationContainer>
  );
}


