import "./ViewWishlists.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allWishlists, getAllWishlists } from "../../store/wishlists";
import LoadingSpinner from "../LoadingSpinner";
import {
  Redirect,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

const ViewWishlists = () => {
  const dispatch = useDispatch();
  const wishlists = useSelector(allWishlists);
  const user = useSelector((state) => state.session.user);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllWishlists());
  }, [dispatch]);

  if (!user) {
    return <Redirect to="/" />;
  }

  if (!wishlists) {
    return <LoadingSpinner />;
  }

  return (
    <div className="view-wishlists--container">
      <h1>{user.firstName}'s Wishlists</h1>
      <div className="view-wishlists--book-tiles">
        {wishlists?.map((wishlist) => (
          <li
            className="view-wishlists--tile"
            key={wishlist.id}
            onClick={() => history.push(`/wishlists/${wishlist.id}`)}
          >
            {wishlist.name}
            <div className="view-wishlists--books">
              {wishlist?.Books?.slice(0, 4).map((book) => (
                <img
                  className="view-wishlists--tile-img"
                  key={book.id}
                  src={book.frontImage}
                  alt={book.title}
                />
              ))}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ViewWishlists;
