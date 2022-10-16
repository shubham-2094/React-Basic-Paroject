import React from "react";
import ReactDOM from "react-dom";

//css
import "./index.css";

function BookList() {
  return (
    <div className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />

      <Book />
    </div>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Titlte />
      <Author />
      <Price />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg"
      alt=""
    />
  );
};

const Titlte = () => <h4>The Power of Your Subconscious Mind</h4>;
const Author = () => <h5> Joseph Murphy</h5>;
const Price = () => <h6>₹105 </h6>;

ReactDOM.render(<BookList />, document.getElementById("root"));
