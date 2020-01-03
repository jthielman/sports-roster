import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlayersByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const demPlayers = result.data;
      const players = [];
      if (demPlayers != null) {
        Object.keys(demPlayers).forEach((playerId) => {
          const newPlayer = demPlayers[playerId];
          newPlayer.id = playerId;
          players.push(newPlayer);
        });
      }
      console.log(players);
      resolve(players);
    })
    .catch((err) => reject(err));
});

export default { getPlayersByUid };
