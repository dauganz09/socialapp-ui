import React from "react"
import { SafeAreaView,Text,View } from "react-native"
import tw from 'tailwind-react-native-classnames'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import Card from "../components/Card"
import Comments from "../components/Comments"
import PostInput from "../components/PostInput"

const HomeScreen = () => {

    return (
        <SafeAreaView style={tw`h-full bg-gray-50 relative`}>
           
           
           <View style={tw`flex-row p-4 h-16  items-center border-b-2 border-gray-100`}>
                <MdKeyboardArrowLeft style={tw`text-4xl text-red-500  flex-grow-0`}/>
                <View style={tw`flex flex-grow items-center content-center`}>
                     <Text style={tw`text-lg font-medium `}>Comments</Text>
                </View>
                <View style={tw`w-8`}></View>
           </View>
           
                {/* cardheader */}
                <Card/>
                <Text style={tw`mx-4 font-medium`}>Comments</Text>
               
               <Comments/>
               <PostInput/>
         
           
        </SafeAreaView>
    )
}

export default HomeScreen
