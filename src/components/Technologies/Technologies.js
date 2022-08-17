import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
    Proficiency: Python, Java, C, C++, JavaScript, React Native, Node.JS. Git, HTML, CSS, Windows 
    <SectionText></SectionText>
    (Familiar): SQL, MySQL Socket Program., MongoDB, Azure, Rest APIs
    <SectionText>    </SectionText>
    Technology: Eclipse, NetBeans, Code Blocks, XCode, VS Code, AWS, Jenkins
    </SectionText>
    
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;