import React from 'react';
import card01 from '../assets/images/samples/card01.png';
import card02 from '../assets/images/samples/card02.png';
import card03 from '../assets/images/samples/card03.png';
import card04 from '../assets/images/samples/card04.png';
import card05 from '../assets/images/samples/card05.png';
import card06 from '../assets/images/samples/card06.png';
import card07 from '../assets/images/samples/card07.png';
import card08 from '../assets/images/samples/card08.png';

const cards = [card01, card02, card03, card04, card05, card06, card07, card08];

const PageHome = () => (
  <React.Fragment>
    <div className="text-center mb-5">
      <h1>Welcome to Gift Card Registry</h1>
      <p>Can't decide what gifts to ask your event's guests for? Create a Gift Card Registry with our site and spend when you please!</p>
    </div>

    <div className="row">
      {cards.map((card, index) => <div key={index} className="col-sm-2 col-lg-3 my-3"><img className="img-fluid" src={card} alt="Card"/></div>)}
    </div>
  </React.Fragment>
);

export default PageHome;
