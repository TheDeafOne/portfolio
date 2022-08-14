import React, {useState, useEffect} from 'react'
import {
  ExperienceContainer,
  Timeline,
  Experience,
  Info,
  Bar,
  Point,
  PointRow,
  SummaryBuffer,
  BlockTitle,
  BlockList,
  BlockNote,
  BlockCompany,
  BlockDuration,
  ExperienceH1,
  ExperienceH2,
  Line
} from './ExperienceElements';

import { 
  BentleyLogo,
  APLLogo,
  GCCLogo
} from '../../images';
const ExperienceSection = () => {
  const changeActiveExperience = async (experience) => {
    if (document.getElementById(experience).style.visibility === 'hidden') {
      document.getElementById(experience).style = 'visibility: visible; height: 200px;'
    } else {
      document.getElementById(experience).style = 'visibility: hidden; height: 0px;';
    }
  } 

  useEffect(() => {
    document.getElementById('experience1').style = 'visibility: visible; height: 200px;';
  }, [])

  function ExperienceBlock({ id, logo, expInfo }) {
    const notes = expInfo.notes.map((note) => (
      <BlockNote>{note}</BlockNote>
    ));
    return (
      <>
        <Bar>
          <PointRow>
            <Point 
              src={logo}
              onClick={() => changeActiveExperience(id)}
            />
            <BlockTitle>
              {expInfo.title}
              <b> <BlockCompany href={expInfo.href} target='_blank'> @ {expInfo.at}</BlockCompany></b>
            </BlockTitle>
          </PointRow>
        </Bar>
        <Experience>   
          <SummaryBuffer />
          <Info id={id}>
            <BlockDuration>
              {expInfo.duration}
            </BlockDuration>
            <BlockList>
              {notes}
            </BlockList>
          </Info>
        </Experience>
      </>
    )
  }

  return (
    <ExperienceContainer id='experience'>
      <ExperienceH1>
        Experience
      </ExperienceH1>
      <ExperienceH2>
        Some of the amazing people I've worked with
      </ExperienceH2>
      <Timeline>
        <ExperienceBlock 
          id='experience1' 
          logo={BentleyLogo} 
          expInfo={
            {
              title: 'Software Engineer Intern',
              at: 'Bentley Systems',
              href: '//www.bentley.com/en',
              duration: 'May 2022 - Present',
              notes: [
                'shit',
                'fuck'
              ]
            }
          }
        />
        <ExperienceBlock 
          id='experience2' 
          logo={APLLogo} 
          expInfo={
            {
              title: 'Software Engineer Intern',
              at: 'Johns Hopkins APL',
              href: '//www.jhuapl.edu/',
              notes: [
                ''
              ]
            }
          }
        />
        <ExperienceBlock 
          id='experience3' 
          logo={GCCLogo} 
          expInfo={
            {
              title: 'Mailroom Clerk',
              at: 'Grove City College',
              href: '//www.gcc.edu/',
              notes: [
                ''
              ]
            }
          }
        />

      </Timeline>
    </ExperienceContainer>
  )
}

export default ExperienceSection