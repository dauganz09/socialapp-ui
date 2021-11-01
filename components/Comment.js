import React from 'react'
import {View,Text,Image} from 'react-native'
import tw from 'tailwind-react-native-classnames'

const Comment = () => {
    return (
        <View style={tw`h-32 px-2 py-2 flex-row w-full `}>
            <Image
                style={tw`w-10 h-10 mr-4 rounded-full `}
                source = {{
                    uri :'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
                }}
            />

            <View style={tw`h-full p-2 w-60 break-normal rounded-lg bg-gray-200`}>
                <Text style={tw`font-bold mb-2`}>Carla Sposito</Text>
                <Text style={tw`break-normal text-justify`}>Far concluded not his something extremity. Want four we face an he gate. Only he of played he.</Text>
            </View>
            
        </View>
    )
}

export default Comment
