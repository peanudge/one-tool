import React from 'react';
import { Step } from '../../types/client.type';

type Props = {
    step: Step;
};

export const StepCard: React.FC<Props> = ({ step }) => {
    return (
        <div
            className="
            flex flex-row
            before:content-[''] before:block before:w-2 before:h-full before:rounded-l-md before:p-0 before:bg-blue-500
            sm:w-2/3 md:w-2/3 lg:w-1/2 rounded-md  mb-44 bg-gray-50">
            <div className="p-5">
                <p className="text-lg">{step.title}</p>
                <p className="text-sm">{step.description}</p>
            </div>
        </div>
    );
};
