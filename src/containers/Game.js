import React, { Component } from 'react';
import { connect } from 'react-redux';
import { roll } from '../actions';
import ScoreBoard from '../components/ScoreBoard';
import RandomRoller from '../components/RandomRoller';
class Game extends Component {
  render() {
    return (
      <div id="bowling-score">
        <ScoreBoard rolls={this.props.rolls} />
        <hr />
        <RandomRoller roll={this.props.roll} />
      </div>
    )
  }
}

const mapStateToProps = ({rolls}) => ({
  rolls,
});
const mapDispatchToProps = (dispatch) => ({
  roll: (pins) => dispatch(roll(pins)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Game);
