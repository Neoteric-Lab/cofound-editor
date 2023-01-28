const isCofoundElement = (target: HTMLElement) => target?.getAttribute('data-cofound');

const setCursorPositionAuto = async (isCursorLast: boolean, position: number) => {
	if (isCursorLast) {
		setCursorPositionLast();
	} else {
		setCursorPosition(position);
	}
};

const isCursorPositionEnd = () => {
	// check cursor position end
	const target = document.activeElement as HTMLElement;

	// cofound data-id attribute is not exist
	if (!isCofoundElement(target)) {
		return false;
	}

	return getCursorPosition() === target.textContent?.length;
};

const setCursorPositionLast = () => {
	// target cursor position end
	const target = document.activeElement as HTMLElement;
	if (!isCofoundElement(target)) {
		return;
	}

	const range = document.createRange();
	const selection = window.getSelection();
	range.selectNodeContents(target);
	range.collapse(false);
	selection?.removeAllRanges();
	selection?.addRange(range);
};

const getCursorPosition = () => {
	// get cursor position
	const target = document.activeElement as HTMLElement;
	if (!isCofoundElement(target)) {
		return 0;
	}

	const selection = window.getSelection();
	const range = selection?.getRangeAt(0);
	const preSelectionRange = range?.cloneRange();
	preSelectionRange?.selectNodeContents(target);
	if (!preSelectionRange || !range) return 0;

	preSelectionRange?.setEnd(range?.endContainer, range?.endOffset);
	return preSelectionRange?.toString().length;
};

const setCursorPosition = (position: number) => {
	// target cursor position set
	const target = document.activeElement as HTMLElement;
	if (!isCofoundElement(target)) {
		return;
	}

	const range = document.createRange();
	const selection = window.getSelection();
	range.selectNodeContents(target);
	range.collapse(true);
	range.setStart(target.firstChild as Node, position);
	range.setEnd(target.firstChild as Node, position);
	selection?.removeAllRanges();
	selection?.addRange(range);
};

export const focusBack = () => {
	// focus 되어있는 Row의 뒤에 Row를 focus 하고 싶다.
	const isCursorPositionEndCheck = isCursorPositionEnd();
	const position = getCursorPosition();
	const target = document.activeElement?.nextSibling as HTMLElement;
	target?.focus();

	// 내용물이 없다면 focus 하지 않는다.
	if (!target || target?.textContent === '') {
		return;
	}

	requestAnimationFrame(() => setCursorPositionAuto(isCursorPositionEndCheck, position));
};

export const focusFront = () => {
	if (!document.activeElement) return;
	// focus 되어있는 Row의 앞에 Row를 focus 하고 싶다.
	const isCursorPositionEndCheck = isCursorPositionEnd();
	const position = getCursorPosition();
	const target = document.activeElement?.previousSibling as HTMLElement;
	target?.focus();

	// 내용물이 없다면 focus 하지 않는다.
	if (!target || target?.textContent === '') {
		return;
	}

	requestAnimationFrame(() => setCursorPositionAuto(isCursorPositionEndCheck, position));
};
