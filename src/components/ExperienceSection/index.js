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
  NoteWrapper,
  NotePoint,
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
      document.getElementById(experience).style = 'visibility: visible; height: 200px; opacity: 1;'
    } else {
      document.getElementById(experience).style = 'visibility: hidden; height: 0px; opacity: 0;';
    }
  } 

  useEffect(() => {
    document.getElementById('experience1').style = 'visibility: visible; height: 200px; opacity: 1;';
  }, [])

  function ExperienceBlock({ id, logo, expInfo }) {
    const notes = expInfo.notes.map((note) => (
      <NoteWrapper>
        <NotePoint />
        <BlockNote>
          {note}
        </BlockNote>
      </NoteWrapper>
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
                'Assisted in the development of ProjectWise SAM, an infrastructure software for managing construction assets.',
                'Produced front and back end unit and integration tests alongside application development.',
                'Created automated test management system to assist in project data management.'
              ]
            }
          }
        />
        <ExperienceBlock 
          id='experience3' 
          logo={GCCLogo} 
          expInfo={
            {
              title: 'Tech Assistant',
              at: 'Grove City College',
              href: '//www.gcc.edu/',
              duration: 'September 2021 - April 2022',
              notes: [
                'Aided in the development of RedSnail, a software for all the necessary aspects of running a mailroom.',
                'Developed analytics page for package data, allowing for efficient workflow changes.',
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
              duration: 'May - October 2021',
              notes: [
                'Researched and developed various methods for handling time-sensitive jobs with AI Scheduling and Planning.',
                'Created ground-up framework for parsing and scheduling job data.',
                'Simulated and presented multiple automated ship runs using my Scheduling AI.'
              ]
            }
          }
        />
        

      </Timeline>
    </ExperienceContainer>
  )
}

export default ExperienceSection