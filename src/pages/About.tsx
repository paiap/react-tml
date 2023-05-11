import React from 'react';
import {Button} from 'antd'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <Button type="default" ><Link to={'/'}>hello word</Link></Button>
    </div>
  );
}

export default About;
