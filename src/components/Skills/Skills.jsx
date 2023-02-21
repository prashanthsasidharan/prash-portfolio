import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

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
                            <i className={`fa fa-${name || 'refresh'} fa-inverse fa-3x fab`} />
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
