import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, NavigatorIOS} from 'react-native';
import {Provider} from 'react-redux';
import store from './js/redux/store';
import Chores from './js/chores';
import Rewards from './js/rewards';

export default class ChoreList extends Component {
    _handleNavigationRequest() {
        this.refs.nav.push({
            component: Rewards,
            title: 'Rewards',
        });
    }

    render() {
        return (
            <Provider store={store}>
                <NavigatorIOS style={styles.container}
                    ref='nav'
                    initialRoute={{
                        component: Chores,
                        title: 'Chore List',
                        rightButtonTitle: 'Rewards >',
                        onRightButtonPress: () => this._handleNavigationRequest(),
                    }}
                />
            </Provider>
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
