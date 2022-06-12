import React from 'react';
import { render } from '@testing-library/react';
import { Step } from '../../types/client.type';
import { StepCard } from '../../components/molecules/StepCard';

describe('StepCard', () => {
    const mockStep: Step = {
        id: 0,
        title: 'Mock Step',
        description: 'This is mock description',
        content: {
            type: 'code',
            codes: []
        }
    };

    test('render texts', () => {
        const { getByText } = render(<StepCard step={mockStep} active />);
        getByText('Mock Step');
        getByText('This is mock description');
    });
});
