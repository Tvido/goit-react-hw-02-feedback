import React from 'react';
import './Statistics.css';

const Statistic = ({ good, neutral, bad, total, percent }) => (
  <ul className="statistics__list">
    <li className="statistics__list-item">Good: {good}</li>
    <li className="statistics__list-item">Neutral: {neutral}</li>
    <li className="statistics__list-item">Bad: {bad}</li>
    <li className="statistics__list-item">Total: {total}</li>
    <li className="statistics__list-item">Positive percentage: {percent}%</li>
  </ul>
  // <>
  //   <p className="">Good: {good}</p>
  //   <p className="">Neutral: {neutral}</p>
  //   <p className="">Bad: {bad}</p>
  //   <p className="">Total: {total}</p>
  //   <p className="">Positive percentage: {percent}%</p>
  // </>
);

export default Statistic;
