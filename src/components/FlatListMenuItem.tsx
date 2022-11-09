import { useNavigation, useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { MenuItem, RootStackParamList } from '../interfaces/appInterfaces';

interface Props {
    menuItem:MenuItem
}

const FlatListMenuItem = ({menuItem}:Props) => {
    const nameIcon = 'chevron-forward-outline'
    const navigation = useNavigation<StackNavigationProp<any>>()
    const {theme:{colors:{primary,text}}} = useContext(ThemeContext)
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>navigation.navigate(menuItem.component)}
        >
        <View style={styles.container}>
            <Icon name={menuItem.icon} color={primary} size={23}/>
            <Text style={{...styles.itemText, color:text}}>{menuItem.name}</Text>
            <View style={{flex:1}}/>
            <Icon name={nameIcon} color={primary} size={23}/>
        </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    itemText:{
        marginLeft:10,
        fontSize:19
    }
});

export default FlatListMenuItem