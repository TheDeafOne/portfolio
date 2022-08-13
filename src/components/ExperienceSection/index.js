import React, {useState, useEffect} from 'react'
import {
  ExperienceContainer,
  Timeline,
  Experience,
  Info,
  Date,
  Bar,
  Point,
  PointRow
} from './ExperienceElements';
const ExperienceSection = () => {
  const changeActiveExperience = async (experience) => {
    if (document.getElementById(experience).style.height === '0px') {
      document.getElementById(experience).style.height = '200px';
    } else {
      document.getElementById(experience).style.height = '0px';
    }
  } 

  useEffect(() => {
    document.getElementById('experience1').style.height = '200px';
  }, [])

  return (
    <ExperienceContainer id='experience'>
      <Timeline>
        <Bar>
          <PointRow>
            <Point 
              onClick={() => changeActiveExperience('experience1')}
            />
            <Date>
              March 2022 - Present
            </Date>
          </PointRow>
        </Bar>
        <Experience>
          
          <Info id='experience1'>

          </Info>
        </Experience>
        <Bar>
          <PointRow>
            <Point
              onClick={() => changeActiveExperience('experience2')} 
            />
            <Date>
                May 2021 - October 2021
            </Date>
          </PointRow>
        </Bar>

        <Experience>
          <Info id='experience2'/>
          
        </Experience>
        <Bar>
          <PointRow>
            <Point
              onClick={() => changeActiveExperience('experience3')} 
            />
            <Date>
                May 2021 - October 2021
            </Date>
          </PointRow>
        </Bar>

        <Experience>
          <Info id='experience3'/>
          
        </Experience>
        <Bar>
          <PointRow>
            <Point
              onClick={() => changeActiveExperience('experience4')} 
            />
            <Date>
                May 2021 - October 2021
            </Date>
          </PointRow>
        </Bar>

        <Experience>
          <Info id='experience4'/>
          
        </Experience>

      </Timeline>
    </ExperienceContainer>
  )
}

export default ExperienceSection