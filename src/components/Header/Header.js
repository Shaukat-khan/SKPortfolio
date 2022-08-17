import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiCurlyWing } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom: '20;' }}>
          <GiCurlyWing size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>TimeLine</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Shaukat-khan">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/shaukat-khan-703081126/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;