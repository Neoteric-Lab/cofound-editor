import React, { useState, useEffect, useRef } from 'react';
import type { MouseEvent, KeyboardEvent } from 'react';
import { focusFront, focusBack } from 'utils/focus';
import { getId } from 'hooks/getId';
import { Stack } from 'components/Stack';
import { Row } from 'components/Row';

interface Props {
	width?: number;
	height?: number;
}

interface Content {
	id: string;
	content: string;
}

const App: React.FC<Props> = ({ width, height }) => {
	const { generateId } = getId();
	const editorRef = useRef<HTMLDivElement>(null);
	const [contents, setContents] = useState<Content[]>([{ id: generateId(), content: '' }]);

	// contents가 변경될 때마다 focus를 하단으로 이동
	useEffect(() => focusBack(), [contents]);

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		event.preventDefault();
		if (contents.length === 0) {
			setContents([...contents, { id: generateId(), content: '' }]);
		}
	};

	const handlePress = (event: KeyboardEvent<HTMLElement>) => {
		switch (event.key) {
			case 'Enter':
				event.preventDefault();
				// 배열 중간에 추가
				if (event.target !== editorRef.current) {
					const target = event.target as HTMLElement;
					const id = target.dataset?.cofound;
					// 현제 아이디 다음에 추가
					const index = contents.findIndex((content) => content.id === id);
					const newContents = [
						...contents.slice(0, index + 1),
						{ id: generateId(), content: '' },
						...contents.slice(index + 1),
					];
					setContents([...newContents]);
				}
				break;
			case 'Backspace':
				// 내용물이 없다면 삭제
				if ((event.target as HTMLElement).textContent === '') {
					const target = event.target as HTMLElement;
					const id = target.dataset?.cofound;
					const newContents = contents.filter((content) => content.id !== id);
					setContents(newContents);
				}
				break;
			case 'ArrowUp':
				event.preventDefault();
				focusFront();
				break;
			case 'ArrowDown':
				event.preventDefault();
				focusBack();
				break;
			default:
				break;
		}
	};

	return (
		<Stack width={width} height={height} onClick={handleClick} onKeyDown={handlePress} ref={editorRef}>
			{contents.map(({ id, content }) => {
				return (
					<Row contentEditable suppressContentEditableWarning key={id} data-cofound={id}>
						{content}
					</Row>
				);
			})}
		</Stack>
	);
};

export default App;
