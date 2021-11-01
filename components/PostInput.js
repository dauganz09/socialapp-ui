import React from 'react'
import {View,Text,Image,StyleSheet, TouchableOpacity} from 'react-native'
import tw from 'tailwind-react-native-classnames'


const PostInput = () => {
    return (
        <View style={[tw`bottom-2 py-2 w-full px-4 flex-row   items-center`,{
            position: 'fixed'
        }]}>
        <Image
            style={tw`w-10 h-10 mr-2 rounded-full`}
            source={{
                uri:'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
            }}
        />
        <View style={[tw`border-gray-300 border-r-0 `,{
             display : 'flex',
             padding : '4px',
             paddingLeft: '4px',
             justifyContent : 'center',
             width: '200px',
             border : '1px solid red',
             height: '35px',
             borderTopLeftRadius : '20px',
             borderBottomLeftRadius: '20px'
              
        }]}>
        <input
            style={{
                paddingLeft : '2px',
                height : '1.8em',
                border : 0,
                outline : 0
                
               
                
            }}
            type="text"
            placeholder="Add a comment"
        />
       
        </View>
        <TouchableOpacity style={[tw`border-gray-300 `,{
            display : 'flex',
            justifyContent :'center',
            alignItems : 'center',
            height : '35px',
            width : '70px',
            border : '1px solid',
            borderLeftWidth : 0,
            
            borderTopRightRadius : '20px',
            borderBottomRightRadius : '20px'
        }]}

        
        >
            <Text style={tw`font-bold text-sm text-gray-500`}>Post</Text>
        </TouchableOpacity>
    </View>
   
    )
}


export default PostInput
