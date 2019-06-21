import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { renderColor } from 'helpers/styles';
import linkResolver from 'helpers/linkResolver';
import relResolver from 'helpers/relResolver';

const StyledNav = styled.nav`
  align-self: flex-end;
  margin-right: 15%;
  ${props => props.theme.media.md`
    align-self: flex-start;
    margin-right: 0;
  `}
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 50px;
`;

const StyledItem = styled.li`
  display: flex;
  align-items: baseline;
`;

const StyledLink = styled(props => <Link {...props} />)`
  display: block;
  position: relative;
  font-family: 'Sul Sans, Regular';
  font-size: 1.8rem;
  line-height: 2rem;
  letter-spacing: 0.07em;
  letter-spacing: 0.07rem;
  color: #051736;
  text-decoration: none;
  text-transform: uppercase;
  transition: 3s;
  margin: 12px 0;

  ${props => props.theme.media.md`
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin: 0;
  `}

  span {
    position: relative;
    z-index: 10;
  }

  &:focus {
    outline: none;
  }

  &:visited {
    color: #051736;
  }

  &:active,
  :hover {
    color: #051736;
    border-bottom: none;

    &:before {
      background: #ffffff;
      height: 8px;
      position: absolute;
      width: 8px;
      border-radius: 4px;
      left: -15px;
      top: calc(45% - 4px);
      content: "";
      z-index: 5;
      ${props => props.theme.media.md`
        background: #2FF2AF;
      `}
    }
  }

  ${props => props.theme.media.md`
    font-size: 1.5rem;
    line-height: 4.0rem;
  `}
`

function NavigationComponent({ data }) {
  let { navigation_items } = relResolver(
    data,
    'prismicGlobal',
    'main_navigation'
  )

  navigation_items = navigation_items.map(item => ({
    id: item.navigation_link !== null ? item.navigation_link.id : 'home-link',
    link_text: item.navigation_link_text,
    url: linkResolver()(item.navigation_link),
  }))

  return (
    <StyledNav>
      <StyledList>
        {navigation_items.map((item, i) => (
          <StyledItem key={item.id}>
            <StyledLink to={item.url} className="invert-color" activeClassName="active">
              <span>{item.link_text}</span>
            </StyledLink>
            {/* <Num>{`0.${i + 1}`}</Num> */}
          </StyledItem>
        ))}
      </StyledList>
    </StyledNav>
  )
}

const Navigation = props => (
  <StaticQuery
    query={graphql`
      {
        prismicGlobal {
          data {
            main_navigation {
              id
              document {
                data {
                  navigation_items {
                    navigation_link_text
                    navigation_link {
                      id
                      uid
                      type
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <NavigationComponent data={data} {...props} />}
  />
)

export default Navigation

NavigationComponent.propTypes = {
  data: PropTypes.shape({
    prismicGlobal: PropTypes.shape({
      data: PropTypes.shape({
        main_navigation: PropTypes.any.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
