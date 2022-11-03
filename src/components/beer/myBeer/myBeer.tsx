import * as React from 'react';
import { MyBeerInterface } from '../../../types/Beer';
import houzzImage from '../../../assets/images/houzz.png';

interface InjectedProps {
  beers: MyBeerInterface[];
  openModal: () => void;
}

function MyBeer(props: InjectedProps): React.ReactElement {
  const { beers, openModal } = props;

  if (!beers.length)
    return (
      <div className="empty-screen">
        <div className="add-beer-text">
          <p>
            Nothing to see yet
            <br />
            <a className="clear" data-open="addMyBeer" onClick={openModal}>
              Click here
            </a>
            <span>to add your first beer</span>
          </p>
        </div>
      </div>
    );

  return (
    <div className="mln-16 grid-x grid-margin-x">
      {beers.map((beer, index) => {
        const { name, genre, description } = beer;
        return (
          <div className="callout mln-4 cell medium-12 large-6" key={`${index}_${name}`}>
            <div className="media-object">
              <div className="media-object-section">
                <div className="cell small-4">
                  <img src={houzzImage} alt="" style={{ width: '80px', height: '150px' }} onMouseOver={() => {}} />
                </div>
              </div>
              <div className="media-object-section ml-18 mt-5">
                <h5>
                  <strong>{name}</strong>
                </h5>
                <h6 style={{ color: '#DAA520' }}>{genre}</h6>
                <p>{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyBeer;
