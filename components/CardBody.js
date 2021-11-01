import React , {useState} from 'react'
import {View, Text , Image,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native'
import { BsFillHeartFill,BsHeart,BsChat } from "react-icons/bs";
import { HiOutlineShare,HiVideoCamera } from "react-icons/hi";
import tw from 'tailwind-react-native-classnames'


import Slider from '@react-native-community/slider';


const CardBody = () => {

    const [visible, setVisible] = useState(false)


    const handlePress = () =>{

        console.log('Test Click')
    }

    return (
        <View style={tw`flex-col  h-1/2`}>
            <Text style={tw`px-4 h-16 py-2 font-normal`}>Far concluded not his something extremity.Want four we face an he gate.
                On he of played he
            </Text>
            
            <ImageBackground
            style={tw`h-44 w-full mt-2`}
            source={{
                uri : 'https://i.picsum.photos/id/155/3264/2176.jpg?hmac=Zgf_oGMJeg18XoKBFmJgp2DgHMRYuorXlDx5wLII9nU'
            }}
            
            > 
            <HiVideoCamera style={tw`h-6 w-10 absolute text-gray-100 top-2 left-2`}/>
            </ImageBackground>
               
            <View style={tw`flex-row h-10 w-full px-2 items-center justify-evenly`}>
                <TouchableOpacity onLongPress={handlePress} activeOpacity={0.6} style={tw`flex-row w-20  justify-evenly items-center`}>
                <BsFillHeartFill style={tw`text-red-500`}/>
                <Text style={tw`font-light text-gray-400`}>120</Text>
                </TouchableOpacity>

                <View style={tw`flex-row px-10  flex-grow  justify-between items-center`}>
                <BsChat style={tw`text-gray-400`}/>
                <Text style={tw`font-light text-gray-400`}>50 comments</Text>
                </View>

                <View style={tw`flex-row w-20 justify-evenly items-center`}>
                <HiOutlineShare style={tw`text-gray-400`}/>
                <Text style={tw`font-light text-gray-400`}>120</Text>
                </View>
            </View>
           
            {/* <Slider
                
                style={tw`h-12 z-50`}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            /> */}


            
             
            
            
        </View>
    )
}


const styles = StyleSheet.create({
   
    thumb: {
        width: 40,
        height: 40,
        borderRadius : 50

    },
    track:{
        height: 400,
        width : 100,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    }
});



export default CardBody
