import React, { FC, useEffect, useRef } from 'react';
import { StepCard, StepCardProps } from './StepCard';
import { useIntersection } from 'react-use';
import { Step } from '../../types/client.type';

const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '-200px 0px -200px 0px', // TODO: Refactoring more flexibly
    threshold: 0.5
};

type IntersectionStepCardProps = StepCardProps & {
    onIntersection(step: Step, entry: DOMRectReadOnly): void;
};

export const IntersectionStepCard: FC<IntersectionStepCardProps> = (props) => {
    const { onIntersection, step } = props;
    const intersectionRef = useRef();
    const intersection = useIntersection(intersectionRef, options); // TODO: when test component, need to mock up intersection API of useIntersection.

    useEffect(() => {
        if (intersection && intersection.isIntersecting) {
            if (step.content) {
                // only step have content. invoke intersection.
                onIntersection(step, intersection.rootBounds);
            }
        }
    }, [intersection, onIntersection, step]);

    return (
        <div ref={intersectionRef} className="w-full flex flex-col items-end">
            <StepCard {...props} />
        </div>
    );
};
