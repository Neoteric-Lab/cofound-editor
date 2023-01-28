import styled from '@emotion/styled';

interface StackProps {
	width?: number;
	height?: number;
}
export const Stack = styled.div<StackProps>`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	border: 1px solid #000;

	width: ${({ width }) => (width ? `${width}px` : '100%')};
	height: ${({ height }) => (height ? `${height}px` : '100%')};
`;
