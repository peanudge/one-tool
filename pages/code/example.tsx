import { useRouter } from 'next/router';
import React from 'react';
import { StepByStepTutorial } from '../../components/organisms/StepByStepTutorial';
import { Step, StepGroup } from '../../types/client.type';

const Example = ({ stepGroup }) => {
    const router = useRouter();
    const isDebugMode = router.query.debug !== undefined && router.query.debug === 'true';

    return (
        <div className="w-full mx-auto self-center">
            <StepByStepTutorial stepGroup={stepGroup} showBoundary={isDebugMode} />
            <div className="h-40" />
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
            codes: ['function hi() {', ' const a = 1;', ' return a;', '}'],
            mark: { 0: { textColor: 'red', bgColor: 'white' } }
        }
    };
    const stepGroup: StepGroup = {
        steps: [step1, step2, step3]
    };

    return { props: { stepGroup } };
}

export default Example;
