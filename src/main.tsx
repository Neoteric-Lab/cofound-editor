import React from 'react';
import ReactDOM from 'react-dom/client';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Global
			styles={css`
				${emotionReset}

				*, *::after, *::before {
					box-sizing: border-box;
					-moz-osx-font-smoothing: grayscale;
					-webkit-font-smoothing: antialiased;
					font-smoothing: antialiased;
				}

				@font-face {
					font-family: 'pretendard';
					src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
						format('woff');
					font-weight: 400;
					font-style: normal;
				}
			`}
		/>
		<App width={400} height={300} />
	</React.StrictMode>,
);
