import React from 'react';
import './styles.css';
import MyTeams from '../../components/MyTeams';
import Top5 from '../../components/Top5';
import PickedPlayers from '../../components/PickedPlayers';

export default function Home() {
  return (
    <div className="Home">
      <div className="Grid">
        <div className="TeamsComponent"><MyTeams /></div>
        <div className="Top5Component"><Top5 /></div>
        <div className="PickedComponent"><PickedPlayers /></div>
      </div>
    </div>
  );
}
