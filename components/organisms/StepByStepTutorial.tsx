import React, { useCallback, useState } from 'react';
import { Step, StepGroup } from '../../types/client.type';
import { IntersectionStepCard } from '../molecules/IntersectionStepCard';

const DEBUG = true;
type StepByStepTutorial = {
    stepGroup: StepGroup;
};

export const StepByStepTutorial: React.FC<StepByStepTutorial> = ({ stepGroup }) => {
    const [activStep, setActiveStep] = useState<Step | null>(null);

    // DEBUG
    const [currentBoundary, setCurrentBoundary] = useState<DOMRectReadOnly | null>();
    const handleIntersection = useCallback((step: Step, boundary: DOMRectReadOnly) => {
        setActiveStep(step);
        setCurrentBoundary(boundary);
    }, []);

    return (
        <>
            <div className="flex-1 flex flex-col w-full">
                <div className="flex flex-row">
                    <div className="flex-1 flex flex-col mr-12 mt-40">
                        {stepGroup.steps.map((step) => (
                            <IntersectionStepCard
                                key={step.id}
                                active={activStep && activStep.id === step.id}
                                step={step}
                                onIntersection={handleIntersection}
                            />
                        ))}
                        <div className="min-h-screen  w-full" />
                    </div>
                    <div className="flex-1">
                        <div className="sticky top-12 w-full bg-slate-200 min-h-screen">
                            Content
                            {activStep && <p className="text-lg">{activStep.title}</p>}
                        </div>
                    </div>
                </div>
            </div>
            {/* DEBUG */}
            {DEBUG && currentBoundary && (
                <div
                    style={{
                        position: 'fixed',
                        top: currentBoundary.top,
                        left: currentBoundary.left,
                        width: currentBoundary.width,
                        height: currentBoundary.height,
                        border: '1px solid red'
                    }}
                />
            )}
        </>
    );
};
