import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChapterService from '../services/ChapterService'
import verseBullet from '../assets/images/verse.png'

const Scrol = ({verse}) => {
   
  return (
    
      
    <ScrollView style={ styles.container }>
    <View style={ styles.verses }>
     
        <View style={ styles.verseContainer }>
          <Text style={ styles.verse }>
            <Image source={ verseBullet } resizeMode="contain" style={ styles.verseBullet }></Image>
            <Text style={styles.text}>
              { verse }
            </Text>
          </Text>
        </View>
      
    </View>
  </ScrollView>
  )
   
}

export default Scrol

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        
      },
      verses: {
        padding: 20,
        paddingBottom: 10,
       

      },
      verseContainer: {
        backgroundColor: '#000',
        paddingVertical: 20,
        marginBottom: 10,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderColor: '#f1f1f1',
        
      },
      verse: {
        flexShrink: 1,
        flexGrow: 1,
        fontSize: 34,
        fontFamily: 'PdmsIslamicFont',
        textAlign: 'right',
        lineHeight: 40,
        paddingHorizontal: 20,
        letterSpacing:10,
       
      },
      verseBullet: {
        width: 40,
        height: 20,
        marginLeft: 10,
        marginTop: 8
      },
      text:{
        padding:20,
        
  

      }
})