import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Trang,Maeung', code: '92000' },
    { place: 'Phuket,Kathu', code: '83120' },
    { place: 'Songkla,Hatyai', code: '90110' },
    { place: 'Khonkaen,Kaosuankwang', code: '40280' },
    { place: 'Chonburi,Kohjun', code: '20240' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={{ borderColor: 'red', borderWidth: 3 }}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
        </View>
    );

}
