import React from "react";
import { Link }  from "react-router-dom";

import "./AlbumTiles.scss";

const AlbumTiles = props => {
  const { title, albumsArr } = props;

  const cardListJSX = albumsArr.map((album, index) => (
    <Link key={title + (index + 1)} to={`/album/${album.idAlbum}`}>
      <img className="album-tiles__img" src={album.strAlbumThumb} alt={album.strAlbum}  />
    </Link>
  ));
  return (
    <>
      <h3>{title}</h3>
      <div className="album-tiles">{cardListJSX}</div>
    </>
  );
};

export default AlbumTiles;
