import Link from 'next/link';

const Lab = () => {
  return (
    <div>
      <h1>Things I am currently working on</h1>
      <ul>
        <li>A secret public art project</li>
        <li>
          <Link
            href='https://www.modernlymorgan.com/product/cosmic-crush-pdf-pattern/?srsltid=AfmBOoq2lze6QydU0s4jsVvP4652hG-_cx1WQVWwpGJl5pYiGQ1mMGwK'
            target='_blank'
            rel='noopener noreferrer'
          >
            Cosmic Crush by Modernly Morgan
          </Link>
        </li>
        <li>
          <Link
            href='https://www.eandpcrochet.com/the-maeve-pullover-crochet-pattern/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Maeve Pullover by Evelyn & Peter
          </Link>
        </li>
      </ul>

      <h1>Things that I've made</h1>
      <ul>
        <li>
          <Link
            href='https://quiltyloveshop.com/products/star-pop-ii-pdf-quilt-pattern-automatic-download?srsltid=AfmBOoqCOSkuPmCf0JWYKLFZCICLqmxPCP5leUxSavUI8edPvdIecEEN'
            target='_blank'
            rel='noopener noreferrer'
          >
            Starpop II by Quilty Love
          </Link>
        </li>
        <li>
          <Link
            href='https://www.purlsoho.com/create/2015/06/08/tiny-tile-quilt/?srsltid=AfmBOoqZTk21AZSBuORR30Cs37QCYcyXegYsUH5_wAfhOMIiesPSw4DC/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tiny Triangles by Purl Soho
          </Link>
        </li>
        <li>
          <Link
            href='https://www.eandpcrochet.com/the-kiah-cardigan-crochet-pattern/'
            target='_blank'
            rel='noopener noreferrer'
          >
            The Kiah Cardigan by Evelyn & Peter
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Lab;
