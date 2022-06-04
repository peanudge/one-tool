export interface StepGroup {
    steps: Step[];
}

export interface Step {
    title: string;
    description: string;
    content?: Content;
}

export type RGBCode = string; // ex. #FFFFFF

export interface CodeMark {
    [line: number]: {
        textColor?: RGBCode;
        bgColor?: RGBCode;
    };
}

export interface CodeContent {
    type: 'code';
    codes: string[];
    mark: CodeMark;
}

export type ImagePathUri = string; // ex) http://aws.s3....

export interface ImageContent {
    type: 'image';
    uri: ImagePathUri;
}

// 추후 Content
export type Content = CodeContent | ImageContent | undefined;
