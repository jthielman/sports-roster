import React from 'react';

import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';

import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

class Team extends React.Component {
  state = {
    players: [],
    editMode: false,
    playerToEdit: {},
    showPlayerForm: false,
  }

  getPlayers = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => {
        this.setState({ players });
      })
      .catch((errFromTeam) => console.error(errFromTeam));
  }

  componentDidMount() {
    this.getPlayers();
  }

  addPlayer = (newPlayer) => {
    playerData.savePlayer(newPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ showPlayerForm: false });
      })
      .catch((errFromSavePlayer) => console.error(errFromSavePlayer));
  }

  updatePlayer = (playerId, updatedPlayer) => {
    playerData.updatePlayer(playerId, updatedPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ editMode: false, showPlayerForm: false });
      })
      .catch((err) => console.error('error from update player', err));
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showPlayerForm: true });
  }

  setPlayerToEdit = (player) => {
    this.setState({ playerToEdit: player });
  }

  setShowPlayerForm = () => {
    this.setState({ showPlayerForm: true });
  }

  deletePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => {
        this.getPlayers();
      })
      .catch((err) => console.error('error from deletePlayer', err));
  }

  hideForm = () => {
    this.setState({ showPlayerForm: false });
  }

  render() {
    return (
      <div className='container'>
        <button className="btn btn-light" onClick={this.setShowPlayerForm}>Add a new Player</button>
        { this.state.showPlayerForm && <PlayerForm addPlayer={this.addPlayer} editMode={this.state.editMode} playerToEdit={this.state.playerToEdit} updatePlayer={this.updatePlayer} hideForm={this.hideForm} />}
        <div className='Team row'>
          { this.state.players.map((player) => <Player key={player.id} player={player} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit} deletePlayer={this.deletePlayer} />) }
        </div>
      </div>
    );
  }
}

export default Team;
