import React from "react";
import { useParams } from "react-router-dom";

import "./AlbumInfo.scss";

const AlbumInfo = props => {
  const { albumId } = useParams();
  console.log(albumId);
  const { albumsArr } = props;
  
  const currentAlbum = albumsArr.find(album => album.idAlbum === albumId);
  console.log(currentAlbum);

  return (
    <article className="album-info">
      <div className="album-info__banner">
        <img className="album-info__img album-info__img--first" src={currentAlbum.strAlbumThumb}/>
      </div>
      <div className="album-info__content">
        <h2 className="album-info__heading">{currentAlbum.strAlbum}</h2>        
        {/* <p>{currentAlbum.strDescriptionEN.slice(0,300)}</p> */}
        {/* <p>{currentAlbum.strDescriptionEN}</p> */}
        {currentAlbum.strDescriptionEN.slice(0,300).endsWith(".") ?
        currentAlbum.strDescriptionEN.slice(0,300) :        
          currentAlbum.strDescriptionEN.slice(0,300) + 
          currentAlbum.strDescriptionEN.substr(301,currentAlbum.strDescriptionEN.substr(301).indexOf(".")) +"."          
        }
        <h2 className="album-info__heading">Facts</h2>
        <ul className="album-info__facts">
          <li>Mood : {currentAlbum.strMood} </li>
          <li>Released : {currentAlbum.intYearReleased} </li>
          <li>Genre : {currentAlbum.strGenre} </li>
          <li>Score : {currentAlbum.intScore} </li>
        </ul>
      </div>
      <div className="album-info__banner">
        <img className="album-info__img album-info__img--last" src={currentAlbum.strAlbumThumb}/>
      </div>
    </article>
  );
};

export default AlbumInfo;
