import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native'
import CustomSwitch from '../components/CustomSwitch'
import HeaderTitle from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'

const TextInputScreen = () => {
  const {theme:{colors}} = useContext(ThemeContext)
  const {form, onChange} = useForm({name:'',email:'',phone:'',isSuscribed:false})

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
          <View style={styles.globalMargin}>
              <HeaderTitle title="TextInputs"/>
              <TextInput 
                style={{...stylesScreen.inputStyle,color:colors.text}}
                placeholder="Ingrese su nombre"
                autoCorrect={false}
                autoCapitalize="words"
                onChangeText={(value) => onChange(value,'name')}
                placeholderTextColor={colors.primary}
              />
              <TextInput 
                style={{...stylesScreen.inputStyle,color:colors.text}}
                placeholder="Ingrese su email"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(value) => onChange(value,'email')}
                keyboardType="email-address"
                keyboardAppearance='dark'
                placeholderTextColor={colors.primary}
              />
              <TextInput 
                style={{...stylesScreen.inputStyle,color:colors.text}}
                placeholder="Ingrese su telefono"
                autoCorrect={false}
                onChangeText={(value) => onChange(value,'phone')}
                keyboardType="phone-pad"
                placeholderTextColor={colors.primary}
              />
              <View>
                <Text style={{color:colors.text}}>Suscribirme</Text> 
                <CustomSwitch state={form.isSuscribed} onChange={( )=>onChange(!form.isSuscribed,'isSuscribed')} />
              </View>
              <HeaderTitle title={JSON.stringify( form, null, 5 )}/>
          </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default TextInputScreen

const stylesScreen = StyleSheet.create({
    inputStyle: {
      borderWidth:3,
      borderColor:'#cecece',
      height:50,
      paddingHorizontal:10,
      borderRadius:10,
      marginVertical:10
    }
});