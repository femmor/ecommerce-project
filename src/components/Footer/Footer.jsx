import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import RoomIcon from '@material-ui/icons/Room'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1`
  font-weight: bold;
`

const Desc = styled.p`
  margin: 20px 0;
`

const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
`

const Payment = styled.img`
  width: 50%;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RAWS.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, natus? Pariatur, unde magnam error inventore
          perferendis quas numquam, tempora provident quod et adipisci quidem
          quam nobis? Aspernatur dicta
        </Desc>
        <SocialContainer>
          <SocialIcon backgroundColor="#4064AD">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon backgroundColor="#7D32AA">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon backgroundColor="#1F9CEA">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms &amp; Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon />
          433 StrongWill Drive, South Carolina, 877564.
        </ContactItem>
        <ContactItem>
          <PhoneIcon /> +1 445 657 4343
        </ContactItem>
        <ContactItem>
          <EmailIcon /> hello@raws.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
