import type { NextPage } from 'next';
import { FunctionComponent } from 'react';
import styles from '../styles/ProjectSection.module.css';
import Image from 'next/image';
import ProjectCard from './ProjectCard';
import Warning from './Warning';

const ProjectSection: FunctionComponent = () => {
  return (
    <section id="Projects">
      <article>
        <h3>Projects</h3>
        <div className={styles.projectsContainer}>
          <ProjectCard
            name="Odinbook"
            liveDemo="https://trfielder.github.io/odinbook"
            imgRef="/odinbook.png"
            description="My current project (Work in progress) - a full stack application using Typescript (React), TailwindCSS and Node.js to recreate the functionality of a popular social networking site"
            repository="http://github.com/TRFielder/odinbook/"
          />
          <ProjectCard
            name="This website!"
            liveDemo="http://tomfielder.co.uk"
            imgRef="/tfpersonalsite.png"
            description="This site is built with NextJS and Typescript as a personal challenge. Blog REST API is hosted on heroku."
            repository="http://github.com/TRFielder/tomfielder.co.uk/"
          />
          <ProjectCard
            name="Dotabeef"
            liveDemo="http://trfielder.github.io/dotabeef"
            imgRef="/dotabeef-preview.png"
            description="A stats tracking tool for dota 2 based on dotabuff.com, built with
            ReactJS and the Opendota API."
            repository="http://github.com/TRFielder/dotabeef"
          />
          <ProjectCard
            name="Where's That Pokemon?"
            liveDemo="http://trfielder.github.io/wheres-that-pokemon"
            imgRef="/poke-preview.png"
            description='A "Where&apos;s Wally" style game built with ReactJS and
            Firebase to manage a global leaderboard.'
            repository="http://github.com/TRFielder/wheres-that-pokemon"
          />
          <ProjectCard
            name="Memoe Cards"
            liveDemo="http://trfielder.github.io/Memoe-cards"
            imgRef="/memoe-preview.png"
            description=" A memory game built with ReactJS and a community API for Genshin
            Impact game data."
            repository="http://github.com/TRFielder/Memoe-cards"
          />
        </div>
      </article>
    </section>
  );
};

export default ProjectSection;
