import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring/web.cjs'
import styled from 'styled-components'

const StyledOffcanvasInner = styled(props => <animated.div {...props} />)`
  position: fixed;
  z-index: 9500;
  top: ${props => (props.direction === 'bottom' ? '0' : 0)};
  bottom: ${props => (props.direction === 'top' ? '0' : 0)};
  left: ${props => (props.direction === 'right' ? '0' : 0)};
  right: ${props => (props.direction === 'left' ? '0' : 0)};
  pointer-events: ${props => (props.show ? 'all' : 'none')};
  box-shadow: ${props => (props.show ? '-3px 4px 49px #030E22' : 'none')};
  transition: box-shadow 1s;
`

function OffCanvasInner({
  children,
  fromTop,
  fromRight,
  fromBottom,
  fromLeft,
  show,
  ...props
}) {
  const [initialized, setInitialized] = useState(false)
  let direction
  let transform = ['', '']

  useEffect(() => {
    // Simple assertion of wether or not the component mounted.
    if (!initialized) setInitialized(true)
  })

  if (fromTop) {
    direction = 'top'
    transform = ['translateY(-100%)', 'translateY(0%)']
  }
  if (fromBottom) {
    direction = 'bottom'
    transform = ['translateY(100%)', 'translateY(0%)']
  }
  if (fromRight) {
    direction = 'right'
    transform = ['translateX(100%)', 'translateX(20%)']
  }
  if (fromLeft) {
    direction = 'left'
    transform = ['translateX(-100%)', 'translateX(0%)']
  }

  // Using array deconstruction, we can easily switch between transition states
  let [from, to] = transform
  if (!show) [to, from] = transform

  const styleProps = useSpring({
    from: { transform: from },
    to: { transform: to },
    immediate: !initialized,
  })

  return (
    <StyledOffcanvasInner
      direction={direction}
      show={show}
      style={styleProps}
      {...props}
    >
      {children}
    </StyledOffcanvasInner>
  )
}

export default OffCanvasInner

OffCanvasInner.defaultProps = {
  show: false,
  fromTop: false,
  fromBottom: false,
  fromLeft: false,
  fromRight: false,
}

OffCanvasInner.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  fromTop: PropTypes.bool,
  fromBottom: PropTypes.bool,
  fromLeft: PropTypes.bool,
  fromRight: PropTypes.bool,
}
