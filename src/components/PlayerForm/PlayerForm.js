import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';
import playerShape from '../../helpers/propz/playerShape';
// import playerShape from '../../helpers/propz/playerShape';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
    playerToEdit: playerShape.playerShape,
    editMode: PropTypes.bool,
    updatePlayer: PropTypes.func,
    hideForm: PropTypes.func,
  }

  state = {
    playerImageUrl: '',
    playerName: '',
    playerPosition: '',
  }

  componentDidMount() {
    const { playerToEdit, editMode } = this.props;
    if (editMode) {
      this.setState({ playerImageUrl: playerToEdit.imageUrl, playerName: playerToEdit.name, playerPosition: playerToEdit.position });
    }
  }

  componentDidUpdate(prevProps) {
    const { playerToEdit } = this.props;
    if ((prevProps.playerToEdit.id !== playerToEdit.id) && this.props.editMode) {
      this.setState({ playerImageUrl: playerToEdit.imageUrl, playerName: playerToEdit.name, playerPosition: playerToEdit.position });
    }
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

  updatePlayerEvent = (e) => {
    e.preventDefault();
    const { updatePlayer, playerToEdit } = this.props;
    const updatedPlayer = {
      imageUrl: this.state.playerImageUrl,
      name: this.state.playerName,
      position: this.state.playerPosition,
      uid: playerToEdit.uid,
    };
    updatePlayer(playerToEdit.id, updatedPlayer);
  }

  hideFormEvent = (e) => {
    this.props.hideForm();
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
    const { editMode } = this.props;

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
          <label htmlFor="player-name">Player Name:</label>
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
        {
          (editMode) ? (<button className="btn btn-warning" onClick={this.updatePlayerEvent}>Update Player</button>)
            : (<button className="btn btn-secondary" onClick={this.savePlayerEvent}>Save Player</button>)
        }
        <button className="btn btn-outline-dark" onClick={this.hideForm}>Never mind</button>
      </form>
    );
  }
}

export default PlayerForm;
