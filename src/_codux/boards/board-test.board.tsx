import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'BoardTest',
    Board: () => <div>
        <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" />
    </div>,
    isSnippet: true,
});
