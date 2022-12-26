import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import styled from "styled-components"

const StyledHeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 100%;
  min-height: 90vh;
  text-align: center;
  color: black;

  h1 {
	font-size: 22px;
	margin: 0 430px 20px 32px;
	font-weight: 300;
	letter-spacing: 0.05em;

	opacity: 0.8;
  }

  h2 {
	margin: 0;
	font-size: 100px;
	display: flex;
	justify-content: center;
	font-family: var(--font-playfair);
  }

  .right {
	margin-left: 24px;
  }

  h3 {
	margin: 50px 600px 0 160px;
	font-size: 26px;
	opacity: 0.5;
	letter-spacing: 0.05em;
  }

  h4 {
	margin: 24px 0 0 300px;
	font-size: 24px;
	font-weight: 300;
	opacity: 0.5;
  }

  h5 {
	margin: 24px 300px 0 0;
	font-size: 22px;
	opacity: 0.4;
  }

  h6 {
	margin: 34px 0 0 300px;
	font-size: 20px;
	opacity: 0.4;
  }

  @media (max-width: 768px) {
	margin-bottom: 100px;

	h1 {
	  font-size: 12px;
	  margin-right: 200px;
	}

	h2 {
	  font-size: 48px;
	  margin: 0;
	}

	.right {
	  margin: 0 0 0 16px;
	}

	h3 {
	  margin: 24px 150px 0 0;
	  font-size: 16px;
	}

	h4 {
	  margin: 24px 0 0 150px;
	  font-size: 14px;
	}

	h5 {
	  margin: 16px 100px 0 0;
	  font-size: 12px;
	}

	h6 {
	  margin: 24px 0 0 150px;
	  font-size: 12px;
	}
  }

  .box {
	background: grey;
	width: 500px;
	height: 500px;
	border-radius: 2.5%;
	margin: 0 0 0 600px;
  }
`

const animate = (direction, children) => {
  let res;

  if (direction === "left") {
	res = (
	  <AnimationOnScroll
		animateIn="animate__fadeInLeft"
		animateOut="animate__fadeOutLeft"
		offset={200}
	  >
		{children}
	  </AnimationOnScroll>
	)
  } else {
	res = (
	  <AnimationOnScroll
		animateIn="animate__fadeInRight"
		animateOut="animate__fadeOutRight"
		offset={200}
	  >
		{children}
	  </AnimationOnScroll>
	)
  }

  return res
}

const Hero = () => {
  return (
	<>
	<div className="box" />
	<StyledHeroSection id="hero">
	  <div>
		{animate("left", <h1>Elder</h1>)}
		<h2>
		  {animate("left", <span>Brother's</span>)}
		  {animate("right", <span className="right">Xmas</span>)}
		</h2>

		{animate("left", <h3>Scavenger</h3>)}
		{animate("right", <h4>Hunt</h4>)}
		{animate("left", <h5>For</h5>)}
		{animate("right", <h6>Job!</h6>)}
	  </div>
	</StyledHeroSection>
	</>
  )
}

export default Hero