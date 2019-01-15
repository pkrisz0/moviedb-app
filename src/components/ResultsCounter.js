import React from 'react';

export default function ResultsCounter(props){
  return(
      <div style={{width: '100px', display: 'inline-block', margin: '10px'}}>
        <p> <strong> {props.count} </strong> MOVIES </p>
      </div>
  );
}