import styled, { keyframes, css } from 'styled-components';

interface IconProps {
  active: boolean;
}

const animateHeart = keyframes`
  0% {
    transform: scale(0.2);
  }
  40% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const animateHeartOut = keyframes` 0% {
  transform: scale(1.4);
}
100% {
  transform: scale(1);
}`;

const contentIcon = css`
  path {
    transform: scale(0.2);
    fill: #e2264d;
    animation: ${animateHeart} 0.3s linear forwards 0.25s;
  }

  #grp1 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }

  #grp1 #oval1 {
    transform: scale(0) translate(0, -3rem);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }

  #grp1 #oval2 {
    transform: scale(0) translate(1rem, -5rem);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }

  #grp2 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }

  #grp2 #oval1 {
    transform: scale(0) translate(3rem, -1.5rem);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }
  #grp2 #oval2 {
    transform: scale(0) translate(6rem, -1.5rem);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }
  #grp3 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }
  #grp3 #oval1 {
    transform: scale(0) translate(3rem, 0);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }
  #grp3 #oval2 {
    transform: scale(0) translate(6rem, 1rem);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }
  #grp4 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }
  #grp4 #oval1 {
    transform: scale(0) translate(3rem, 1.5rem);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }
  #grp4 #oval2 {
    transform: scale(0) translate(4rem, 5rem);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }
  #grp5 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }
  #grp5 #oval1 {
    transform: scale(0) translate(-1rem, 2rem);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }
  #grp5 #oval2 {
    transform: scale(0) translate(-6rem, 3rem);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }
  #grp6 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }
  #grp6 #oval1 {
    transform: scale(0) translate(-3rem, 0);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }

  #grp6 #oval2 {
    transform: scale(0) translate(-6rem, -0.5rem);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }

  #grp7 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }

  #grp7 #oval1 {
    transform: scale(0) translate(-3rem, -1.5rem);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }

  #grp7 #oval2 {
    transform: scale(0) translate(-5.5rem, -3rem);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }
`;

const HeartIcon = styled.svg<IconProps>`
  cursor: pointer;
  width: 5rem;

  position: absolute;
  right: -1rem;
  top: -1rem;

  #heart {
    transform-origin: center;
    animation: ${props => (props.active ? animateHeartOut : 'none')};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
  }

  ${props => props.active && contentIcon};
`;

export { HeartIcon };
