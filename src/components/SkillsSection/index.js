import React from 'react'
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsH1,
  Skill,
  SkillLogo,
  SkillTitle,
  SkillP
} from './SkillsElements'

import JavaLogo from '../../images/java-icon.svg'

const SkillsSections = () => {
  return (
    <SkillsContainer>
      <SkillsH1>
        My Skills
      </SkillsH1>
      <SkillsWrapper>
        <Skill>
          <SkillLogo src={JavaLogo}/>
          <SkillTitle>
            Java
          </SkillTitle>
          <SkillP>
            Over the past three years, I’ve had extensive experience with Java throughout my coursework, research, and personal projects, including a 3D cellular automata visualizer and a word processing application. I also am closely familiar with the JUnit testing framework.
          </SkillP>
        </Skill>
        <Skill>
          <SkillLogo />
          <SkillTitle>
            Python
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <SkillLogo />
          <SkillTitle>
            C & C++
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <SkillLogo />
          <SkillTitle>
            title
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <SkillLogo />
          <SkillTitle>
            PySpark
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <SkillLogo />
          <SkillTitle>
            MongoDB
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <SkillLogo />
          <SkillTitle>
            MySQL & PostgreSQL
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <SkillLogo />
          <SkillTitle>
            BigTable & BigQuery
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <SkillLogo />
          <SkillTitle>
            ReactJS & Node.js
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <SkillLogo />
          <SkillTitle>
            Typescript, HTML, and CSS
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <SkillLogo />
          <SkillTitle>
            MATLAB
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <SkillLogo />
          <SkillTitle>
            Git
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        


      </SkillsWrapper>
    </SkillsContainer>
  )
}

export default SkillsSections