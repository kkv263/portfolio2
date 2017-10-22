import React, { Component } from 'react';
import { Wrapper, Image, Paragraph } from '../styles/About.style';

class AboutContainer extends Component {
  
  render() {
    return (
      <Wrapper>
        <Image src="https://dummyimage.com/600x400/6e6e6e/5e5e5e.png&text=PlaceHolder"></Image>
        <Paragraph>
          TLDR; Kevin Vu is a aspiring web developer who is currently a student at the University of
          Texas at Austn.
        </Paragraph>
        <Paragraph>
          My name is Kevin Vu and currently I am a student at the University of Texas at Austin aiming
          for my Bachelors of Science and Arts in Computer Science. In my free time I enjoy martial arts,
          weightlifting, playing videogames, and as an aspiring developer, developing websites. 
        </Paragraph>

        <Paragraph>
          At an early age, I played my first videogame at the age of 6 and recieved my first laptop
          around the first grade of elementary school. From those moments on, I had become curious
          and interested in the workings of modern technology. I took my first computer science
          class in my second year of high school and was mind-blown by this new programming world.
          From creating ASCII-art to understanding operating systems, it has piqued my interest
          and captured my curiosity ever since.
        </Paragraph>

        <Paragraph>
          If I were to narrow it down, I would say web development is my passion. After learning HTML,
          CSS, and Javascript I had the tools to create a functional website. Through my experience
          on the Internet I had come to learn how people communicate and send powerful messages to
          one another through websites.  
        </Paragraph>

        <Paragraph>
          That's basically a gist of who I am, if you want to get to know me better feel free to shoot 
          me an email with anything you want!
        </Paragraph>
      </Wrapper>
    );
  } 
}

export default AboutContainer;