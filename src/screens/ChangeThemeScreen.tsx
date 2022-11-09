import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import HeaderTitle from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { styles } from '../theme/appTheme'

const ChangeThemeScreen = () => {

  const {setLightTheme,setDarkTheme,theme:{colors}} = useContext(ThemeContext)

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title="Change Theme"/>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <TouchableOpacity style={{
              width:150,
              height:50,
              borderRadius:20,
              backgroundColor:colors.primary,
              justifyContent:'center'
            }}
            activeOpacity={0.8}
            onPress={setLightTheme}
            >
              <Text style={{
                  color:'white',
                  textAlign:'center',
                  fontSize:22
              }}>Light</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
              width:150,
              height:50,
              borderRadius:20,
              backgroundColor:colors.primary,
              justifyContent:'center'
            }}
            activeOpacity={0.8}
            onPress={setDarkTheme}
            >
              <Text style={{
                  color:'white',
                  textAlign:'center',
                  fontSize:22
              }}> Dark</Text>
          </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default ChangeThemeScreen