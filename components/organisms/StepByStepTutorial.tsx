import React, { useCallback, useState } from 'react';
import { Step, StepGroup } from '../../types/client.type';
import { ContentContainer } from '../molecules/ContentContainer';
import { IntersectionStepCard } from '../molecules/IntersectionStepCard';

type StepByStepTutorial = {
    stepGroup: StepGroup;
    showBoundary?: boolean;
};

export const StepByStepTutorial: React.FC<StepByStepTutorial> = ({ stepGroup, showBoundary }) => {
    const [activeStep, setActiveStep] = useState<Step | null>(null);
    // for DEBUG
    const [currentBoundary, setCurrentBoundary] = useState<DOMRectReadOnly | null>();

    const handleIntersection = useCallback((step: Step, boundary: DOMRectReadOnly) => {
        setActiveStep(step);
        setCurrentBoundary(boundary);
    }, []);

    return (
        <>
            <div className="flex-1 flex flex-col">
                <div className="flex flex-row">
                    <div className="flex-1 flex flex-col mr-12 mt-40">
                        {stepGroup.steps.map((step) => (
                            <IntersectionStepCard
                                key={step.id}
                                active={activeStep && activeStep.id === step.id}
                                step={step}
                                onIntersection={handleIntersection}
                            />
                        ))}
                        <div className="min-h-screen" />
                    </div>
                    <div className="flex-1 sticky top-12 bg-transparent min-h-screen self-start bg-gray-200">
                        {activeStep && <ContentContainer content={activeStep.content} />}
                    </div>
                </div>
            </div>
            {/* for DEBUG */}
            {showBoundary && currentBoundary && (
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
