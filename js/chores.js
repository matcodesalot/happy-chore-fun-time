import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './redux/actions';
import OneChore from './one-chore';

class Chores extends Component {
	render() {
		const show = this.props.showChore ? (<OneChore />) : (<View />);
		return(
			<View>
				<View style={styles.topContainer}>
	                <Text style={styles.ticketText}>tickets:
	                    &nbsp;
	                    <Text style={styles.underline}>{this.props.ticketCount}</Text>
	                </Text>
	            </View>

				{show}

				<View style={styles.addContainer}>
					<TouchableHighlight
						underlayColor='#656565'>
						<Text style={styles.addText}>+</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

let mapStateToProps = function(state, props) {
	return {
		ticketCount: state.ticketCount,
		showChore: state.showChore,
	}
}

export default connect(mapStateToProps)(Chores);

const styles = StyleSheet.create({
	topContainer: {
        marginTop: 60,
        marginBottom: 60,
    },
    ticketText: {
        color: '#48BBEC',
        fontSize: 16,
        textAlign: 'right',
        margin: 10,
    },
    underline: {
        textDecorationLine: 'underline',
    },
    centerText: {
    	alignSelf: 'center',
    },
	addContainer: {
		marginBottom: 10,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	addText: {
		fontSize: 48,
		color: '#48BBEC'
	}
});