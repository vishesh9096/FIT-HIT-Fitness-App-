import { View, Text, ScrollView, Image, ScrollViewBase, TouchableOpacity } from 'react-native'
import React from 'react'

const NewMed3Screen = () => {
  return (
    <ScrollView>
    <View>
     <Image source = {{uri: "https://images.squarespace-cdn.com/content/v1/577475d22994ca360593faeb/1565990305285-GDKW4VP9E17IX9GO755H/chakra+black.jpg?format=1500w"}}
     className="h-96 rounded-3xl pb-2"/>
     <Text className="font-extrabold text-3xl pt-3 pb-2 px-6">Mantra Meditation</Text>
     <Text className="text-sm font-semibold px-6 pb-6">Mantra meditation is prominent in many teachings, including Hindu and Buddhist traditions. This type of meditation uses a repetitive sound to clear the mind. It can be a word, phrase, or sound, one of the most common being “om.”

Your mantra can be spoken loudly or quietly. After chanting the mantra for some time, you’ll be more alert and in tune with your environment. This allows you to experience deeper levels of awareness.

Some people enjoy mantra meditation because they find it easier to focus on a word than on their breath. Others enjoy feeling the vibration of the sound in their body.</Text>
    </View>

<TouchableOpacity className="h-40  border-[#0A2647] border-4 bg-white rounded-3xl mx-3 flex-row">
    <View>
        <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJXJKx2qLDzvnC7He4U-1IkZml2mOzRlO4A&usqp=CAU"}}
        className="h-20 w-20 mx-8 mb-2 mt-8 rounded-lg border"/>
    </View>
    <View>
        <Text className="pt-14 font-bold text-2xl px-8">Audio</Text>
    </View>
</TouchableOpacity>

    </ScrollView>
  )
}

export default NewMed3Screen