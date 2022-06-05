import React, { FC, useEffect, useRef } from 'react';
import { StepCard, StepCardProps } from './StepCard';
import { useIntersection } from 'react-use';
import { Step } from '../../types/client.type';

const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '-100px 0px -300px 0px',
    threshold: 0.5
};

type IntersectionStepCardProps = StepCardProps & {
    onIntersection(step: Step, entry: DOMRectReadOnly): void;
};

export const IntersectionStepCard: FC<IntersectionStepCardProps> = (props) => {
    const { onIntersection, step } = props;
    const intersectionRef = useRef();
    const intersection = useIntersection(intersectionRef, options);

    useEffect(() => {
        if (intersection && intersection.isIntersecting) {
            onIntersection(step, intersection.rootBounds);
        }
    }, [intersection, onIntersection, step]);

    return (
        <div ref={intersectionRef} className="w-full flex flex-col items-end">
            <StepCard {...props} />
        </div>
    );
};
