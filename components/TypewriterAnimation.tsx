'use client';

import { TypeAnimation } from 'react-type-animation';

export function TypewriterAnimation() {
  return <TypeAnimation sequence={[
    'Software Developer', 2000,
    'Full Stack Web Developer', 2000,
    'Problem Solver', 2000,
  ]}
    wrapper='span'
    speed={50}
    repeat={Infinity}
  />;
}
