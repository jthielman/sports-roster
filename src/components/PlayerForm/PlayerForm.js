import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';
// import playerShape from '../../helpers/propz/playerShape';

class PlayerForm extends React.Component {
  static propTypes = {
    addBoard: PropTypes.func,
  }

  state = {
    playerImageUrl: '',
    playerName: '',
    playerPosition: '',
  }

  savePlayerEvent = (e) => {
    const { addPlayer } = this.props;
    e.preventDefault();
    const newPlayer = {
      imageUrl: this.state.playerImageUrl,
      name: this.state.playerName,
      position: this.state.playerPosition,
      uid: authData.getUid(),
    };
    addPlayer(newPlayer);
    this.setState({ playerImageUrl: '', playerName: '', playerPosition: '' });
  }

  urlChange = (e) => {
    e.preventDefault();
    this.setState({ playerImageUrl: e.target.value });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  render() {
    return (
      <form className='col-6 offset-3 PlayerForm'>
        <div className="form-group">
          <label htmlFor="image-url">Image URL:</label>
          <input
            type="text"
            className="form-control"
            id="image-url"
            placeholder="Enter image URL"
            value={this.state.playerImageUrl}
            onChange={this.urlChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="player-name">Board Name:</label>
          <input
            type="text"
            className="form-control"
            id="player-name"
            placeholder="Enter player name"
            value={this.state.playerName}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="player-position">Player Position:</label>
          <input
            type="text"
            className="form-control"
            id="player-position"
            placeholder="Enter player position"
            value={this.state.playerPosition}
            onChange={this.positionChange}
          />
        </div>
        <button className="btn btn-secondary" onClick={this.savePlayerEvent}>Save Player</button>
      </form>
    );
  }
}

export default PlayerForm;
