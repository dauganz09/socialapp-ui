import React from 'react'
import { ScrollView,Text,View,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Comment from './Comment'

const Comments = () => {
    return (
        <ScrollView style={tw`h-full w-full px-4 mt-4 flex-col`}>
            <Comment/>       

        </ScrollView>
    )
}

export default Comments
