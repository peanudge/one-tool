import React from 'react';
import { render } from '@testing-library/react';
import { CodeViewer } from '../../../components/molecules/CodeViewer';
import { CodeContent } from '../../../types/client.type';

const emptyCodeContent: CodeContent = {
    type: 'code',
    language: 'javascript',
    codes: []
};

describe('CodeViewer', () => {
    test('render title', () => {
        const { getByText } = render(<CodeViewer codeContent={emptyCodeContent} />);
        getByText('🧑‍💻 Code Viewer');
    });

    test('render code parsed by highlight.js', () => {
        const codeContent = {
            ...emptyCodeContent,
            codes: ['function test() {}']
        };
        const { getByText } = render(<CodeViewer codeContent={codeContent} />);

        const functionElement = getByText('function');
        expect(functionElement.className).toEqual('hljs-keyword');

        const functionNameElement = getByText('test');
        expect(functionNameElement.className).toEqual('hljs-title');

        const paramstElement = getByText('()');
        expect(paramstElement.className).toEqual('hljs-params');

        const functionImplementElement = getByText('{}');
        expect(functionImplementElement.className).toEqual('hljs actionscript');
    });
});
