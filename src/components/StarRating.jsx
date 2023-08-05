import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`fullStar-${i}`} className="fas fa-star"></i>);
    }

    if (halfStar) {
      stars.push(<i key="halfStar" className="fas fa-star-half-alt"></i>);
    }

    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`emptyStar-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return <div className="starrating">{renderStars()}</div>;
};

export default StarRating;
