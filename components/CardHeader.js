import React from 'react'
import {View,Text,Image} from 'react-native'
import tw from 'tailwind-react-native-classnames'

const CardHeader = () => {
    return (
    
        <View style={tw`py-2 px-4 flex-row  items-center`}>
            <Image
                style={tw`w-12 h-12 mr-4 rounded-full`}
                source={{
                    uri:'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
                }}
            />
            <View style={tw`flex-col`}>
                <Text style={tw`font-semibold`}>andrezahilton</Text>
                <Text style={tw`text-gray-500 font-light`}>6min ago</Text>
            </View>
        </View>
       
    
    )
}

export default CardHeader
