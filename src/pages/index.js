import Link from 'next/link';
import Nav from '../components/Nav';
import MyHead from '../components/MyHead';

export default function Home() {
  return (
    <div className='container'>
      <main>
        <MyHead />
        <h1 className='title'>Hi. I'm Kate</h1>
        <p className='description'>
          I'm a front-end developer, artist, craft granny, and public art nerd.{' '}
          <br />I like making things: code, art, or something warm <br />{' '}
          (quilts, sweaters, and soup are my faves).
        </p>
        <p className='description'>This page is under construction.</p>
      </main>

      <footer>
        <Link href='https://open.spotify.com/user/1259062356?si=0622492c6e224a9e'>
          <i class='fab fa-spotify'></i>
        </Link>
        <Link href='https://www.linkedin.com/in/k8hansen/'>
          <i class='fab fa-linkedin'></i>
        </Link>
      </footer>
    </div>
  );
}
