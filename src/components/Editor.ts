import styled from '@emotion/styled';

interface Props {
	width?: number;
	height?: number;
}

export const Editor = styled.div<Props>`
	-webkit-user-select: text;
	user-select: text;
	width: ${({ width }) => (width ? `${width}px` : '100%')};
	height: ${({ height }) => (height ? `${height}px` : '100%')};
	background-color: #fff;
	border: 1px solid #e5e5e5;
	border-radius: 4px;
	overflow: hidden;

	&:focus {
		outline: none;
	}

	&:focus-within {
		border-color: #007bff;
		box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
	}

	&:hover {
		border-color: #e5e5e5;
	}

	&:hover:focus-within {
		border-color: #007bff;
		box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
	}

	&:active {
		border-color: #e5e5e5;
	}

	&:active:focus-within {
		border-color: #007bff;
		box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
	}

	&:disabled {
		background-color: #e9ecef;
		border-color: #e5e5e5;
	}

	&:disabled:focus-within {
		border-color: #e5e5e5;
		box-shadow: none;
	}

	&:disabled:hover {
		border-color: #e5e5e5;
	}

	&:disabled:active {
		border-color: #e5e5e5;
	}
`;

export const EditorWrapper = styled.div`
	position: flex;
	width: 100%;
	height: 100%;
`;

export const EditorToolbar = styled.div`
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	background-color: #f5f5f5;
	border-bottom: 1px solid #e5e5e5;
`;
