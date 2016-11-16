import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, NavigatorIOS} from 'react-native';

import Chores from './js/chores'

export default class ChoreList extends Component {
    render() {
        return (
            <NavigatorIOS style={styles.container}
                initialRoute={{
                    title: 'Chore List',
                    component: Chores,
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // welcome: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     margin: 10,
    // },
    // instructions: {
    //     textAlign: 'center',
    //     color: '#333333',
    //     marginBottom: 5,
    // },
});

AppRegistry.registerComponent('ChoreList', () => ChoreList);
