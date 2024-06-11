import { Link } from '../Link.jsx'

export default function AboutPage () {
    return (
      <>
        <h1>About</h1>
        <div>
          <img 
            src='https://pbs.twimg.com/profile_images/1403745034080604165/sUoT0g3F_400x400.jpg' 
            alt='Foto de Iván'
          />
          <p>¡Hola! Me llamo Iván y estamos creando un clon de React Router.</p>
        </div>
        <Link to='/'>Ir a Home</Link>
      </>
    )
  }
  