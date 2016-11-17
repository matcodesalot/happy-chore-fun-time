import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './redux/actions';
import RewardItem from './reward-item';

class Rewards extends Component {
	render() {
		return(
			<View>
				<View style={styles.topContainer}>
	                <Text style={styles.ticketText}>tickets:
	                    &nbsp;
	                    <Text style={styles.underline}>{this.props.ticketCount}</Text>
	                </Text>
	            </View>
				
				{this.props.rewardList.map((reward, index) => <RewardItem key={index} index={index} reward={reward} />)}
			</View>
		);
	}
}

let mapStateToProps = function(state, props) {
	return {
		ticketCount: state.ticketCount,
		rewardList: state.rewardList,
	}
}

export default connect(mapStateToProps)(Rewards);

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
});