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
        console.log(players);
        this.setState({ players });
      })
      .catch((errFromTeam) => console.error(errFromTeam));
  }

  componentDidMount() {
    this.getPlayers();
  }

  render() {
    return (
      <div className='Team'>
        If you can't work as a team, you're all fired!
        { this.state.players.map((player) => <Player key={player.id} player={player} />) }
      </div>
    );
  }
}

export default Team;
