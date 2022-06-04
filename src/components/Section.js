import React from 'react'
import styled from 'styled-components'

function Section({ title, description, leftBtnTxt, rightBtnTxt,backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnTxt}</LeftButton>
          {rightBtnTxt && 
            // only if rightBtnTxt exists
             <RightButton>{rightBtnTxt}</RightButton>
          }
        </ButtonGroup>
        <DownArrow src="./images/down-arrow.svg" alt="down-arrow" />
      </Buttons>
    </Wrap>
  );
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background: orange;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display:flex;
    flex-direction: column;
    justify-content:space-between ;//vertical alignment
    align-items:center;//horizontal alignment
    background-image:${props => `url("/images/${props.bgImage}")`} ;
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width:768px){
        flex-direction:column ;
    }
`

const LeftButton = styled.div`
    background-color :rgba(23,26,32,0.8) ;
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`

const RightButton = styled(LeftButton)`
    background-color:white ;
    opacity:0.65 ;
    color:black;
    /* inherits left button properties */
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x:hidden;
    animation : animateDown infinite 1.5s ;
`

const Buttons = styled.div``