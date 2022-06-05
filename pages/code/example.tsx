import React from 'react';
import { StepByStepTutorial } from '../../components/organisms/StepByStepTutorial';
import { Step, StepGroup } from '../../types/client.type';

const stepGroup: StepGroup = {
    steps: []
};

const mockStep: Step = {
    id: 0,
    title: 'TITLE ',
    description: 'this is example code section',
    content: {
        type: 'code',
        codes: ['function hi() {', ' const a = 1;', ' return a;', '}'],
        mark: { 0: { textColor: 'red', bgColor: 'white' } }
    }
};
for (let i = 0; i < 10; i++) {
    stepGroup.steps.push({ ...mockStep, id: i, title: mockStep.title + i });
}

const Example = () => {
    return (
        <div className="w-full mx-auto self-center">
            <StepByStepTutorial stepGroup={stepGroup} />
            <div className="h-40" />
            <StepByStepTutorial stepGroup={stepGroup} />
        </div>
    );
};

export default Example;
