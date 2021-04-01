import React from 'react';
import { MdDelete, MdShare, MdEdit } from 'react-icons/md';
import './styles.css';

export default function MyTeams() {
  const itens = [
    { name: 'Barcelona', description: 'Barcelona squad', display: false },
    { name: 'Real Madrid', description: 'Real Madrid squad', display: false },
    { name: 'Milan', description: 'Milan squad', display: false },
  ];

  return (
    <div className="Teams">
      <div className="Top">
        <span>My teams</span>
        <div className="Square">
          <span className="Plus" />
        </div>
      </div>
      <div className="ListComponent">
        <table>
          <thead>
            <tr>
              <th>
                <div className="TableHeaderText">
                  <span>Name</span>
                  <div className="arrowWrapper">
                    <span>&#9650;</span>
                    <span>&#9660;</span>
                  </div>
                </div>
              </th>
              <th>
                <div className="TableHeaderText">
                  <span>Description</span>
                  <div className="arrowWrapper">
                    <span>&#9650;</span>
                    <span>&#9660;</span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {itens && itens.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>
                  <div className="HoverField">
                    <span>{item.description}</span>
                    <div className="IconContainer">
                      <div className="DispHover"><MdDelete /></div>
                      <div className="DispHover"><MdShare /></div>
                      <div className="DispHover"><MdEdit /></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
