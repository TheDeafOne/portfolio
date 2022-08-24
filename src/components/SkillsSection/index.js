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
  HadoopLogo,
  ReactLogo,
  JavascriptLogo,
  BigqueryLogo,
  MatlabLogo,
  GitLogo
} from '../../images';

const SkillsSections = () => {
  return (
    <SkillsContainer id='skills'>
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
            I have significant experience with processing data with spark. It was introduced to me through my coursework and I have since used it both academically and professionally with PySpark and GoogleCloud’s Dataproc service.
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
            MongoDB was used to introduced me to distributed data, and I became familiar with scalable applications through it. Whether it be for a backend database or for large scale data analysis, MongoDB is a tool I know well.
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
            Throughout my professional and academic career, I’ve gained multiple years of experience creating, maintaining, and working with MySQL and PostgreSQL. I am also familiar with pgAdmin and MySQL Workbench.
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
            I am proficient with both BigTable and BigQuery. Whether it be data analysis, machine learning, or working with a NoSQL Database, I am very comfortable using these tools that these services provide.
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
            I have used and am comfortable with many components of the Hadoop ecosystem, such as MapReduce, Apache Pig, and Apache Spark. These were the tools that introduced me to Big Data, and I know how to use them to their fullest.
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
            During my time at Bentley Systems I gained a significant amount of experience developing web applications with ReactJS and Node.js. I also have developed several personal projects with these tools.
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
            I’ve developed multiple full-stack applications, consisting of Javascript/Typescript, HTML, and CSS.  I also have experience with frameworks such as Angular and ReactJS. An example of my experience is Redsnail 3. 
          </SkillP>
        </Skill>
        <Skill>
          <LogoWrapper>
            <SkillLogo src={MatlabLogo}/>
          </LogoWrapper>
          <SkillTitle>
            MATLAB
          </SkillTitle>
          <SkillP>
            I've worked on multiple academic and professional projects involving machine learning and artificial intelligence. MATLAB was a large part of many of these projects, allowing me to quickly process, clean, and visualize data.
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
            Git has saved me an uncountable number of hours of rewriting code, and I’ve long been acquainted with the simplicities and intricacies that it holds.
          </SkillP>
        </Skill>
        


      </SkillsWrapper>
    </SkillsContainer>
  )
}

export default SkillsSections