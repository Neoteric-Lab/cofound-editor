import React, { useRef } from 'react';
import { Editor, EditorWrapper, EditorToolbar } from 'components/Editor';

interface Props {
	width?: number;
	height?: number;
}

const App: React.FC<Props> = ({ width, height }) => {
	const editorToolbarRef = useRef<HTMLDivElement>(null);

	const handleToolbarClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = event.target as HTMLButtonElement;
		const command = target.dataset.type;
		const selection = window.getSelection();
		if (!command || !selection) return;
		const range = selection.getRangeAt(0);
		const span = document.createElement('span');

		switch (command) {
			case 'bold':
				span.style.fontWeight = 'bold';
				break;
			case 'italic':
				span.style.fontWeight = 'italic';
				break;
			case 'underline':
				span.style.textDecoration = 'underline';
				break;
			default:
				break;
		}

		range.surroundContents(span);
	};

	return (
		<EditorWrapper>
			<EditorToolbar ref={editorToolbarRef} onClick={handleToolbarClick}>
				<button type="button" data-type="bold">
					bold
				</button>
				<button type="button" data-type="italic">
					italic
				</button>
				<button type="button" data-type="underline">
					underline
				</button>
			</EditorToolbar>
			<Editor contentEditable suppressContentEditableWarning width={width} height={height} />
		</EditorWrapper>
	);
};

export default App;
