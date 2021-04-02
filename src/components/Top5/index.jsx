import React from 'react';
import './styles.css';

export default function Top5() {
  const HighestTeams = [
    { name: 'Inter Milan', avg: 31.9 },
    { name: 'APOEL Nicosia', avg: 31.7 },
    { name: 'AC Milan', avg: 31.6 },
    { name: 'Besiktas JK', avg: 31.4 },
    { name: 'Olympiacos Piraeus', avg: 31.3 },
  ];
  const LowestTeams = [
    { name: 'Zalgiris Vilnius', avg: 21.1 },
    { name: 'Arsenal FC', avg: 21.6 },
    { name: 'Ajax Amsterdam', avg: 22.0 },
    { name: 'FC Nantes', avg: 22.1 },
    { name: 'CSKA Moskow', avg: 22.5 },
  ];
  return (
    <div className="Top5">
      <div className="ComponentHeader">
        Top5
      </div>
      <div className="ComponentBody">
        <div className="Highest">
          <span>Highest avg age</span>
          <div className="ItemList">
            <table>
              {HighestTeams && HighestTeams.map((team) => (
                <tr>
                  <div className="Item">
                    <td>{team.name}</td>
                    <td>{team.avg}</td>
                  </div>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div className="Lowest">
          <span>Lowest avg age</span>
          <div className="ItemList">
            <table>
              {LowestTeams && LowestTeams.map((team) => (
                <tr>
                  <div className="Item">
                    <td>{team.name}</td>
                    <td>{team.avg}</td>
                  </div>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
