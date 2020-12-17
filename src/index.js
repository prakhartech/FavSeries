import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Animecards';
import Animedata from './Animedata';
import './index.css';


ReactDOM.render(
  <>
  <h1 className="toptitle">List of Top Animes</h1>
  <div className="display">
  <Card
   imgsrc = {Animedata[0].imgsrc}
   sname = {Animedata[0].sname}
   genre = {Animedata[0].genre}
   link = {Animedata[0].link}
  />
   <Card
   imgsrc = {Animedata[1].imgsrc}
   sname = {Animedata[1].sname}
   genre = {Animedata[1].genre}
   link = {Animedata[1].link}
  />
  <Card
   imgsrc = {Animedata[2].imgsrc}
   sname = {Animedata[2].sname}
   genre = {Animedata[2].genre}
   link = {Animedata[2].link}
  />
  <Card
   imgsrc = {Animedata[3].imgsrc}
   sname = {Animedata[3].sname}
   genre = {Animedata[3].genre}
   link = {Animedata[3].link}
  />
  <Card
   imgsrc = {Animedata[4].imgsrc}
   sname = {Animedata[4].sname}
   genre = {Animedata[4].genre}
   link = {Animedata[4].link}
  />
  <Card
   imgsrc = {Animedata[5].imgsrc}
   sname = {Animedata[5].sname}
   genre = {Animedata[5].genre}
   link = {Animedata[5].link}
  />
  <Card
   imgsrc = {Animedata[6].imgsrc}
   sname = {Animedata[6].sname}
   genre = {Animedata[6].genre}
   link = {Animedata[6].link}
  />
  <Card
   imgsrc = {Animedata[7].imgsrc}
   sname = {Animedata[7].sname}
   genre = {Animedata[7].genre}
   link = {Animedata[7].link}
  />
  <Card
   imgsrc = {Animedata[8].imgsrc}
   sname = {Animedata[8].sname}
   genre = {Animedata[8].genre}
   link = {Animedata[8].link}
  />
  </div>
  </>,
  document.getElementById('root')
);


