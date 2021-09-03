import ArrowRightOutlined from '@material-ui/icons/ArrowRightOutlined'
import ArrowLeftOutlined from '@material-ui/icons/ArrowLeftOutlined'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: relative;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.5;
`

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
