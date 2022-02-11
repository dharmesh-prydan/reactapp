import React from 'react';
import Heading from './Heading'
import Images from './Images';
import Title from './Title';
import Button from './Button';

const Card = (props) => {
  
  return(
    <>
    <div className="cards">
      <div className="card">
        <Images imgsrc = {props.imgsrc} />
        <div className="card_info">
             <Title title = {props.title}/>
             <Heading sname={props.sname} />
             <Button links = {props.links} />
        </div>

      </div>
    </div>
  </>
  )
}
export default Card;

