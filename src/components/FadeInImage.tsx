import React, { useContext, useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import useAnimation from '../hooks/useAnimation';

interface Props {
    uri:string
    style?:StyleProp<ImageStyle>
}

const FadeInImage = ({uri,style}:Props) => {

    const {opacity,fadeIn} = useAnimation()
    const [isLoaded, setIsLoaded] = useState(true)
    const {theme:{colors}} = useContext(ThemeContext)

    const finishLoading = () =>{
        setIsLoaded(false)
        fadeIn()
    }

    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
            {
                isLoaded && <ActivityIndicator 
                                style={{position:'absolute'}}
                                color={colors.primary} 
                                size={30}
                            />
            }
            <Animated.Image
                source={{uri}}
                onLoadEnd={finishLoading}
                style={{...style as any,opacity}}
            />
        </View>
    )
}

export default FadeInImage