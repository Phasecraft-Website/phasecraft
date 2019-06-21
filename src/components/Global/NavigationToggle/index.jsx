import React, { useContext } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { NavigationContext } from 'context'
import styled from 'styled-components'

const StyledNavToggle = styled.button`
  padding: 0;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 2px;
  background: none;
  border: none;
  z-index: 100;
`
const Svg = styled.svg`
  color: #323149;
  transition: 3s;
`;

function NavigationToggleComponent({
  // data: {
  //   prismicGlobal: {
  //     nav_toggle_settings: {
  //       menu_toggle_variation,
  //       menu_toggle_open_text,
  //       menu_toggle_close_text,
  //     },
  //   },
  // },
  onToggle,
}) {
  const toggled = useContext(NavigationContext);

  // if (menu_toggle_variation === 'Use Text') {
  return (
    <StyledNavToggle type="button" onClick={onToggle} id="toggle">
      {toggled ?
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.06055" y="0.835297" width="30" height="1.5" transform="rotate(45 1.06055 0.835297)" fill="#051736"/>
          <rect y="22.0485" width="30" height="1.5" transform="rotate(-45 0 22.0485)" fill="#051736"/>
        </svg>
        
        :
        <Svg className="invert-color" width="30" height="9" viewBox="0 0 30 9" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="1.5" fill="currentColor"/>
          <rect y="7.28305" width="30" height="1.5" fill="currentColor"/>
        </Svg>
      }
      {/* {toggled ? menu_toggle_close_text : menu_toggle_open_text} */}
    </StyledNavToggle>
  )
  // }
  // return null
}

// const NavigationToggle = props => (
//   <StaticQuery
//     query={graphql`
//       {
//         prismicGlobal {
//           nav_toggle_settings: data {
//             menu_toggle_variation
//             menu_toggle_open_text
//             menu_toggle_close_text
//           }
//         }
//       }
//     `}
//     render={data => <NavigationToggleComponent data={data} {...props} />}
//   />
// )

export default NavigationToggleComponent;

NavigationToggleComponent.defaultProps = {}

NavigationToggleComponent.propTypes = {
  // data: PropTypes.shape({
  //   prismicGlobal: PropTypes.shape({
  //     nav_toggle_settings: PropTypes.shape({
  //       menu_toggle_variation: PropTypes.string.isRequired,
  //       menu_toggle_open_text: PropTypes.string,
  //       menu_toggle_close_text: PropTypes.string,
  //     }).isRequired,
  //   }).isRequired,
  // }).isRequired,
  onToggle: PropTypes.func.isRequired,
}
