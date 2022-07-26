export const resetStyles = `
	* {
		margin: 0;
		padding: 0;
		border: 0;
	}
	
	*, *::before, *::after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	:focus, :active {
		outline: none;
	}
	
	a:focus, a:active {
		outline: none;
	}
	
	nav, header, footer, aside {
		display: block;
	}
	
	html, body {
		height: 100vh;
		width: 100%;
		min-width: 375px;
		font-family: 'Open Sans';
		font-size: 16px;
		font-weight: 400;
		line-height: 1rem;
		-ms-text-size-adjust: 100%;
  	-moz-text-size-adjust: 100%;
  	-webkit-text-size-adjust: 100%;
  		
  	@media (max-width: 544px){
  		font-size: 14px;
		}
	}
	
	.lock{
		overflow: hidden;
	}
	
	input, button, textarea {
		font-family: inherit;
	}
	
	input::-ms-clear {
		display: none;
	}
	
	input {
		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}
	
	input[type=number] {
		-moz-appearance: textfield;
	}
	
	button {
		cursor: pointer;
	
		&::-moz-focus-inner {
			padding: 0;
			border: 0;
		}
	}
	
	a, a:visited, a:hover {
		text-decoration: none;
	}
	
	img {
		vertical-align: top;
	}
	
	ul li {
		list-style: none;
	}
	
	h1, h2, h3, h4, h5, h6 {
		font-size: inherit;
	}
`;