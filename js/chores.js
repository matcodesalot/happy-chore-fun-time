import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './redux/actions';
import ChoreItem from './chore-item';
import AddChore from './add-chore';

class Chores extends Component {
	onAddPressed() {
		this.props.dispatch(actions.addingChore(!this.props.addingChore));
	}

	render() {
		const plusOrX = !this.props.addingChore ? (<Text style={styles.addText}>+</Text>) : (<Text style={styles.addTextRotate}>+</Text>)
		return(
			<View>
				<View style={styles.topContainer}>
	                <Text style={styles.ticketText}>tickets:
	                    &nbsp;
	                    <Text style={styles.underline}>{this.props.ticketCount}</Text>
	                </Text>
	            </View>

            	{this.props.choreList.map((chore, index) => <ChoreItem key={index} index={index} chore={chore} />)}
            	<AddChore addingChore={this.props.addingChore} choreText={this.props.choreText} />

				<View style={styles.addContainer}>
					<TouchableHighlight
						underlayColor='white'
						onPress={this.onAddPressed.bind(this)}>
						{plusOrX}
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
	}
}

export default connect(mapStateToProps)(Chores);

const styles = StyleSheet.create({
	topContainer: {
        marginTop: 60,
        marginBottom: 60,
        paddingRight: 12,
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
	addContainer: {
		marginBottom: 10,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	addText: {
		fontSize: 48,
		color: '#48BBEC',
	},
	addTextRotate: {
		fontSize: 48,
		color: '#48BBEC',
		transform: [{rotate: '45deg'}],
	}
});