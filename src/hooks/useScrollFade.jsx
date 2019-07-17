import React from 'react';
import PropTypes from 'prop-types';

const ScrollFade = React.createContext();

const initialState = {
  scrollFade: 0,
};

const getScrollFade = () => {
  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  const { clientHeight } = document.documentElement;
  return scrollHeight - (clientHeight * 0.25);
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, scrollFade: getScrollFade() };
    default:
      return { ...state };
  }
};

const ScrollFadeProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <ScrollFade.Provider value={value}>{children}</ScrollFade.Provider>
  );
}

const ScrollFadeConsumer = ScrollFade.Consumer;

export { ScrollFade, ScrollFadeProvider, ScrollFadeConsumer };

ScrollFadeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
