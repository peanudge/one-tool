export interface StepGroup {
    steps: Step[];
}

export interface Step {
    id: number;
    title: string;
    description: string;
    content?: Content;
}
export interface CodeContent {
    type: 'code';
    language?: string;
    codes: string[];
}

export type ImagePathUri = string; // ex) http://aws.s3....

export interface ImageContent {
    type: 'image';
    uri: ImagePathUri;
}

// 추후 Content
export type Content = CodeContent | ImageContent | undefined;
