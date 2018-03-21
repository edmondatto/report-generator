import React from 'react';
import Avatar from '../img/person-avatar.png'

const GraphAvatar = props =>
  <div id="graph-avatar">
    <img src={Avatar} alt="A person avatar" width={5} height={11}/>
    <span id="gravatar-span-1"> x</span>
    <span id="gravatar-span-2"> {props.numberAuthenticatedDaily}</span>
  </div>;

export default GraphAvatar;