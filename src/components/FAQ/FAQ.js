import React from 'react';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={settings.faq.title} imgSrc={settings.faq.image}/>
    <p>{settings.faq.text}</p>
  </Container>
);

export default FAQ;
