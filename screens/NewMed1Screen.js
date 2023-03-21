import { View, Text, ScrollView, Image, ScrollViewBase, TouchableOpacity } from 'react-native'
import React from 'react'


const NewMed1Screen = () => {
  return (
    <ScrollView>
    <View>
     <Image source = {{uri: "https://img.mensxp.com/media/content/2022/Oct/yoga-lotus-pose-meditation_635b7b1822f7c.jpeg"}}
     className="h-96 rounded-3xl pb-2"/>
     <Text className="font-extrabold text-3xl pt-3 pb-2 px-6">Mindfullness Meditation</Text>
     <Text className="text-sm font-semibold px-6 pb-6">Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West.

In mindfulness meditation, you pay attention to your thoughts as they pass through your mind. You don’t judge the thoughts or become involved with them. You simply observe and take note of any patterns.</Text>
    </View>

<TouchableOpacity className="h-40  border-[#0A2647] border-4 bg-white rounded-3xl mx-3 flex-row">
    <View>
        <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThq921G33tHC5VhYu0BREnmdGfH2Hnp414Yw&usqp=CAU"}}
        className="h-20 w-20 mx-8 mb-2 mt-8 rounded-lg border"/>
    </View>
    <View>
        <Text className="pt-14 font-bold text-2xl px-8">Audio</Text>
    </View>
</TouchableOpacity>
    </ScrollView>
  )
}

export default NewMed1Screen