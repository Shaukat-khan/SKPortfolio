import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Shaukat Khan Portfolio
        </SectionTitle>
        <SectionText>
        I am a recent graduate looking for new grad or internship roles as a software engineer. I have 3 years of experience which includes my internship, school work and side project. Feel free to contact me through my email, linkedin or my phone number!
        </SectionText>
        <Button onClick= {() => window.location = 'https://www.linkedin.com/in/shaukat-khan-703081126/'} > Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;