import React from "react";
import ReactDOM from "react-dom";

//css
import "./index.css";

const firstBook = {
  author: "Joseph Murphy",
  title: "The Power of Your Subconscious Mind",
  price: "₹105",
  img: "https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg",
};

const secondBook = {
  author: "Morgan Housel",
  title: "The Psychology of Money",
  price: "₹235",
  img: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg",
};

function BookList() {
  return (
    <div className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        price={firstBook.price}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        price={secondBook.price}
        img={secondBook.img}
      />
    </div>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book  ">
      <img src={props.img} alt="" />
      <h4>{props.title}</h4>
      <h5>{props.author} </h5>
      <h6> {props.price}</h6>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
