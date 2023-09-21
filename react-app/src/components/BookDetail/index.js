import "./BookDetail.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentBook, getBookById, clearCurrentBook } from "../../store/books";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

const BookDetail = () => {
  const dispatch = useDispatch();
  const book = useSelector(currentBook);
  const { bookId } = useParams();
  const rating = book.avgRating;

  useEffect(() => {
    dispatch(getBookById(bookId));

    return () => dispatch(clearCurrentBook());
  }, [dispatch, bookId]);

  if (!book) {
    return <LoadingSpinner />;
  }

  return (
    <div className="book-detail--container">
      <h1 className="book-detail--title">{book.title}</h1>
      <img
        className="book-detail--img"
        src={book.frontImage}
        alt={book.title}
      />
      <p className="book-detail--author">
        by {book.authorFirstName} {book.authorLastName}
      </p>

      <div className="book-detail--stars">
        <div
          className={
            rating >= 1
              ? "book-detail--rating-filled"
              : "book-detail--rating-empty"
          }
        >
          <i className="fa-solid fa-star "></i>
        </div>
        <div
          className={
            rating >= 1.7
              ? "book-detail--rating-filled"
              : "book-detail--rating-empty"
          }
        >
          <i className="fa-solid fa-star "></i>
        </div>
        <div
          className={
            rating >= 2.7
              ? "book-detail--rating-filled"
              : "book-detail--rating-empty"
          }
        >
          <i className="fa-solid fa-star "></i>
        </div>
        <div
          className={
            rating >= 3.7
              ? "book-detail--rating-filled"
              : "book-detail--rating-empty"
          }
        >
          <i className="fa-solid fa-star "></i>
        </div>
        <div
          className={
            rating >= 4.7
              ? "book-detail--rating-filled"
              : "book-detail--rating-empty"
          }
        >
          <i className="fa-solid fa-star "></i>
        </div>
        <span className="book-detail--rating">{rating}</span>
      </div>

      <span className="book-detail--numRatings">( {book.numRatings} )</span>
      <h2 className="book-detail--price">${book.price}</h2>
      <span className="book-detail--format">{book.format}</span>
      <button className="book-detail--cart-button">Add to Cart</button>
      <button className="book-detail--wishlist-button">Add to Wishlisht</button>
      <div className="book-detail--description">
        <h2>Overview</h2>
        <span>{book.description}</span>
      </div>
    </div>
  );
};

export default BookDetail;