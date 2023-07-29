export interface ICVItem {
  name: string;
  text: string;
}
export const CV: ICVItem[] = [
  {
    name: 'Language',
    text: `English: Reading: B2+ Writing: B2+ Speaking: B2+ `
  },
  {
    name: 'Skills',
    text: `Programming Languages: Javascript, Typescript\n
          Frameworks/Libraries: React, Redux, NodeJS, ExpressJS, NestJS, Jest, TypeORM\n
          Web: HTML, CSS, Figma<br/>
          Building Tools: Webpack (on a low level)\n
          Databases and Tools: PostgreSQL, pgAdmin, MongoDB, Redis\n
          Documentation: Swagger, Atlassian Confluence, Jira, Trello, UML\n
          DevOps: Docker\n
          Tools: npm, yarn, git, VSCode, ESLint, Prettier`
  },
  {
    name: 'Education',
    text: `Belarusian State University of Informatics and Radioelectronics (2019 to 2022)
          Faculty: Faculty of Information Technology and Management
          Specialty: Automated information processing systems
          Degree: Uncompleted`
  }
];

export const Experience: ICVItem[] = [
  {
    name: 'Resume App',
    text: `The web application for recruiters and other interested parties, which allows them to get familiar with a working experience`
  },
  {
    name: 'Project name: Todo App',
    text: `The web application provides functionality to manage tasks for the users (add info)`
  },
  {
    name: 'Project name: Database',
    text: `The tool provides a base functionality of a relational database accepting common queries to the database (increase description)`
  }
];
