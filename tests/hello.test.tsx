import React from 'react';
import { render } from '@testing-library/react';

describe('hello', () => {
    test('world', () => {
        render(<div />);
        expect(null).toBeNull();
    });
});
