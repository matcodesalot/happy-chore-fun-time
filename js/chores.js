import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './redux/actions';
import ChoreItem from './chore-item';
import AddChore from './add-chore';

class Chores extends Component {
	onAddPressed() {
		this.props.dispatch(actions.addingChore(true));
	}

	render() {
		return(
			<View>
				<View style={styles.topContainer}>
	                <Text style={styles.ticketText}>tickets:
	                    &nbsp;
	                    <Text style={styles.underline}>{this.props.ticketCount}</Text>
	                </Text>
	            </View>

            	{this.props.choreList.map((chore, index) => <ChoreItem key={index} index={index} chore={chore} isActive={this.props.isActive} />)}
            	<AddChore addingChore={this.props.addingChore} choreText={this.props.choreText} />

				<View style={styles.addContainer}>
					<TouchableHighlight
						underlayColor='#656565'
						onPress={this.onAddPressed.bind(this)}>
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
		choreList: state.choreList,
		addingChore: state.addingChore,
		choreText: state.choreText,
		isActive: state.isActive,
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