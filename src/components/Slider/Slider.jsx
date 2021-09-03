import ArrowRightOutlined from '@material-ui/icons/ArrowRightOutlined'
import ArrowLeftOutlined from '@material-ui/icons/ArrowLeftOutlined'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
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

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Image = styled.img`
  height: 80%;
`

const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://i.ibb.co/XsdmR2c/1.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OF ALL NEW ARRIVALS
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src="https://i.ibb.co/XsdmR2c/1.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OF ALL NEW ARRIVALS
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fbf0f4">
          <ImgContainer>
            <Image src="https://i.ibb.co/XsdmR2c/1.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>POPULAR SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OF ALL NEW ARRIVALS
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
