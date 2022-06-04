import React, { useEffect } from 'react';
import { Step, StepGroup } from '../../types/client.type';

const stepGroup: StepGroup = {
    steps: []
};

const section: Step = {
    title: 'First Section',
    description: 'this is example code section',
    content: {
        type: 'code',
        codes: ['function hi() {', ' const a = 1;', ' return a;', '}'],
        mark: { 0: { textColor: 'red', bgColor: 'white' } }
    }
};
for (let i = 0; i < 10; i++) {
    stepGroup.steps.push(section);
}

const Example = () => {
    return (
        <>
            <div className="flex-1 flex flex-col w-full">
                <div className="flex flex-row">
                    <div className="flex-1 flex flex-col items-end mr-12 mt-40">
                        {stepGroup.steps.map((section, idx) => (
                            <div
                                key={idx}
                                className="w-1/2 p-5 rounded-md border-2 mb-44 bg-slate-200 sticky">
                                <p>{section.title}</p>
                                <p>{section.description}</p>
                            </div>
                        ))}
                        <div className="min-h-screen -mt-80 w-full" />
                    </div>
                    <div className="flex-1">
                        <div className="sticky top-12 w-full bg-slate-400 min-h-screen">
                            Content
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Example;
