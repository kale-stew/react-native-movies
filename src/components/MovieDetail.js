// wrap this component in Card

import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const MovieDetail = ({ movie }) => {
    const { title, director, thumbnail_image, image, url } = movie;
    // destructuring the props object to reference more quickly
    // from props.movie.thumbnail_image to thumbnail_image

    return (
        <Card>
            <CardItem>
                <View style={styles.thumbnailContainerStyle}>
                    <Image 
                      style={styles.headerThumbnail}
                      source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={styles.headerContentStyle} >
                    <Text style={styles.headerTextStyle} >{title}</Text>
                    <Text>Director: {director}</Text>
                </View>
            </CardItem>
            
            <CardItem>
                <Image 
                  style={styles.movieCoverImage}
                  source={{ uri: image }} 
                />
            </CardItem>

            <CardItem>
                <Button onPress={()=> Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardItem>
        </Card>
    );
};

const styles = {
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    headerThumbnail: {
        height: 50,
        width: 50
    },

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle: {
        fontSize: 18
    },

    movieCoverImage: {
        height: 600,
        flex: 1,
        // fills the div from edge to edge
        width: null
    }
};

export default MovieDetail;
