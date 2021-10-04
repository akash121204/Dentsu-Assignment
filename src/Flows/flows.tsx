import React from "react";
import { HttpService } from "../services/HttpServices";
import ReactFlow from 'react-flow-renderer';
import { IProps, IState, Process, Node, Edge, ProcessFlows } from '../Interfaces/interface';

class Flows extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            elements: []
        };

        this.createNodesAndEdges = this.createNodesAndEdges.bind(this);
    }

    onElementClick = (event: any, element: any) => {
        HttpService.get(`flow/process/${element.id}`).then((response: any) => {
            window.confirm(`Name: ${response.name}, Average Duration: ${response.avgDuration}, Description: ${response.description}`);
        });
    }

    componentDidMount() {
        // const apiResponse = [
        //     {
        //         "fromProcessId": 1,
        //         "toProcessId": 2
        //     },
        //     {
        //         "fromProcessId": 1,
        //         "toProcessId": 3
        //     },
        //     {
        //         "fromProcessId": 2,
        //         "toProcessId": 4
        //     },
        //     {
        //         "fromProcessId": 5,
        //         "toProcessId": 7
        //     },
        //     {
        //         "fromProcessId": 6,
        //         "toProcessId": 7
        //     },
        //     {
        //         "fromProcessId": 8,
        //         "toProcessId": 11
        //     },
        //     {
        //         "fromProcessId": 7,
        //         "toProcessId": 9
        //     },
        //     {
        //         "fromProcessId": 7,
        //         "toProcessId": 10
        //     },
        //     {
        //         "fromProcessId": 7,
        //         "toProcessId": 11
        //     },
        //     {
        //         "fromProcessId": 9,
        //         "toProcessId": 12
        //     },
        //     {
        //         "fromProcessId": 10,
        //         "toProcessId": 12
        //     },
        //     {
        //         "fromProcessId": 11,
        //         "toProcessId": 12
        //     },
        //     {
        //         "fromProcessId": 13,
        //         "toProcessId": 16
        //     },
        //     {
        //         "fromProcessId": 13,
        //         "toProcessId": 17
        //     },
        //     {
        //         "fromProcessId": 14,
        //         "toProcessId": 17
        //     },
        //     {
        //         "fromProcessId": 14,
        //         "toProcessId": 18
        //     },
        //     {
        //         "fromProcessId": 15,
        //         "toProcessId": 18
        //     },
        //     {
        //         "fromProcessId": 15,
        //         "toProcessId": 19
        //     },
        //     {
        //         "fromProcessId": 16,
        //         "toProcessId": 20
        //     },
        //     {
        //         "fromProcessId": 16,
        //         "toProcessId": 21
        //     },
        //     {
        //         "fromProcessId": 17,
        //         "toProcessId": 21
        //     },
        //     {
        //         "fromProcessId": 17,
        //         "toProcessId": 22
        //     },
        //     {
        //         "fromProcessId": 18,
        //         "toProcessId": 21
        //     },
        //     {
        //         "fromProcessId": 18,
        //         "toProcessId": 22
        //     },
        //     {
        //         "fromProcessId": 18,
        //         "toProcessId": 23
        //     },
        //     {
        //         "fromProcessId": 20,
        //         "toProcessId": 24
        //     },
        //     {
        //         "fromProcessId": 20,
        //         "toProcessId": 25
        //     },
        //     {
        //         "fromProcessId": 20,
        //         "toProcessId": 26
        //     },
        //     {
        //         "fromProcessId": 22,
        //         "toProcessId": 25
        //     },
        //     {
        //         "fromProcessId": 24,
        //         "toProcessId": 28
        //     },
        //     {
        //         "fromProcessId": 25,
        //         "toProcessId": 27
        //     },
        //     {
        //         "fromProcessId": 26,
        //         "toProcessId": 30
        //     },
        //     {
        //         "fromProcessId": 28,
        //         "toProcessId": 29
        //     },
        //     {
        //         "fromProcessId": 27,
        //         "toProcessId": 29
        //     }
        // ]
        // this.createNodesAndEdges(apiResponse);

        let apiResponse: Process[] = [];

        HttpService.get('flow').then((resposne: ProcessFlows[]) => {
            resposne.forEach((element: ProcessFlows) => {
                HttpService.get(`flow/${element.id}`).then((result: Process[]) => {
                    apiResponse.push(...result);
                    this.createNodesAndEdges(apiResponse);
                });
            });
        });
    }


    createNodesAndEdges(apiResponse: Process[]) {
        const nodes: Node[] = [];

        apiResponse.forEach((element: Process) => {
            nodes.push({
                id: element.fromProcessId.toString(),
                position: {
                    x: 0,
                    y: 0
                },
                data: { label: `Process ${element.fromProcessId}` },
                style: { width: 100 }
            })
        });

        apiResponse.forEach((element: Process) => {
            nodes.push({
                id: element.toProcessId.toString(),
                position: {
                    x: 0,
                    y: 0
                },
                data: { label: `Process ${element.toProcessId}` },
                style: { width: 100 }
            })
        });

        const ids = nodes.map(o => o.id);
        const filteredNodes: Node[] = nodes.filter(({ id }, index) => !ids.includes(id, index + 1))

        let positions: any = [];

        if (window.innerWidth >= 320 && window.innerWidth < 640) {
            for (let i = 0; i < filteredNodes.length / 2; i++) {
                for (let j = 0; j < filteredNodes.length / 15; j++) {
                    const position = { x: j * 150 + 20, y: i * 100 + 30 };
                    positions.push(position);
                }
            }
        } else if (window.innerWidth >= 640 && window.innerWidth < 960) {
            for (let i = 0; i < filteredNodes.length / 5; i++) {
                for (let j = 0; j < filteredNodes.length / 6; j++) {
                    const position = { x: j * 120 + 20, y: i * 100 + 30 };
                    positions.push(position);
                }
            }
        } else if (window.innerWidth >= 960 && window.innerWidth < 1280) {
            for (let i = 0; i < filteredNodes.length / 5; i++) {
                for (let j = 0; j < filteredNodes.length / 6; j++) {
                    const position = { x: j * 200 + 20, y: i * 100 + 30 };
                    positions.push(position);
                }
            }
        } else {
            for (let i = 0; i < filteredNodes.length / 5; i++) {
                for (let j = 0; j < filteredNodes.length / 6; j++) {
                    const position = { x: j * 200 + 300, y: i * 100 + 30 };
                    positions.push(position);
                }
            }
        }

        for (let i = 0; i < positions.length; i++) {
            filteredNodes[i].position = positions[i];
        }

        const edges: Edge[] = [];

        apiResponse.forEach((element: Process) => {
            edges.push({
                id: `e${element.fromProcessId}-${element.toProcessId}`,
                source: element.fromProcessId.toString(),
                target: element.toProcessId.toString(),
                animated: true,
                type: 'default',
                label: `E${element.fromProcessId}-${element.toProcessId}`,
                arrowHeadType: 'arrowclosed'
            })
        });

        const elements = [...filteredNodes, ...edges];

        this.setState({ elements });
    }

    render() {
        return (
            <div style={{ height: 600, background: 'darkslategrey' }}>
                <ReactFlow elements={this.state.elements} onElementClick={this.onElementClick}></ReactFlow>
            </div>
        )
    }
}

export default Flows;