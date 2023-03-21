import { View, Text, ScrollView, Image, ScrollViewBase, TouchableOpacity } from 'react-native'
import React from 'react'

const NewMed2Screen = () => {
  return (
    <ScrollView>
    <View>
     <Image source = {{uri: "https://miro.medium.com/max/959/1*VJxzBzMipe3Zz69Qh0_M-w.jpeg"}}
     className="h-96 rounded-3xl pb-2"/>
     <Text className="font-extrabold text-3xl pt-3 pb-2 px-6">Focused Meditation</Text>
     <Text className="text-sm font-semibold px-6 pb-6">Focused meditation involves concentration using any of the five senses.

For example, you can focus on something internal, like your breath, or you can bring in external influences to help focus your attention. This practice may be simple in theory, but it can be difficult for beginners to hold their focus for longer than a few minutes at first.

If your mind does wander, simply come back to the practice and refocus.

As the name suggests, this practice is ideal for anyone who wants to sharpen their focus and attention.</Text>
    </View>

<TouchableOpacity className="h-40  border-[#0A2647] border-4 bg-white rounded-3xl mx-3 flex-row">
    <View>
        <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJfPuAuLyNkvXv_tOP24DwsQ_vm-9GnJXtQ&usqp=CAU"}}
        className="h-20 w-20 mx-8 mb-2 mt-8 rounded-lg border"/>
    </View>
    <View>
        <Text className="pt-14 font-bold text-2xl px-8">Audio</Text>
    </View>
</TouchableOpacity>

    </ScrollView>
  )
}

export default NewMed2Screen