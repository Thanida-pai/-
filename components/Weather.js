import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style = {styles.tap}>
                <Text style = {styles.small}>Zip Code <Text style = {styles.small}>{props.zipCode}</Text></Text>
                <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    tap:{
        backgroundColor: 'black',
        width: '100%',
        opacity: 0.5,
        alignItems: 'center',
        padding: 50
    },
    big: {
        color: 'white',
        fontSize: 35,
    },
     small: {
         color: 'white',
         fontSize: 15,
         marginBottom: 20,
        }
});

