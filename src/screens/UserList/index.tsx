import { View, Text, FlatList, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const userData = [
  {
    profileImage:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU'},
    memberName:'Harjinder Singh',
    mobile:'9509301559'
  },
  {
    profileImage:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU'},
    memberName:'Harjinder Singh',
    mobile:'9509301559'
  },
  {
    profileImage:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU'},
    memberName:'Harjinder Singh',
    mobile:'9509301559'
  },
  {
    profileImage:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU'},
    memberName:'Harjinder Singh',
    mobile:'9509301559'
  },
  {
    profileImage:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU'},
    memberName:'Harjinder Singh',
    mobile:'9509301559'
  },
  {
    profileImage:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU'},
    memberName:'Harjinder Singh',
    mobile:'9509301559'
  },
  {
    profileImage:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU'},
    memberName:'Harjinder Singh',
    mobile:'9509301559'
  },
  {
    profileImage:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU'},
    memberName:'Harjinder Singh',
    mobile:'9509301559'
  },
  {
    profileImage:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU'},
    memberName:'Harjinder Singh',
    mobile:'9509301559'
  },
  {
    profileImage:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU'},
    memberName:'Harjinder Singh',
    mobile:'9509301559'
  },
  {
    profileImage:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU'},
    memberName:'Harjinder Singh',
    mobile:'9509301559'
  },
  {
    profileImage:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU'},
    memberName:'Harjinder Singh',
    mobile:'9509301559'
  },
  {
    profileImage:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU'},
    memberName:'Harjinder Singh',
    mobile:'9509301559'
  }
]
const UserList = ({navigation}:any) => {
  return (
    <View style={{flex:1,backgroundColor:'#0c8ce9',paddingTop:StatusBar.currentHeight,padding:10}}>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'} />
      <View style={{padding:10}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:'row',alignItems:'center'}}>
          <FontAwesome name='chevron-left' size={18} color={'white'} style={{marginTop:2}} />
          <Text style={{fontSize:18,color:'white',fontWeight:'500'}}>{' '}Back</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={userData}
        renderItem={(items) => <View style={{backgroundColor:'white',padding:5,borderRadius:5,flexDirection:'row',alignItems:'center',marginBottom:10}}>
          <Image source={items.item.profileImage} style={{height:75,width:75,borderRadius:30}} />
          <View style={{paddingLeft:5,flex:1}}>
            <Text style={{fontSize:16,fontWeight:'500',color:'black'}}>{items.item.memberName}</Text>
            <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>{items.item.mobile}</Text>
          </View>
          <View style={{padding:10}}>
            <FontAwesome name="arrow-circle-right" size={32} color={'tomato'} />
          </View>
        </View>}
        // ListHeaderComponent={() => <View style={{padding:5}} />}
      />
    </View>
  )
}

export default UserList