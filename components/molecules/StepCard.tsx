import React from 'react';
import { Step } from '../../types/client.type';

export type StepCardProps = {
    step: Step;
    active: boolean;
};

export const StepCard: React.FC<StepCardProps> = ({ step, active = false }) => {
    const activeMarkStyle =
        "before:content-[''] before:block before:w-2 before:h-full before:rounded-l-md before:p-0 before:bg-blue-500";
    const backgroundStyle = step.content ? 'bg-gray-50 my-40' : 'bg-white mt-40';
    return (
        <div
            className={`flex flex-row rounded-md ${backgroundStyle} ${
                active ? activeMarkStyle : ''
            }`}>
            <div className="p-5">
                <p className="text-lg">{step.title}</p>
                <p className="text-sm">{step.description}</p>
            </div>
        </div>
    );
};
