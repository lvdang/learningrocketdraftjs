import React from 'react';

export const SearchHighlight = (props) => {
  console.log('SearchHighlight', props);
  return <span style={{color: 'blue'}}>{props.children}</span>
};