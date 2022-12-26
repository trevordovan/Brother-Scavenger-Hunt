import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Data from '../../clues/Data';
import { Card } from '../../components'

const StyledActivity = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
`

const StyledBox = styled.div`
	width: 60%;
	height: 650px;
	border-radius: 8px;

	margin: 0 auto;

	background: #222222;
	box-shadow: 0 0 20px -3px;

	margin-top: 10rem;
	margin-bottom: 14rem;

	@media (max-width: 768px) {
		margin-top: 10rem;
		margin-bottom: 5rem;
		width: 80%;
		height: 400px;
	}

`

const StyledCard = styled.div`
	color: white;

	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		font-size: 2rem;

		@media (max-width: 768px) {
			font-size: 1rem;
		}
	}

`
const StyledButton = styled.button`
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
	
	width: 15%;
	height: 60px;
	line-height: 1;
	margin-top: 15rem;
	margin-bottom: 3rem;
	
	@media(max-width: 768px) {
		font-size: 1rem;
		margin-top: 7rem;
		width: 25%;
	}

	:hover {
		box-shadow: rgba(0, 1, 0, .2) 0 2px 8px;
		opacity: .85;
	}
`

const Activity = () => {

	const [activeCard, setActiveCard] = useState(0);
	const bypass = "bypass"

	useEffect(() => {
		const storedCardIndex = localStorage.getItem("cardIndex");
		if(storedCardIndex) {
			setActiveCard(parseInt(storedCardIndex));
		}
	}, []);

	useEffect(() => {
		if (activeCard !== localStorage.getItem("cardIndex")) {
			localStorage.setItem('cardIndex', activeCard);
		}
	}, [activeCard]);

	const checkAnswer = (input) => {
		let cardIndex = parseInt(localStorage.getItem("cardIndex"));
		let solution = null;
		Data[cardIndex].map((item) => {
			solution = item.solution;
			return 0;
		});
		console.log(input,solution);
		if (input === solution || input === bypass) {
			cardIndex += 1;
			setActiveCard(cardIndex);
			return true;
		}
		else {
			return false;
		}
	}

	return (
		<>
		<StyledActivity>
			<StyledBox>
				<StyledCard>
					<div className="card">
						{activeCard === 0 && <Card data={Data} cardIndex={0} checkAnswer={checkAnswer}/>}
						{activeCard === 1 && <Card data={Data} cardIndex={1} checkAnswer={checkAnswer}/>}
						{activeCard === 2 && <Card data={Data} cardIndex={2} checkAnswer={checkAnswer}/>}
						{activeCard === 3 && <Card data={Data} cardIndex={3} checkAnswer={checkAnswer}/>}
						{activeCard === 4 && <Card data={Data} cardIndex={4} checkAnswer={checkAnswer}/>}
						{activeCard === 5 && <Card data={Data} cardIndex={5} checkAnswer={checkAnswer}/>}
						{activeCard === 6 && <Card data={Data} cardIndex={6} checkAnswer={checkAnswer}/>}
						{activeCard === 7 && <Card data={Data} cardIndex={7} checkAnswer={checkAnswer}/>}
						{activeCard === 8 && <Card data={Data} cardIndex={8} checkAnswer={checkAnswer}/>}
						{activeCard === 9 && <Card data={Data} cardIndex={9} checkAnswer={checkAnswer}/>}
						{activeCard === 10 && <Card data={Data} cardIndex={10} checkAnswer={checkAnswer}/>}
						{activeCard === 11 && <Card data={Data} cardIndex={11} checkAnswer={checkAnswer}/>}
						{activeCard === 12 && <Card data={Data} cardIndex={12} checkAnswer={checkAnswer}/>}
						{activeCard === 13 && <Card data={Data} cardIndex={13} checkAnswer={checkAnswer}/>}
						
						{activeCard === 0 ? <StyledButton onClick={() => setActiveCard(1)}>Begin</StyledButton> : <div/>}
					</div>
				</StyledCard>
			</StyledBox>
			<StyledButton onClick={() => setActiveCard(0)}>Reset</StyledButton>
		</StyledActivity>
		</>
	)
}

export default Activity