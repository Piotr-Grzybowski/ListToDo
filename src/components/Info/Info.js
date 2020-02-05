import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { info } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={info.title} image={info.image}/>
    <h2>{info.subtitle}</h2>
    <p>{info.description}</p>
  </Container>
);

export default Info;