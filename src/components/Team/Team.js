import React from 'react';

import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';

import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

class Team extends React.Component {
  state = {
    players: [],
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

  setShowPlayerForm = () => {
    this.setState({ showPlayerForm: true });
  }

  render() {
    return (
      <div className='container'>
        <button className="btn btn-light" onClick={this.setShowPlayerForm}>Add a new Player</button>
        { this.state.showPlayerForm && <PlayerForm addPlayer={this.addPlayer} />}
        <div className='Team row'>
          { this.state.players.map((player) => <Player key={player.id} player={player} />) }
        </div>
      </div>
    );
  }
}

export default Team;
