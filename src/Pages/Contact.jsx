import { Link } from '@mui/material';

const contacts = [
  { name: 'Gmail', link: 'kseniya.dedik@gmail.com' },
  { name: 'GitHub', link: 'https://github.com/ksddk' }
];

function Contact() {
  return (
    <>
      <h1>Contact information</h1>
      {contacts.map(({ name, link }) => (
        <Link
          key={contacts.name}
          href={link}
          sx={{
            my: 2,
            color: 'white',
            display: 'block',
            fontWeight: 'bold',
            margin: '5px'
          }}>
          {name}
        </Link>
      ))}
    </>
  );
}

export default Contact;
