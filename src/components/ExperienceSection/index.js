import React, {useState, useEffect} from 'react'
import {
  ExperienceContainer,
  Timeline,
  ExperiencesColumn,
  Experience,
  Info,
  Bar,
  Point,
  PointRow,
  SubPointBlock,
  SubPointRow,
  SubPoint,
  SummaryBuffer,
  BlockTitle,
  BlockList,
  BlockNote,
  NoteWrapper,
  NotePoint,
  BlockIntro,
  BlockCompany,
  BlockDuration,
  ExperienceH1,
  ExperienceH2,
} from './ExperienceElements';

import { 
  BentleyLogo,
  APLLogo,
  GCCLogo,
  GCCLogo2,
  PrevostLogo,
  RVRLogo,
  KWLogo
} from '../../images';

const ExperienceSection = () => {
  const changeActiveExperience = (experience, height) => {
    console.log('experience: ',experience)
    console.log('height: ', height)
    if (document.getElementById(experience).style.visibility === 'hidden') {
      document.getElementById(experience).style = `visibility: visible; height: ${height}px; opacity: 1;`
    } else {
      document.getElementById(experience).style = `visibility: hidden; height: 0px; opacity: 0;`;
    }
  } 

  const toggleSubPoints = (subWrapper, subPoints) => {
    if (document.getElementById(subWrapper).style.visibility !== 'visible') {
      document.getElementById(subWrapper).style = 'visibility: visible;';
      
      for (const point of subPoints) {
        document.getElementById(point).style = `height:50px; visibility: visible; opacity: 1;`;
      }
    } else {
      for (const point of subPoints) {
        document.getElementById(point).style = 'height: 0px; opacity: 0;'
        const pointInfo = point + 'Info';
        if (document.getElementById(pointInfo).style.visibility !== 'hidden') {
          document.getElementById(pointInfo).style = 'visibility: hidden; height: 0px; opacity: 0;';
        }
      }
      document.getElementById(subWrapper).style = 'visibility: hidden;';
    }
  
  }

  useEffect(() => {
    document.getElementById('experience1').style = 'visibility: visible; height: 200px; opacity: 1;';
  }, [])

  function BlockSummary({title, href, at, info}) {
    return (
      <BlockIntro>
        <BlockTitle
          onClick={() => changeActiveExperience(info.id, info.height)}
        >
          {title}
        </BlockTitle>
        <BlockCompany href={href} target='_blank'> @ {at}</BlockCompany>
      </ BlockIntro>
    )
  }

  function BlockInfo({id, duration, notes}) {
    const parsedNotes = notes.map((note) => (
      <NoteWrapper key={note}>
        <NotePoint />
        <BlockNote>
          {note}
        </BlockNote>
      </NoteWrapper>
    ));

    return (
      <Info 
        id={id}
        style={{visibility: 'hidden'}}>
        <BlockDuration>
          {duration}
        </BlockDuration>
        <BlockList>
          {parsedNotes}
        </BlockList>
      </Info>
    )
  }

  function ExperienceBlock({ id, logo, expInfo }) {
    return (
      <Experience>
        <PointRow>
          <Point 
            src={logo}
            onClick={() => changeActiveExperience(id, expInfo.height)}
          />
          <BlockSummary 
            title={expInfo.title} 
            href={expInfo.href} 
            at={expInfo.at} 
            info={{id: id, height: expInfo.height}}
          />
        </PointRow>
        <BlockInfo 
          id={id} 
          duration={expInfo.duration} 
          notes={expInfo.notes}
        />
      </Experience>
    )
  }

  function MultiExperienceBlock({ id, logo, title, experiences }) {
    let experienceIds = []
    const subPoints = experiences.map((experience) => {
      experienceIds.push(experience.id);
      return (
        <Experience 
          key={experience.id}>
          <SubPointRow
            id={experience.id}>
            <SubPoint 
              src={experience.logo}
              onClick={() => changeActiveExperience(experience.id + 'Info', experience.height)}
            />
            <BlockSummary 
              title={experience.title} 
              href={experience.href} 
              at={experience.at}
              info={{id: experience.id + 'Info', height: experience.height}}
            />
          </SubPointRow>
          <BlockInfo 
            id={experience.id + 'Info'} 
            duration={experience.duration} 
            notes={experience.notes}
          />
        </Experience>
      )
    })
    
    return (
      <>
        <Experience>
          <PointRow>
            <Point 
              src={logo}
              onClick={() => toggleSubPoints(id, experienceIds)}
            />
            <BlockTitle
              onClick={() => toggleSubPoints(id, experienceIds)}
            >
              {title}
            </BlockTitle>
          </PointRow>
        </Experience>

        <SubPointBlock
          id={id}>
          {subPoints}
        </SubPointBlock>
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
        <Bar />
        <ExperiencesColumn>
          <ExperienceBlock 
            id='experience1' 
            logo={BentleyLogo} 
            expInfo={
              {
                title: 'Software Engineer Intern',
                at: 'Bentley Systems',
                href: '//www.bentley.com/en',
                duration: 'May 2022 - Present',
                height: 200,
                notes: [
                  'Assisted in the development of ProjectWise SAM, an infrastructure software for managing construction assets.',
                  'Produced front and back end unit and integration tests alongside application development.',
                  'Created automated test management system to assist in project data management.'
                ]
              }
            }
          />
          <ExperienceBlock 
            id='experience2' 
            logo={GCCLogo} 
            expInfo={
              {
                title: 'Tech Assistant',
                at: 'Grove City College',
                href: '//www.gcc.edu/',
                duration: 'September 2021 - April 2022',
                height: 150,
                notes: [
                  'Aided in the development of RedSnail, a software for all the necessary aspects of running a mailroom.',
                  'Developed analytics page for package data, allowing for efficient workflow changes.',
                ]
              }
            }
          />

          <ExperienceBlock 
            id='experience3' 
            logo={APLLogo} 
            expInfo={
              {
                title: 'Software Engineer Intern',
                at: 'Johns Hopkins APL',
                href: '//www.jhuapl.edu/',
                duration: 'May - October 2021',
                height: 150,
                notes: [
                  'Researched and developed various methods for handling time-sensitive jobs with AI Scheduling and Planning.',
                  'Created ground-up framework for parsing and scheduling job data.',
                  'Simulated and presented multiple automated ship runs using my Scheduling AI.'
                ]
              }
            }
          />

          <MultiExperienceBlock 
            id='multiExperiences' 
            logo={KWLogo} 
            title='Non-technical work' 
            experiences={
              [
                {
                  id: 'experience4',
                  title: 'Mailroom Clerk',
                  at: 'Grove City College',
                  href: 'href',
                  duration: 'April 2021 - Present',
                  logo: GCCLogo2,
                  height: 80,
                  notes: [
                    'Accepted, processed, sorted, and delivered incoming and interoffice mail to the proper recipients.'
                  ]
                },
                {
                  id: 'experience5',
                  title: 'General Laborer',
                  at: 'Prevost Construction',
                  href: '//mobile.twitter.com/prevostconstruc',
                  duration: 'May - August 2020',
                  logo: PrevostLogo,
                  height: 80,
                  notes: [
                    'Assisted in the construction and destruction of portables for public schools within the local tri-state area.'
                  ]
                },
                {
                  id: 'experience6',
                  title: 'Kitchen Staff',
                  at: 'River Valley Ranch',
                  href: '//www.rivervalleyranch.com',
                  duration: 'June 2017 - June 2020',
                  logo: RVRLogo,
                  height: 80,
                  notes: [
                    'Washed wares for over 300 people, and assisted in cleaning, food preparation, and serving.'
                  ]
                }
              ]
            }/>
        </ExperiencesColumn>
      </Timeline>
    </ExperienceContainer>
  )
}

export default ExperienceSection