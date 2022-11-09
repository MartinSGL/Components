import React, { useContext, useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import FadeInImage from '../components/FadeInImage'
import HeaderTitle from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'

const renderItem = (item:number) =>{
    return (
        // <Image
        //     source={{uri:`https://picsum.photos/id/${item}/500/400`}}
        //     style={{width:'100%',height:400}}
        //  />
        <FadeInImage 
            uri = {`https://picsum.photos/id/${item}/500/400`}
            style={{ width:'100%',height:400}}
        />
    )
}

const InfiniteScrollScreen = () => {
    const [numbers,setNumbers] = useState([0,1,2,3,4,5])
    const {theme:{colors}} = useContext(ThemeContext)

    const loadMore = () =>{
        const newArray: number[] = []
        for (let i = 0; i < 5 ;i++) {
           newArray[i] = numbers.length + i
        }

        setTimeout(() => {
            setNumbers([...numbers,...newArray])
        }, 1500);
    }

    return (
        <View style={{flex:1}}>
            <FlatList
                data={numbers}
                keyExtractor={(item)=> item.toString()}
                renderItem={({item})=> renderItem(item)}
                ListHeaderComponent={()=>(
                    <View style={{marginHorizontal:20}}>
                        <HeaderTitle title = "Infinite Scroll"/>
                    </View>
                )}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={()=>(
                    <View style={{
                        height:150,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <ActivityIndicator size={20} color={colors.primary} />
                    </View>
                )}
            />
        </View>
    )
}

export default InfiniteScrollScreen

const styles = StyleSheet.create({
    textItem:{
        backgroundColor:'green',
        height:150
    }
});