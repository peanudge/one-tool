import Highlight from 'react-highlight';
import { CodeContent } from '../../types/client.type';

type Props = {
    codeContent: CodeContent;
};
export const CodeViewer: React.FC<Props> = ({ codeContent }) => {
    const languageOfCode = codeContent.language ?? 'javascript';
    return (
        <div className="p-5 max-h-screen w-full self-stretch overflow-scroll">
            <p className="text-xl p-5 border-b-2 mb-2">🧑‍💻 Code Viewer</p>
            {codeContent.codes.map((code, idx) => (
                <Highlight key={idx} language={languageOfCode}>
                    {code}
                </Highlight>
            ))}
        </div>
    );
};
