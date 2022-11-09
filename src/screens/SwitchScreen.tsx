import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useForm } from '../hooks/useForm';

const SwitchScreen = () => {
    const {theme:{colors}} = useContext(ThemeContext)
    const {form,onChange} = useForm({
        isActive:true,
        isHungry:false,
        isHappy:true
    })
    
    return (
        <View style={{marginHorizontal:20}}>
            <HeaderTitle title="switches" />
            <View style={styles.swtichRow}>
                <Text style={{...styles.swtichText,color:colors.text}}>isActive</Text>
                <CustomSwitch state={form.isActive} onChange={()=>onChange(!form.isActive,'isActive')} />
                <CustomSwitch state={form.isHungry} onChange={()=>onChange(!form.isHungry,'isHungry')} />
                <CustomSwitch state={form.isHappy} onChange={()=>onChange(!form.isHappy,'isHappy')} />
            </View>

            <Text style={{...styles.swtichText,color:colors.text}}>
                {JSON.stringify(form,null,5)}
            </Text>
        </View>
    )
}

export default SwitchScreen

const styles = StyleSheet.create({
    swtichRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    swtichText:{
        fontSize:25
    }
});