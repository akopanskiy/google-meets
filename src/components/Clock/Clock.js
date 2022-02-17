import React from 'react';
import Moment from 'react-moment';

const Clock = () => {
  return (
    <>
      <Moment format="HH:mm">{Date.now()}</Moment>
    </>
  );
};

export default Clock;
