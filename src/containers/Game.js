import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScoreBoard from '../components/ScoreBoard';
import { roll } from '../actions';
class Game extends Component {
  render() {
    return (
      <div>
        <ScoreBoard rolls={this.props.rolls} />
        <hr />
        <button onClick={() => {this.props.roll(10)}}>Strike</button>
        <button onClick={() => {this.props.roll(5)}}>+5</button>
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
