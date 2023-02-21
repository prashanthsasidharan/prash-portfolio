import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import ReactSvg from '../../images/react.svg';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Row className="skills-wrapper">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="container rounded">
                <div className="slider skills">
                  <div className="logos">
                    {skills &&
                      skills.map((skill) => {
                        const { id, name, url } = skill;
                        return (
                          <a
                            key={id}
                            href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label={name}
                          >
                            <ReactSvg />
                          </a>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
