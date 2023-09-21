import React from 'react';
import { AboutMe } from './AboutMe';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { EdLang } from './EdLang';

export const CVModule = () => {
  return (
    <>
      <AboutMe />
      <Skills />
      <Experience />
      <EdLang />
    </>
  );
};
