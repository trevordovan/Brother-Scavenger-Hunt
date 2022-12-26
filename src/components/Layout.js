import React from "react"
import { GlobalStyle, theme } from "../styles"
import styled, { ThemeProvider } from "styled-components"

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

const Layout = ({ children }) => {

  	return (
		<>
		<div id="root">
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<StyledContent>
				<div>{children}</div>
			</StyledContent>
		</ThemeProvider>
		</div>
		</>
  	)
}

export default Layout
