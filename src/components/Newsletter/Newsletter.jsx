import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send'

const Container = styled.div`
  height: 40vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
`

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`

const Input = styled.input`
  width: 100%;
  padding-left: 20px;
  font-size: 20px;
  border: 0;
  outline: none;
  flex: 8;
`

const Button = styled.button`
  background: teal;
  border: 0;
  cursor: pointer;
  color: white;
  flex: 1;
  transition: all 0.2s ease;
`

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates about your favorite products</Desc>
      <InputContainer>
        <Input placeholder="Your email address" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
