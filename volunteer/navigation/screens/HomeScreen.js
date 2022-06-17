import * as React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../styles/card'


export default function HomeScreen({navigation}) {
    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>
                    Home Screen Content {'\n'}{'\n'}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a auctor eros, nec facilisis metus. Quisque in condimentum quam, id commodo neque. Maecenas gravida lorem leo, nec viverra sapien ullamcorper non. Nullam scelerisque sed lorem ac lobortis.                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a auctor eros, nec facilisis metus. Quisque in condimentum quam, id commodo neque. Maecenas gravida lorem leo, nec viverra sapien ullamcorper non. Nullam scelerisque sed lorem ac lobortis.
                </Text>
            </Card>
        </View>
    );
}