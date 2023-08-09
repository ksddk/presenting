export interface ICVItem {
  name: string;
  text: string;
  link?: string;
}
export const CVSkills: ICVItem[] = [
  {
    name: 'PROGRAMMING LANGUAGES',
    text: `Javascript, Typescript`
  },
  {
    name: 'FRAMEWORKS/LIBRARIES',
    text: `React, NodeJS, ExpressJS, NestJS`
  },
  {
    name: 'WEB',
    text: `HTML, CSS, Figma`
  },
  {
    name: 'DOCUMENTATION',
    text: `Atlassian Confluence, Jira, UML`
  },
  {
    name: 'TOOLS',
    text: `npm, git, VSCode, ESLint, Prettier`
  }
];

export const Experience: ICVItem[] = [
  {
    name: 'RESUME APP',
    text: `The web application for recruiters and other interested parties, which allows them to get familiar with a working experience and ability to create frontend applications following the design documentation and technical requirements`,
    link: 'https://github.com/ksddk/presenting'
  },
  {
    name: 'TODO APP',
    text: `The web application that provides functionality to manage tasks by the users with the functionality of items creation and deletion`,
    link: 'https://github.com/ksddk/todo-app'
  },
  {
    name: 'DATABASE',
    text: `The CLI tool that provides a base functionality of a relational database storing data in the file system with ability to send queries to the database`,
    link: 'https://github.com/ksddk/lab-3'
  }
];
