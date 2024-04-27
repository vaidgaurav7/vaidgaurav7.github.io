import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
.flex-container {
  display: flex;
  margin-top: 50px;
  flex-direction: row;
}

@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
    flex: 2;
  }
}

    skillz__category {
      width: 47%;
      margin-right: 5px;
      margin-bottom: 25px;
    }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(1, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Python', 'AWS', 'Docker & Kubernetes', 'JavaScript (ES6+)', 'React', 'Node.js'];
  const skillsHashLang = {  'LANGUAGES': ['Python', 'JavaScript (ES6+)'] };
  const skillsHashFrameworks = {  'FRAMEWORKS': ['Django', 'Node', 'React'] };
  const skillsHashCloud = {  'CLOUD': ['AWS', 'Azure', 'GCP'] };
  const skillsHashDatabase = { 'DATABASES': ['PostgreSQL', 'MySQL'] }; 
  const skillsHashCICD = { 'CI/CD': ['Docker', 'Jenkins', 'Github Actions', 'Kubernetes'] }; 
  const skillsHashTools = { 'CI/CD': ['Docker', 'Jenkins', 'Github Actions', 'Kubernetes'] }; 
 
  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            Hello! I'm Gaurav, and I like to make stuff that lives on the Internet.
            When I started working at Tradeindia.com in 2016, 
            interest in software development grew more pronounced !
            </p>

            <p>
              Fast-forward to today, and I’ve had worked for 
              Tradeindia - <a href="https://www.tradeindia.com/">a business to business company</a>,{' '}
              afterwards joined Xebia - <a href="https://www.xebia.com/">a Leading global technology consultancy company</a>,{' '}
               and got privilege to work with these clients{' '}
              <a href="#"> a multinational oil and gas company</a>,{' '}
              <a href="#">a well renowned university</a>,{' '}
              <a href="#">a leading financial service company</a>, and{' '}
               and also for a variety of clients.
            </p>

            <p>
              I also recently{' '}
              <a href="https://www.newline.co/courses/build-a-spotify-connected-app">
                launched a course
              </a>{' '}
              that covers everything you need to build a web app with the Spotify API using Node
              &amp; React.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
      <div className="inner">
        <StyledText>
        <div className="flex-container">
              <div style={{width: '50%', marginRight: '40px', marginBottom: '25px'}}>
              {Object.keys(skillsHashLang)}
              <ul className='skills-list'>
              {Object.keys(skillsHashLang) && skillsHashLang[Object.keys(skillsHashLang)[0]].map((skill, i) => <li key={i}>{skill}</li>)}

              </ul>
            
              </div>
              <div style={{width: '50%', marginRight: '40px', marginBottom: '25px'}}>
              {Object.keys(skillsHashFrameworks)}
              <ul className='skills-list'>
              {Object.keys(skillsHashFrameworks) && skillsHashFrameworks[Object.keys(skillsHashFrameworks)[0]].map((skill, i) => <li key={i}>{skill}</li>)}

              </ul>
            
              </div>
              <div style={{width: '50%', marginRight: '40px', marginBottom: '25px'}}>
              {Object.keys(skillsHashCloud)}
              <ul className='skills-list'>
              {Object.keys(skillsHashCloud) && skillsHashCloud[Object.keys(skillsHashCloud)[0]].map((skill, i) => <li key={i}>{skill}</li>)}

              </ul>
            
              </div>
              <div style={{width: '50%', marginRight: '40px', marginBottom: '25px'}}>
              {Object.keys(skillsHashDatabase)}
              <ul className='skills-list'>
              {Object.keys(skillsHashDatabase) && skillsHashDatabase[Object.keys(skillsHashDatabase)[0]].map((skill, i) => <li key={i}>{skill}</li>)}

              </ul>
            
              </div>

              <div style={{width: '50%', marginRight: '40px', marginBottom: '25px'}}>
              {Object.keys(skillsHashCICD)}
              <ul className='skills-list'>
              {Object.keys(skillsHashCICD) && skillsHashCICD[Object.keys(skillsHashCICD)[0]].map((skill, i) => <li key={i}>{skill}</li>)}

              </ul>
            
              </div>
              <div style={{width: '50%', marginRight: '40px', marginBottom: '25px'}}>
              {Object.keys(skillsHashCICD)}
              <ul className='skills-list'>
              {Object.keys(skillsHashCICD) && skillsHashCICD[Object.keys(skillsHashCICD)[0]].map((skill, i) => <li key={i}>{skill}</li>)}

              </ul>
            
              </div>
         
          </div>

        </StyledText>
        </div>
    </StyledAboutSection>
  );
};

export default About;
