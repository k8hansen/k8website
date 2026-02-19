import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: "Zen Antique Soft", serif;
}

* {
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

main {
  padding: 5rem 0;
  flex: 1;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

footer {
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

footer img {
  margin-left: 0.5rem;
}

footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

footer .fas {
  color: black;
  font-size: 16px;
  width: 200px;
  height: 200px;
  position: absolute;
  z-index: 3;
}

footer i {
  font-size: 1.5em;
}

a {
  color: #0066cc;
  text-decoration: underline;
  text-decoration-color: #bc8f8f;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  font-weight: normal;
  transition: all 0.15s ease;
  position: relative;
}

a:hover {
  color: #008080;
}

a:active {
  background-color: #00ffff;
  transform: translate(1px, 1px);
  box-shadow: 1px 1px 0px #008080;
}

code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
}

.card {
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.card:hover,
.card:focus,
.card:active {
  color: #0070f3;
  border-color: #0070f3;
}

.card h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

nav ul {
  display: flex;
  flex-direction: row;
  margin-bottom: 5em;
}

nav li {
  list-style-type: none;
  padding: 0 15px;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}
`;

export default GlobalStyle;
