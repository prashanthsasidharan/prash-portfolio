import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
// import LayerSvg from '../../images/layer.svg';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero, footer } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, resume } = hero;
  const { networks } = footer;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  useEffect(() => {
    // animates blob
    window.KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();
  });

  return (
    <section id="hero" className="jumbotron">
      <div className="blob-bg">
        <div className="spacer flip layer" />
        <svg
          className="blob-motion"
          id="visual"
          viewBox="0 0 960 540"
          width="960"
          height="540"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g transform="translate(450.7256843113689 283.4942824330989)">
            <path
              id="blob1"
              d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
              fill="#BB004B"
            />
          </g>
          <g
            transform="translate(509.54377535978017 281.49390864595887)"
            style={{ visibility: 'hidden' }}
          >
            <path
              id="blob2"
              d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
              fill="#BB004B"
            />
          </g>
        </svg>
        <div className="spacer layer" />
      </div>

      <Container>
        <div className="hero-details">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="hero-title">
              <h4>{title || `Hello, I'm `} </h4>
              <h1>
                {name || 'Name'}
              </h1>
              <h2> {subtitle || "I'm the Unknown Developer."}</h2>
            </div>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="hero-social-links">
              {networks &&
                networks.map((network) => {
                  const { id, name, url } = network;
                  return (
                    <a
                      key={id}
                      href={url || 'https://github.com/prashanthsasidharan'}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                    >
                      <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                    </a>
                  );
                })}
            </div>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {cta || 'Know more'}
                </Link>
              </span>

              {resume && (
                <span className="cta-btn cta-btn--hero">
                  {/* <Link to={resume} smooth duration={1000}>
                    Resume
                  </Link> */}
                  <a target="_blank" rel="noopener noreferrer" href={resume}>
                    Resume
                  </a>
                </span>
              )}
            </p>
          </Fade>
        </div>
        <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="code-card">
            <pre>
              1&nbsp;&nbsp;class <b>Person</b> {'{'}
            </pre>
            <pre>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() {'{'}</pre>
            <pre>
              3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = <b>Prashanth Sasidharan</b>;
            </pre>
            <pre>
              4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = <b>["DEV", "FITNESS"];</b>
            </pre>
            <pre>
              5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age ={' '}
              <b>{new Date().getFullYear() - 1998}</b>
            </pre>
            <pre>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'}'}</pre>
            <pre>7&nbsp;&nbsp;{'}'}</pre>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
