import Highlight from 'react-highlight';
import { CodeContent } from '../../types/client.type';

type Props = {
    codeContent: CodeContent;
};
export const CodeViewer: React.FC<Props> = ({ codeContent }) => {
    return (
        <div className="p-5">
            <p className="text-xl p-5 border-b-2">🧑‍💻 Code Viewer</p>
            {codeContent.codes.map((code, idx) => {
                return (
                    <Highlight key={idx} language="javascript">
                        {code}
                    </Highlight>
                );
            })}
        </div>
    );
};
