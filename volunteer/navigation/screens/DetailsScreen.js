import * as React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../styles/card'


export default function DetailsScreen({navigation}) {
    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>
                    Bayha Group Internship{'\n'}{'\n'}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a auctor eros, nec facilisis metus. Quisque in condimentum quam, id commodo neque. Maecenas gravida lorem leo, nec viverra sapien ullamcorper non. Nullam scelerisque sed lorem ac lobortis.
                </Text>
            </Card>

            <Card>
                <Text>
                    UCD Lab{'\n'}{'\n'}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a auctor eros, nec facilisis metus. Quisque in condimentum quam, id commodo neque. Maecenas gravida lorem leo, nec viverra sapien ullamcorper non. Nullam scelerisque sed lorem ac lobortis.
                </Text>
            </Card>

            <Card>
                <Text>
                    Random Shit{'\n'}{'\n'}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a auctor eros, nec facilisis metus. Quisque in condimentum quam, id commodo neque. Maecenas gravida lorem leo, nec viverra sapien ullamcorper non. Nullam scelerisque sed lorem ac lobortis.
                </Text>
            </Card>
        </View>
    );
}