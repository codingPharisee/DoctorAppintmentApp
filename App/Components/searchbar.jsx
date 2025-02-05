import { View, Text , TextInput} from 'react-native'
import React, { useState } from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';



export default function Searchbar() {
    const[searchInput, setSearchInput]=useState();

  return (
    <View style={{
        display:'flex', 
        flexDirection:'row', 
        alignItems:'center',
        borderWidth:0.2,
        bordercolor:'green',
        padding:-1,
        borderRadius:99,
        margin:10,
        marginTop:5
        
       }}>
    <EvilIcons name="search" size={24} color="blue" />
      <TextInput 
      placeholder='search'
      onChangeText={(value)=>setSearchInput(value)} 
      onSubmitEditing={()=>console.log(searchInput)}
      />
    </View>
  )
}