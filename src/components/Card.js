import React, { useState } from "react"
import styled from "styled-components"

const StyledCard = styled.div`
	.card {
		display: flex;
		flex-direction: column;
	}

	.number {
		vertical-align: top;
		text-align: left;
		margin-left: 35px;

		@media (max-width: 768px) {
			margin-left: 20px;
		}
	}

	.clueContainer {
		width: 100%;
		height: 125px;

		margin-top: 6rem;
		margin-bottom: 3rem;

		@media(max-width: 768px) {
			margin-top: 2rem;
			margin-bottom: 0;
		}
	}

	.clue {
		align-items: center;
		text-align: center;
		max-width: 80%;
		margin-right: auto;
		margin-left: auto;
	

		@media(max-width: 768px) {
			margin-top: 3rem;
			margin-bottom: 2rem;
		}
	}

	.answer {	
		display: flex;
		flex-direction: column;
		margin-right: auto;
		margin-left: auto;
	}

	.input {
		color: white;
		background-color: black;
		border-color: black;
		border-radius: 8px;

		width: 500px;
		height: 50px;
		font-size: 2rem;

		@media (max-width: 768px) {
			font-size: 1rem;
			
			width: 200px;
			height: 40px;
			margin-top: 1rem;
			
		}
	}
`

const StyledInput = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  border-radius: 0;
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;

	@media(max-width: 768px) {
		font-size: 1rem;
	}
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight:700;    
    }
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }
`

const StyledFormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  width: 25rem;

  @media(max-width: 768px) {
	  padding: 10px 0 0;
	  width: 15rem;
  }
`

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
`

const StyledButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	margin-top: 6rem;

	@media(max-width: 768px) {
		margin-top: 3rem;
	}

	button {
		font-family: expo-brand-demi,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
		font-size: 1.5rem;

		background-color: initial;
		background-image: linear-gradient(#464d55, #25292e);
		border-radius: 8px;
		border-width: 0;
		box-shadow: 0 10px 20px rgba(0, 0, 0, .1),0 3px 6px rgba(0, 0, 0, .05);
		box-sizing: border-box;
		color: #fff;
		
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		text-decoration: none;
		
		outline: none;
		overflow: hidden;
		transform: translate3d(0, 0, 0);
		transition: all 150ms;
		vertical-align: baseline;
		white-space: nowrap;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		
		padding: 0 32px;
		width: 8rem;
		height: 52px;
		line-height: 1;
		
		@media(max-width: 768px) {
			font-size: .9rem;
			width: 5rem;
		}
	}

	button:hover {
		box-shadow: rgba(0, 1, 0, .2) 0 2px 8px;
		opacity: .85;
	}
`

const Card = ({ data, cardIndex, checkAnswer }) => {

	const [input, setInput] = useState('');
	const dataLength = data.length;

	const handleSubmit = (event) => {
		event.preventDefault();
		let tempInput = input;
		tempInput = tempInput.toLowerCase();
		tempInput = tempInput.replace(/\s+/g, '');
		setInput(tempInput);
		let isCorrect = checkAnswer(tempInput);
		if (!isCorrect) {
			// set border of input tag to red
		}
	}

	return (
		<StyledCard>
			{data[cardIndex].map((item, i) => (
				<div className="card" key={i}>
					<div className="clueContainer">
						<p className="clue">{item.clue}</p>
					</div>
					{item.number === dataLength-1 ? <p className="clue">You are almost at the finish line!!</p> : <div/>}
					{item.number !== 0 && item.number !== dataLength-1 ? 
						<form className="answer" onSubmit={handleSubmit}>
							<StyledFormGroup className="form__group field">
								<StyledInput type="input" placeholder="Answer" name="answer" id='answer' required value={input} onChange={event => setInput(event.target.value)}/>
								<StyledLabel htmlFor="answer" className="form__label">Answer</StyledLabel>
							</StyledFormGroup>

							<StyledButton>
								<button type="submit">Submit</button>
							</StyledButton>
						</form>
					: 
						<div/>}
				</div>
			))}
		</StyledCard>
	)
}

export default Card