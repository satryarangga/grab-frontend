import _ from 'lodash';
import React from 'react';

export const renderStarRating = (rating) => {
	let filled = Math.floor(rating);
	return _.map(_.times(5), (a) => {
		if(a < filled) {
			return (
				<i key={a} className="fa fa-star gold"></i>
			);
		}
		return (
        <i key={a} className="fa fa-star"></i>
      );
    });
}

export const NotFound = () => {
	return (
		<img
			className="img-responsive not-found"
			src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Tumbeasts_sign1.png"
		/>
	)
}

export const Loader = ({ text }) => {
  return (
    <div className="mt20">
      <div className="loader"></div>
      <h4 className="center notfound-text">{text}</h4>
    </div>
  )
}