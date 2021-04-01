import React from 'react';
import './styles.css';

export default function PickedPlayers() {
  return (
    <div className="ComponentBody">
      <div className="Most">
        <span className="PickedText">Most Picked Player</span>
        <div className="Player">
          <div className="OutsideCircle">
            <div className="PickCircle">
              <span className="PickInitials">CR</span>
            </div>
          </div>
          <span>75%</span>
        </div>
      </div>
      <div className="Middle">
        <div />
      </div>
      <div className="Least">
        <span className="PickedText">Least Picked Player</span>
        <div className="Player">
          <div className="OutsideCircle">
            <div className="PickCircle">
              <span className="PickInitials">LM</span>
            </div>
          </div>
          <span>25%</span>
        </div>
      </div>
    </div>
  );
}
