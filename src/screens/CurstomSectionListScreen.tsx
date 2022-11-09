import React, { useContext } from 'react'
import { SectionList, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import ItemSeparator from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme'

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama"]
    }
]

const CurstomSectionListScreen = () => {
  const {theme:{colors}} = useContext(ThemeContext)
  return (
    <View style={{...styles.globalMargin, flex:1}}>
        
        <SectionList
            sections={casas}
            renderItem={({item})=> <Text style={{color:colors.text}}>{item}</Text>}
            keyExtractor={(item,index)=> item + index}
            renderSectionHeader={({section})=> ( 
                <View style={{backgroundColor:colors.card}}>
                    <HeaderTitle title={section.casa}/>
                </View>
            )}
            stickySectionHeadersEnabled
            ListHeaderComponent={()=> <HeaderTitle title="Section list"/>}
            ListFooterComponent={()=><HeaderTitle title={'total de casa' + casas.length}/>}
            renderSectionFooter={({section})=>(
                <HeaderTitle title={'Total' + section.data.length}/>
            )}

            SectionSeparatorComponent={()=> <ItemSeparator/>}
            ItemSeparatorComponent={()=> <ItemSeparator/>}

            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default CurstomSectionListScreen