import * as React from 'react';
import { View, Text, ScrollView, Button, Link, Image } from 'react-native';
import { globalStyles } from '../styles/global.js';
import Card from '../styles/card.js';
import { containerStyles  } from '../styles/container.js';


export default function ProfileScreen({navigation}) {

    const pressHandler = () => {
        navigation.navigate('homeName');
    }

    return(
        <ScrollView style={globalStyles.container} showsVerticalScrollIndicator={false}>
            <Card>
                <Button title='Username' onPress={pressHandler} />
            </Card>
            <Card>
                <Text style={globalStyles.centertext}>Email</Text>
            </Card>
            <Card>
                <Text style={globalStyles.centertext}>
                    Notifications
                </Text>
            </Card>
        </ScrollView>
    );
}