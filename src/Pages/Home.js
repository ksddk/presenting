const CV = [
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
      {CV.map(({ name, text }) => (
        <>
          <h3 key={CV.name}>{name}</h3>
          <p
            key={CV.text}
            style={{
              my: 2,
              color: 'white',
              display: 'block',
              fontWeight: 'bold',
              margin: '5px',
              textDecoration: 'none'
            }}>
            {text}
          </p>
        </>
      ))}
    </>
  );
};

export default Home;
