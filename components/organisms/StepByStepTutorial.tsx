import React from 'react';
import { StepGroup } from '../../types/client.type';
import { StepCard } from '../molecules/StepCard';

type StepByStepTutorial = {
    stepGroup: StepGroup;
};

export const StepByStepTutorial: React.FC<StepByStepTutorial> = ({ stepGroup }) => {
    return (
        <div className="flex-1 flex flex-col w-full">
            <div className="flex flex-row">
                <div className="flex-1 flex flex-col items-end mr-12 mt-40">
                    {stepGroup.steps.map((step, idx) => (
                        <StepCard key={idx} step={step} />
                    ))}
                    <div className="min-h-screen  w-full" />
                </div>
                <div className="flex-1">
                    <div className="sticky top-12 w-full bg-slate-200 min-h-screen">Content</div>
                </div>
            </div>
        </div>
    );
};
