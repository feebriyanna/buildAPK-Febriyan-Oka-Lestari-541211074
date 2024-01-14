import React from 'react';
import{View,Text, Image, Button,Linking, TextInput, ScrollView} from 'react-native';

const ContactMe = () => {
  const url = 'https://www.instagram.com/fefebryna_/';
  Linking.openURL(url);
}

const See = () => {
  const url = 'https://www.instagram.com/infinitelnspire_/';
  Linking.openURL(url);
}

const Latihan = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor:'rgb(241, 240, 232)', flex:1}}>
    <View style={{alignItems:'center', padding:30}}>
        <Image style={{width:190, height:190,borderRadius:20}} 
        source={require('./assets/Profil.jpg')}/>
    </View>
      <Text style={{fontWeight:'bold',fontSize:30, textAlign:'center', color:'black'}}>Febriyan Oka</Text>
      <Text style={{fontSize:15, padding:10, textAlign:'center', color:'black'}}>Saya seorang siswi di SMK Telkom Purwoketo jurusan
Rekaya Perangkat lunak. Memiliki ketertarikan dalam
bidang design. Saya suka mencoba hal hal baru, dan
senang bekerja dengan tim.</Text>
  <View style={{alignItems:'center', padding:20}}>
      <Button title='Contact Me' color='navy' onPress={ContactMe} />
  </View>
  <Text style={{fontWeight:'bold', fontSize:20, textAlign:'center',       color:'black'}}>My Recent Project</Text>
      <Text style={{fontWeight:'bold', fontSize:18, margin:8, textAlign:'center', color:'navy'}}>App Design</Text>
   <View style={{alignItems:'center', padding:10}}>
        <Image style={{width:280, height:180,borderRadius:20}} 
        source={require('./assets/11.jpg')}/>
    </View>
        <Text style={{fontWeight:'bold', fontSize:18, margin:1, textAlign:'center', color:'navy'}}>Project</Text>
        <Text style={{fontWeight:'bold', fontSize:15, margin:1, textAlign:'center', color:'grey'}}>WonderHub</Text>
        <View style={{alignItems:'center', padding:10}}>
        <Image style={{width:280, height:180,borderRadius:20}} 
        source={require('./assets/project.jpg')}/>
    </View>
    <Text style={{fontWeight:'bold', fontSize:18, margin:1, textAlign:'center', color:'navy'}}>Project</Text>
    <Text style={{fontWeight:'bold', fontSize:15, margin:1, textAlign:'center', color:'gray'}}>Go Babysitter</Text>

<View style={{alignItems:'center', padding:20}}>
      <Button title=' Look ->' color='navy' onPress={See} />
  </View>
 <Text style={{fontWeight:'bold', fontSize:18, margin:20, textAlign:'center', color:'navy'}}>Web & Product Design</Text>
     <View style={{alignItems:'center', padding:10}}>
        <Image style={{width:280, height:180,borderRadius:20}}
         source={require('./assets/web.jpg')}/>
    </View>
    <Text style={{fontWeight:'bold', fontSize:18, margin:1, textAlign:'center', color:'navy'}}>Web Project</Text>
    <Text style={{fontWeight:'bold', fontSize:15, margin:1, textAlign:'center', color:'gray'}}>Neuart & Admin web</Text>
    <View style={{alignItems:'center', padding:10}}>
        <Image style={{width:280, height:180,borderRadius:20}} 
         source={require('./assets/Udangsay.jpg')}/>
    </View>
    <Text style={{fontWeight:'bold', fontSize:18, margin:1, textAlign:'center', color:'navy'}}>Web Project</Text>
    <Text style={{fontWeight:'bold', fontSize:15, margin:1, textAlign:'center', color:'gray'}}>Udangsay web</Text>
    
      
    <View style={{alignItems:'center', padding:10}}>
        <Image style={{width:280, height:180,borderRadius:20}} 
        source={require('./assets/susu.png')}/>
    </View>
    <Text style={{fontWeight:'bold', fontSize:18, margin:1, textAlign:'center', color:'navy'}}>Product Design</Text>
    <Text style={{fontWeight:'bold', fontSize:15, margin:1, textAlign:'center', color:'gray'}}>Cadbury Redesign</Text>
    <View style={{alignItems:'center', padding:20}}>
      <Button title=' Look ->' color='navy' onPress={See} />
  </View>
  
 
    </View>
    </ScrollView>
  );
}
export default Latihan