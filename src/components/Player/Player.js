import React from 'react';
import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    setEditMode: PropTypes.func,
    setPlayerToEdit: PropTypes.func,
    deletePlayer: PropTypes.func,
  }

  setEditMode = (e) => {
    const { setEditMode, setPlayerToEdit, player } = this.props;
    e.preventDefault();
    setEditMode(true);
    setPlayerToEdit(player);
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  }

  render() {
    const { player } = this.props;
    return (
    <div className="Player col-4">
      <div className="card">
        <img src={player.imageUrl} className="card-img-top" alt={player.name} />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
          <button className="btn btn-danger" onClick={this.setEditMode}>Edit Player</button>
          <button className="btn btn-outline-danger" onClick={this.deletePlayerEvent}>x</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Player;
