export interface IProps {
}

export interface IState1 {
    open: boolean;
}

export interface IState {
    elements: any[];
}

export interface Process {
    fromProcessId: number;
    toProcessId: number;
}

export interface ProcessFlows {
    id: string;
    name: string;
}

export interface Node {
    id: string;
    data?: {};
    position?: any;
    type?: string;
    style?: {};
    targetPosition?: string;
}

export interface Edge {
    id: string;
    source: string;
    target: string;
    animated?: boolean;
    label?: string;
    type?: string;
    arrowHeadType?: string;
    style?: {};
}
