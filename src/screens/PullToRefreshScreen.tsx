import React, { useState } from 'react'
import { View, RefreshControl, ScrollView } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const PullToRefreshScreen = () => {

  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState<string>('')

  const onRefresh = () =>{
    setRefreshing(true)
    setTimeout(()=>{
      setData('hola mundo')
      setRefreshing(false)
    },3000)
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={30}
          progressBackgroundColor='gray'
          colors={['red','blue','cyan']}
          style = {{backgroundColor: 'yellow'}}
          tintColor = 'red'
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh"/>
        <HeaderTitle title={data}/>
      </View>
    </ScrollView>
  )
}

export default PullToRefreshScreen