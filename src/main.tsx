import React from 'react';
import ReactDOM from 'react-dom/client';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { Stack } from 'components/elements/Stack';
import { Wrap } from 'components/elements/Wrap';

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

				[contenteditable] {
					-webkit-user-select: all; /* Chrome 49+ */
					-moz-user-select: all; /* Firefox 43+ */
					-ms-user-select: all; /* No support yet */
					user-select: all; /* Likely future */
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

		<Stack>
			입력 영역
			<Wrap>
				<App width={400} height={300} />
			</Wrap>
		</Stack>
	</React.StrictMode>,
);
