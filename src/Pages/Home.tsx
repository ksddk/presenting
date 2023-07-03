import React from 'react';
import Button from '../ShoppingList/UI/Button';

interface CVItem {
  name: string;
  text: string;
}
const CV: CVItem[] = [
  {
    name: 'Language',
    text: 'English'
  },
  {
    name: 'Skills',
    text: 'Javascript'
  }
];

const Home = () => {
  return (
    <>
      <h1>Resume</h1>
      {CV.map((item: CVItem) => (
        <>
          <h3 key={item.name}>{item.name}</h3>
          <p
            key={item.text}
            style={{
              color: 'white',
              display: 'block',
              fontWeight: 'bold',
              margin: '5px',
              textDecoration: 'none'
            }}>
            {item.text}
          </p>
        </>
      ))}
      <a href="CV_Mikita.pdf" download>
        <Button>Download CV</Button>
      </a>
    </>
  );
};

export default Home;
