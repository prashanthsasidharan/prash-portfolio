import React, { useContext, useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import SkillsImg from '../Image/SkillsImg';
import SkillsImgMobile from '../Image/SkillsImgMobile';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

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
                        const { id, img, url, title } = skill;
                        return (
                          <a
                            key={id}
                            href={url || 'https://github.com/prashanthsasidharan'}
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label={img}
                            className="d-inline-block"
                          >
                            {isDesktop ? (
                              <SkillsImg alt={title} filename={img} />
                            ) : (
                              <SkillsImgMobile alt={title} filename={img} />
                            )}
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
