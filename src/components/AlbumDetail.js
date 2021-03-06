import React from 'react';
import { Image, Linking, Text, View } from 'react-native';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
   const {
      artisTextStyle,      
      headerContentStyle,
      titleTextStyle
   } = styles;
   
   const {
      artist,
      image,
      title,
      thumbnail_image,
      url
   } = props.album;

   const onButtonPressed = () => { //this is equal as buttonPress={() => console.log('pressed')}
      Linking.openURL(url);
   };

   return (
      <View>
         <Card>
            <CardSection>
               <View>
                  <Image
                     style={{ width: 50, height: 50 }}
                     source={{ uri: thumbnail_image }}
                  />
               </View>               

               <View style={headerContentStyle}>
                  <Text style={titleTextStyle}>{title}</Text>
                  <Text style={artisTextStyle}>{artist}</Text>
               </View>
            </CardSection>

            <CardSection>
               <Image
                  style={{ height: 300, flex: 1 }}
                  source={{ uri: image }}
               />
            </CardSection>
            
            <CardSection>
               <Button buttonPressed={onButtonPressed}> 
                  Buy {title} Here
               </Button>
            </CardSection>
         </Card>
      </View>
   );
};

const styles = {
   artisTextStyle: {
      color: '#6D96B9',
      fontSize: 15,
      padding: 2
   },

   headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      paddingLeft: 10
   },

   titleTextStyle: {
      color: '#EAF9FF',
      fontSize: 20,
      padding: 2
   }
};

export default AlbumDetail;
