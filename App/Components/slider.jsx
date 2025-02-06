import { View, Text, FlatList, Dimensions, Image } from 'react-native'
import React from 'react'


export default function Slider() {
    const sliderList=[
        {
            id : 1,
            name : "slider1",
            imageUrl:"https://media.istockphoto.com/id/2163867926/photo/hospital-doctor-using-spreadsheet-for-billing-codes-on-desktop.webp?a=1&b=1&s=612x612&w=0&k=20&c=B0Hc29mEPGqj78OFi57emvJoprCUq6SmlMF8TGUHcK8="
        },
        {
            id : 2,
            name : "slider2",
            imageUrl:"https://plus.unsplash.com/premium_photo-1664475477169-46b784084d4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D"  
        }
    ]
  return (
    <View style={{ }}>
      <FlatList
        data ={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <Image source={{uri:item.imageUrl}} 
            style={{
                width:Dimensions.get('screen').width*0.9,
                height:170,
                margin:2,
                borderRadius:10
        }}
        />
        )}
      />
    </View>
  )
}