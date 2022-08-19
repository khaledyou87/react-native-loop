import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChaptEnService from '../services/ChaptEnService'
import ChapterService from '../services/ChapterService'
import Scrol from './Scrol'

const ChaptEnList = () => {

    const enchaptrs= ChapterService.getChapters()
  return (
    <FlatList style={styles.item}
    data={enchaptrs}
    renderItem={({ item }) => <Scrol
    verse={item.verses}
    />}
    keyExtractor={(item) => item.id}
  />
  )
}

export default ChaptEnList

const styles = StyleSheet.create({
    item:{
        
        
        
        
        
        

    }
})