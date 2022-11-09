import React, { useContext } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useState } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)
    const {theme:{colors}} = useContext(ThemeContext)

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="ModalScreen" />

            <Button 
                title="Abrir modal"
                onPress={()=> setIsVisible(true)}
            />

            <Modal
                animationType='slide'
                visible={isVisible}
                transparent={true}
            >
                <View style={{
                    flex:1,
                    backgroundColor:'#00000050',
                    justifyContent:'center',
                    alignItems:'center',
                    
                }}>
                
                    <View style={{
                        backgroundColor:colors.background,
                        width:200,
                        height:200,
                        justifyContent:'center',
                        alignItems:'center',
                        borderWidth:1,
                        borderColor:colors.card,
                        shadowOffset:{
                            width:0,
                            height:10
                        },
                        shadowOpacity:0.25,
                        elevation:10,
                        borderRadius:10

                    }}>
                        <HeaderTitle title="Modal" />
                        <Text style={{color:colors.text}}>Cuerpo del modal</Text>
                        <Button 
                            title="cerrar"
                            onPress={()=> setIsVisible(false)}
                        />
                    </View>

                </View>
            </Modal>
        </View>
    )
}

export default ModalScreen