import React from 'react';
import card01 from '../assets/images/samples/card01.png';
import card02 from '../assets/images/samples/card02.png';
import card03 from '../assets/images/samples/card03.png';
import card04 from '../assets/images/samples/card04.png';
import card05 from '../assets/images/samples/card05.png';
import card06 from '../assets/images/samples/card06.png';
import card07 from '../assets/images/samples/card07.png';
import card08 from '../assets/images/samples/card08.png';

// List of the gift cards
const cards = [card01, card02, card03, card04, card05, card06, card07, card08];

// Homepage inner content
const PageHome = () => (
  <React.Fragment>
    {/* Welcome text */}
    <div className="text-center mb-5">
      <h1 className="mb-4">Forget gifts & cash. Set up a Gift Card Registry.</h1>
      <div className="mx-auto" style={{maxWidth: 800}}>
        <p>Make life easier for you and your guests on your special day. Your guests contribute to your Gift Card Registry and the funds are loaded onto your selected design Mastercard card. You can use your card for whatever your heart desires – no more unwanted gifts. More secure than cash, the Gift Card Registry is the ideal wishing well solution!</p>
      </div>
    </div>

    {/* Cards grid */}
    <div className="row">
      {cards.map((card, index) => <div key={index} className="col-sm-2 col-lg-3 my-3"><img className="img-fluid" src={card} alt="Card"/></div>)}
    </div>

    <div className="text-center mt-5 section-how-it-works">
      <h2 className="mb-3">How it works</h2>
      <div className="row align-items-center">
        <div className="col">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Step 1</h5>
              <p className="card-text">Create an account</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Step 2</h5>
              <p className="card-text">Set up your Gift Card Registry</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Step 3</h5>
              <p className="card-text">You'll receive a unique link for you to send to your guests</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Step 4</h5>
              <p className="card-text">Your guests contribute to your card and leave their special messages</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Step 5</h5>
              <p className="card-text">You receive your gift card in the mail, all topped up and ready to go!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default PageHome;
