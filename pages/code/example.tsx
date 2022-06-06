import { useRouter } from 'next/router';
import React from 'react';
import { StepByStepTutorial } from '../../components/organisms/StepByStepTutorial';
import { Step, StepGroup } from '../../types/client.type';

const Example = ({ stepGroup }) => {
    const router = useRouter();
    const isDebugMode = router.query.debug !== undefined && router.query.debug === 'true';

    return (
        <div className="w-full mx-8 self-center">
            <h1 className="flex w-full flex-row justify-center text-4xl mt-10">
                Example Tutorial 1
            </h1>
            <div className="h-20" />
            <StepByStepTutorial stepGroup={stepGroup} showBoundary={isDebugMode} />

            <h1 className="flex w-full flex-row justify-center text-4xl mt-10">
                Example Tutorial 2
            </h1>
            <div className="h-20" />
            <StepByStepTutorial stepGroup={stepGroup} showBoundary={isDebugMode} />
        </div>
    );
};

export async function getServerSideProps() {
    // Fetch data from external API

    const step1: Step = {
        id: 0,
        title: '🧑‍💻 Start Coding',
        description: 'Very easy coding with function template.',
        content: {
            type: 'code',
            codes: ['function hi() {', ' const a = 1;', ' return a;', '}'],
            mark: { 0: { textColor: 'red', bgColor: 'white' } }
        }
    };

    const step2: Step = {
        id: 1,
        title: '🚧 NOTE',
        description: 'Always think and typing!'
    };

    const step3: Step = {
        id: 2,
        title: '🧑‍💻 Last! Test with test code',
        description: 'this is example code section',
        content: {
            type: 'code',
            codes: [
                `export const CodeViewer: React.FC<Props> = ({ codeContent }) => {\n\treturn;\n}`
            ],
            mark: { 0: { textColor: 'red', bgColor: 'white' } }
        }
    };

    const step4: Step = {
        id: 3,
        title: '✍️ Finish',
        description: 'this is example code section',
        content: {
            type: 'code',
            language: 'typescript',
            codes: [`function hello() {\n\t// FINISH\n}`],
            mark: { 0: { textColor: 'red', bgColor: 'white' } }
        }
    };
    const stepGroup: StepGroup = {
        steps: [
            step1,
            step2,
            step3,
            step4,
            {
                id: 1,
                title: '🚧 NOTE',
                description: 'Always think and typing!'
            }
        ]
    };

    return { props: { stepGroup } };
}

export default Example;
