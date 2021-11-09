import Link from "next/link";
import Nav from "../components/Nav";
import MyHead from "../components/MyHead";

export default function Home() {
  return (
    <div className="container">
      <main>
        <MyHead />
        <h1 className="title">Hi. I'm Kate</h1>
        <p className="description">
          I'm a front-end software developer. <br />
          This page is under construction, check back soon for slightly more
          content.
        </p>
        <i class="fas fa-drumstick-bite"></i>
      </main>

      <footer>
        <Link href="https://open.spotify.com/user/1259062356?si=0622492c6e224a9e">
          <i class="fab fa-spotify"></i>
        </Link>
      </footer>
    </div>
  );
}
