import React from 'react'
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsH1,
  Skill,
  LogoWrapper,
  SkillLogo,
  SkillTitle,
  SkillP
} from './SkillsElements'

import { 
  JavaLogo,
  PythonLogo,
  CppLogo,
  SparkLogo,
  MongodbLogo1,
  MysqlLogo1,
  PostgresqlLogo,
  BigtableLogo,
  BigqueryLogo,
  HadoopLogo,
  ReactLogo,
  NodejsLogo,
  JavascriptLogo,
  HtmlLogo,
  CssLogo,
  MatlabLogo,
  GitLogo
} from '../../images';

const SkillsSections = () => {
  return (
    <SkillsContainer>
      <SkillsH1>
        My Skills
      </SkillsH1>
      <SkillsWrapper>
        <Skill>
          <LogoWrapper>
            <SkillLogo src={JavaLogo}/>
          </LogoWrapper>
          <SkillTitle>
            Java
          </SkillTitle>
          <SkillP>
            Over the past three years, I’ve had extensive experience with Java throughout my coursework, research, and personal projects, including a 3D cellular automata visualizer and a word processing application. It is a language I am very comfortable with. I am also closely familiar with the JUnit testing framework.
          </SkillP>
        </Skill>
        <Skill>
          <LogoWrapper>
            <SkillLogo src={CppLogo}/>
          </LogoWrapper>
          <SkillTitle>
            C & C++
          </SkillTitle>
          <SkillP>
          Used to introduce parallel computing in my coursework, C and C++ are some of my favorite languages to build elegant and efficient programs with. I have a year of experience with both and am familiar with interfaces and models such as pthreads and OpenMP. 
          </SkillP>
        </Skill>
        <Skill>
          <LogoWrapper>
            <SkillLogo src={PythonLogo}/>
          </LogoWrapper>
          <SkillTitle>
            Python
          </SkillTitle>
          <SkillP>
          Being one of the first programming languages I got my hands on, I have a wide breadth of experience coding with Python and many of its libraries. From machine learning with TensorFlow to data analytics with NumPy, Pandas, and SciPy, Python remains one of my favorite tools.
          </SkillP>
        </Skill>
        <Skill>
          <LogoWrapper>
            <SkillLogo src={SparkLogo} />
          </LogoWrapper>
          <SkillTitle>
            Spark
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <LogoWrapper>
            <SkillLogo src={MongodbLogo1} />
          </LogoWrapper>
          <SkillTitle>
            MongoDB
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <LogoWrapper>
            <SkillLogo src={MysqlLogo1} />
          </LogoWrapper>
          <SkillTitle>
            MySQL, PostgreSQL
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <LogoWrapper>
            <SkillLogo src={BigqueryLogo}/>
          </LogoWrapper>
          <SkillTitle>
            BigTable, BigQuery
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <LogoWrapper>
            <SkillLogo src={HadoopLogo}/>
          </LogoWrapper>
          <SkillTitle>
            Hadoop
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <LogoWrapper>
            <SkillLogo src={ReactLogo}/>
          </LogoWrapper>
          <SkillTitle>
            ReactJS, Node.js
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <LogoWrapper>
            <SkillLogo src={JavascriptLogo}/>
          </LogoWrapper>
          <SkillTitle>
            JavaScript, HTML, and CSS
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <LogoWrapper>
            <SkillLogo src={MatlabLogo} style={{height:"40%", width: "40%"}}/>
          </LogoWrapper>
          <SkillTitle>
            MATLAB
          </SkillTitle>
          <SkillP>
            paragraph
          </SkillP>
        </Skill>
        <Skill>
          <LogoWrapper>
            <SkillLogo src={GitLogo}/>
          </LogoWrapper>
          <SkillTitle>
            Git
          </SkillTitle>
          <SkillP>
            Git has saved me an uncountable number of hours of rewriting, and I’ve long been acquainted with the simplicities and intricacies that it holds.
          </SkillP>
        </Skill>
        


      </SkillsWrapper>
    </SkillsContainer>
  )
}

export default SkillsSections