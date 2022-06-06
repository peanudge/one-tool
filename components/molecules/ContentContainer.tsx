import React from 'react';
import { Content } from '../../types/client.type';
import { CodeViewer } from './CodeViewer';

type Props = {
    content: Content;
};

export const ContentContainer: React.FC<Props> = ({ content }) => {
    switch (content.type) {
        case 'code':
            return <CodeViewer codeContent={content} />;
        default:
            return;
    }
};
