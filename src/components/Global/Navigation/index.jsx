import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
  font-family: 'Sul Sans, Medium';
  font-size: 1.8rem;
  line-height: 2rem;
  letter-spacing: 0.07em;
  letter-spacing: 0.07rem;
  color: #051736;
  text-decoration: none;
  text-transform: uppercase;
  margin: 12px 0;

  ${props => props.theme.media.md`
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin: 0;
    transition: color 1.5s;
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

  &.active {
    color: #051736;
    border-bottom: none;

    &:before {
      background: #ffffff;
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 3px;
      left: -20px;
      top: calc(45% - 4px);
      content: "";
      z-index: 5;
      ${props => props.theme.media.md`
        background: #2FF2AF;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        left: -20px;
      `}
    }
  }
  &:after {
    transition: 0.6s;
    background: #2FF2AF;
    height: 2.4rem;
    position: absolute;
    width: calc(100% + 8px);
    left: -4px;
    right: -4px;
    bottom: 10px;
    content: "";
    z-index: 5;
    opacity: 0;
  }

  &:hover {
    color: #051736!important;
    border-bottom: none;

    &:after {
      opacity: 1;
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
        {navigation_items.map((item) => (
          <StyledItem key={item.id}>
            <StyledLink to={item.url} className="invert-color" activeClassName="active">
              <span>{item.link_text}</span>
            </StyledLink>
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
