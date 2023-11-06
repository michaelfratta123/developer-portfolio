import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// create a Layout component for styles, and apply the styles to its children
const Layout = ({ children }) => (
  <div>
    {/* include the header component */}
    <Header />
    {children}

    {/* use styled-jsx as per the requirements */}
    <style global jsx>{`
      /* import custom font */
      @font-face {
        font-family: "thiccboi";
        src: local("thiccboi"),
          url("../static/fonts/thiccboi.woff2") format("woff2");
      }

      img {
        width: 45%;
        display: flex;
        justify-content: center;
        margin: auto;
        padding: 5%;
      }

      .link {
        text-decoration: none;
        color: inherit; /* Use the default text color */
      }

      /* apply custom font and a gry background to the entire app */
      body {
        background-color: gray;
        font-family: "thiccboi", sans-serif;
      }

      /* round the bottom of the accordion body because
 for some reason it was overspilling when expanded*/
      .accordion-body {
        border-radius: 0 0 5px 5px;
      }

      /* apply gray background color to accordion button */
      .accordion-button {
        background-color: gray !important;
        font-size: x-large;
      }

      /* remove the blue highlight when the button is clicked */
      .accordion-button:focus {
        box-shadow: none;
      }

      /* prevent the header from changing color when it is clicked */
      .accordion-button:not(.collapsed) {
        color: #212529;
      }

      /* give some top margin to ul so lists are better centered */
      ul {
        margin-top: 1%;
      }

      /* color list items white */
      li {
        color: white;
        margin: 3%;
        font-size: large;
      }

      /* make icons gray */
      i {
        color: gray;
      }

      /* override default header margin on About component */
      .about-header {
        margin-bottom: -5%;
      }

      /* make sure that h1 and h2 elements (Name and Position)
 are all the way to the left */
      h1,
      h2 {
        display: block;
        text-align: left;
        color: white;
        margin-right: 1%;
      }

      /* center the card better with the viewport */
      .card {
        margin: auto;
        justify-content: center;
        border-width: 2px;
      }

      /* center the card contents and apply some margin */
      .card-body {
        justify-content: center;
        margin-top: 5%;
        margin-left: 5%;
      }

      /* apply a small gray border to the card header (under "About me") */
      .card-header {
        border-color: gray;
        border-width: 2px;
      }
    `}</style>
  </div>
);

export default Layout;
