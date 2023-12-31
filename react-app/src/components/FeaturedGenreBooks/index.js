import "./FeaturedGenreBooks.css";
import React from "react";
import { useSelector } from "react-redux";
import { allCollections } from "../../store/collections";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

const FeaturedGenreBooks = ({
  fiction,
  nonfiction,
  horror,
  romance,
  youngAdult,
  scienceFiction,
  autobiography,
}) => {
  const collections = useSelector(allCollections);
  const history = useHistory();

  if (!collections) {
    return <LoadingSpinner />;
  }

  //------------------Selected collections----------------------------------
  const selectedFiction = collections.filter(
    (selected) => selected.name === "Fiction"
  )[0]?.Books;

  const selectedNonfiction = collections.filter(
    (selected) => selected.name === "Nonfiction"
  )[0]?.Books;

  const selectedHorror = collections.filter(
    (selected) => selected.name === "Horror"
  )[0]?.Books;

  const selectedRomance = collections.filter(
    (selected) => selected.name === "Romance"
  )[0]?.Books;

  const selectedYoungAdult = collections.filter(
    (selected) => selected.name === "Young Adult"
  )[0]?.Books;

  const selectedScienceFiction = collections.filter(
    (selected) => selected.name === "Science Fiction"
  )[0]?.Books;

  const selectedAutobiography = collections.filter(
    (selected) => selected.name === "Autobiography"
  )[0]?.Books;

  //------------------------------------------------------------------------

  if (fiction) {
    return (
      <div>
        <h1
          className="landing-featured-genre--header"
          onClick={() => history.push("/collections/3")}
        >
          Fiction
        </h1>
        <div className="landing-featured-genre--tile-row">
          {selectedFiction.slice(0, 4).map((book) => (
            <div key={book.id} className="landing-featured-genre--tile">
              <img
                src={book.frontImage}
                alt={book.title}
                className="landing-featured-genre--book"
                onClick={() => history.push(`/books/${book.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (nonfiction) {
    return (
      <div>
        <h1
          className="landing-featured-genre--header"
          onClick={() => history.push("/collections/5")}
        >
          Nonfiction
        </h1>
        <div className="landing-featured-genre--tile-row">
          {selectedNonfiction.slice(0, 4).map((book) => (
            <div key={book.id} className="landing-featured-genre--tile">
              <img
                src={book.frontImage}
                alt={book.title}
                className="landing-featured-genre--book"
                onClick={() => history.push(`/books/${book.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (horror) {
    return (
      <div>
        <h1
          className="landing-featured-genre--header"
          onClick={() => history.push("/collections/2")}
        >
          Horror
        </h1>
        <div className="landing-featured-genre--tile-row">
          {selectedHorror.slice(0, 4).map((book) => (
            <div key={book.id} className="landing-featured-genre--tile">
              <img
                src={book.frontImage}
                alt={book.title}
                className="landing-featured-genre--book"
                onClick={() => history.push(`/books/${book.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (romance) {
    return (
      <div>
        <h1
          className="landing-featured-genre--header"
          onClick={() => history.push("/collections/4")}
        >
          Romance
        </h1>
        <div className="landing-featured-genre--tile-row">
          {selectedRomance.slice(0, 4).map((book) => (
            <div key={book.id} className="landing-featured-genre--tile">
              <img
                src={book.frontImage}
                alt={book.title}
                className="landing-featured-genre--book"
                onClick={() => history.push(`/books/${book.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (youngAdult) {
    return (
      <div>
        <h1
          className="landing-featured-genre--header"
          onClick={() => history.push("/collections/6")}
        >
          Young Adult
        </h1>
        <div className="landing-featured-genre--tile-row">
          {selectedYoungAdult.slice(0, 4).map((book) => (
            <div key={book.id} className="landing-featured-genre--tile">
              <img
                src={book.frontImage}
                alt={book.title}
                className="landing-featured-genre--book"
                onClick={() => history.push(`/books/${book.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (scienceFiction) {
    return (
      <div>
        <h1
          className="landing-featured-genre--header"
          onClick={() => history.push("/collections/9")}
        >
          Science Fiction
        </h1>
        <div className="landing-featured-genre--tile-row">
          {selectedScienceFiction.slice(0, 4).map((book) => (
            <div key={book.id} className="landing-featured-genre--tile">
              <img
                src={book.frontImage}
                alt={book.title}
                className="landing-featured-genre--book"
                onClick={() => history.push(`/books/${book.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (autobiography) {
    return (
      <div>
        <h1
          className="landing-featured-genre--header"
          onClick={() => history.push("/collections/7")}
        >
          Autobiography
        </h1>
        <div className="landing-featured-genre--tile-row">
          {selectedAutobiography.slice(0, 4).map((book) => (
            <div key={book.id} className="landing-featured-genre--tile">
              <img
                src={book.frontImage}
                alt={book.title}
                className="landing-featured-genre--book"
                onClick={() => history.push(`/books/${book.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="landing-featured-genre--no-genre-selected">
      <h2>Take a peek at some great reads from popular genres!</h2>
      <img
        src="https://64.media.tumblr.com/bef973026fdab180cbdc3a2537297801/tumblr_inline_oyvtcu49Y01rxppp7_500.gifv"
        alt="moving-book-pages"
      />
    </div>
  );
};

export default FeaturedGenreBooks;
