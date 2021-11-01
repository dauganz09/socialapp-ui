import React from 'react'
import {View, Text} from 'react-native'
import CardHeader from './CardHeader'
import tw from 'tailwind-react-native-classnames'
import CardBody from './CardBody'


const Card = () => {


    return (
        <View style={tw`flex-col`}>
            
            <CardHeader/>
            <CardBody/>
            
        </View>
    )
}

export default Card

