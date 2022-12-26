import React from "react"
import styled from "styled-components"

const StyledBox = styled.div`
	.box {
		background: #222222;
		
		width: 80%;
		height: 650px;
		margin: 0 auto;
		margin-top: 10rem;
		margin-bottom: 20rem;
		
		border-radius: 8px;
		box-shadow: 0 0 20px -3px;

		@media (max-width: 768px) {
			margin-top: 10rem;
			margin-bottom: 10rem;
			height: 400px;
		}
	}
`

const Box = ({children}) => {
  return (
	<StyledBox>
		<div className="box">
			<div> {children} </div>
		</div>
	</StyledBox>
  )
}

export default Box