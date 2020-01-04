import React from 'react';

import Player from '../Player/Player';

import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

class Team extends React.Component {
  state = {
    players: [],
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

  render() {
    return (
      <div className='container'>
        <div className='Team row'>
          { this.state.players.map((player) => <Player key={player.id} player={player} />) }
        </div>
      </div>
    );
  }
}

export default Team;
