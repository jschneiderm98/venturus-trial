import React from 'react';
import './styles.css';
// import MyTeams from '../../components/MyTeams';
// import Top5 from '../../components/Top5';
import PickedPlayers from '../../components/PickedPlayers';

export default function Home() {
  return (
    <div className="Home">
      <PickedPlayers />
    </div>
  );
}
