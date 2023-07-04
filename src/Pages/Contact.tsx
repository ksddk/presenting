import { Link } from '@mui/material';

interface IContact {
  name: string;
  link: string;
}

const contacts: IContact[] = [
  { name: 'Gmail', link: 'mailto:kseniya.dedik@gmail.com' },
  { name: 'GitHub', link: 'https://github.com/ksddk' }
];

function Contact() {
  return (
    <>
      <h1>Contact information</h1>
      {contacts.map(({ name, link }: IContact) => (
        <Link
          key={name}
          href={link}
          sx={{
            my: 2,
            color: 'white',
            display: 'block',
            fontWeight: 'bold',
            margin: '5px',
            textDecoration: 'none'
          }}>
          {name}
        </Link>
      ))}
    </>
  );
}

export default Contact;
