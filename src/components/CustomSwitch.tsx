import React, { useContext, useState } from 'react'
import { Platform, Switch } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'

interface Props {
    state: boolean
    onChange: () => void
}

const CustomSwitch = ({state,onChange}:Props) => {
    const {theme:{colors}} = useContext(ThemeContext)
    return (
        <Switch
            trackColor={{ false: "#D9D9DB", true: colors.primary }}
            thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={onChange}
            value={state}
        />
    )
}

export default CustomSwitch

