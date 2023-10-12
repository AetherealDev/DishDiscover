import { Link } from 'react-router-dom';

const FavoriteList = ({
  favorites,
  showTitle = true,
  showUsername = true,
}) => {
  if (!favorites.length) {
    return <h3>No favorites Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {favorites &&
        favorites.map((favorite) => (
          <div key={favorite._id} className="card mb-3">
            {/* <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${favorite.favoriteAuthor}`}
                >
                  {favorite.favoriteAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this favorite on {favorite.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this favorite on {favorite.createdAt}
                  </span>
                </>
              )}
            </h4> */}
            <img class="card-img-top" src={`${favorite.image}`} alt="Card image"></img>
            <h5 class="card-title">{favorite.name}</h5>
            <div className="card-body bg-light p-2">
              <p>{favorite.categories}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/favorites/${favorite._id}`}
            >
              Join the discussion on this favorite.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default FavoriteList;


{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
