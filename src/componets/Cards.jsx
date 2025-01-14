import React from "react";
import Card from "./Card";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
const cards = [
  {
    id: 1,
    title: "Daniel Gutierrez",
    image: image1,
    text: '',
    url: 'http://faztweb.com'
  },
  {
    id: 2,
    title: "Juan Luis",
    image: image2,
    text: '',
    url: 'http://faztweb.com'
  },
  {
    id: 3,
    title: "Roberto Alonzo",
    image: image3,
    text: '',
    url: 'http://faztweb.com'
  },
  
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} image={card.image} url={card.url} text={card.text}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
