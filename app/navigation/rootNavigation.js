import React from 'react';

const navigationRef = React.createRef();
const navigate = (name, params) => navigationRef.current?.navigate(name, params);

export default {
  navigationRef,
  navigate
}
