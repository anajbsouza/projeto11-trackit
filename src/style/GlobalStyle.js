import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
	}
	input {
		width: 303px;
		height: 45px;
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
		border-radius: 5px;
		box-sizing: border-box;
		margin-bottom: 6px;
		padding-left: 11px;
		font-size: 20px;
		line-height: 25px;
		&::placeholder{
			width: 54px;
			height: 25px;
			margin-left: 11px;
			font-size: 20px;
			line-height: 25px;
			color: #DBDBDB;
		}
}
`

export default GlobalStyle