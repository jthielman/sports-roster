import React from 'react';

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
      <div className='Team'>If you can't work as a team, you're all fired!</div>
    );
  }
}

export default Team;
