"use client"
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import createEngine, {
  DefaultLinkModel,
  DefaultNodeModel,
  DiagramModel,
} from '@projectstorm/react-diagrams';

const diagramDefinition = `
  graph TB
    subgraph "Frontend"
        A[Main Website]
        B[Showcase Projects]
        C[Design System]
        D[Component Library]
        N[Research Generator UI]
    end

    subgraph "Backend"
        E[NestJS API]
        F[GraphQL Server]
        G[AI Processing Service]
        O[STORM-based Research Engine]
    end

    subgraph "Data Storage"
        H[(Database)]
        I[(File Storage)]
        P[(Research Data)]
    end

    subgraph "External Services"
        J[Vercel]
        K[Docker]
        L[Figma]
        M[Tokens Studio]
        Q[External Research APIs]
    end

    A --> C
    B --> C
    A --> D
    B --> D
    A --> F
    B --> F
    N --> F
    E --> F
    E --> G
    F --> H
    G --> I
    C --> M
    D --> K
    A --> J
    B --> J
    E --> J
    F --> J
    G --> K
    L --> M
    N --> O
    O --> G
    O --> P
    O --> Q

    classDef frontend fill:#f9f,stroke:#333,stroke-width:2px;
    classDef backend fill:#bbf,stroke:#333,stroke-width:2px;
    classDef storage fill:#ff9,stroke:#333,stroke-width:2px;
    classDef external fill:#bfb,stroke:#333,stroke-width:2px;

    class A,B,C,D,N frontend;
    class E,F,G,O backend;
    class H,I,P storage;
    class J,K,L,M,Q external;
    `;

const engine = createEngine();

// node 1
const node1 = new DefaultNodeModel({
  name: 'Node 1',
  color: 'rgb(0,192,255)',
});
node1.setPosition(100, 100);
let port1 = node1.addOutPort('Out');

// node 2
const node2 = new DefaultNodeModel({
  name: 'Node 1',
  color: 'rgb(0,192,255)',
});
node2.setPosition(100, 100);
let port2 = node2.addOutPort('Out');

// link them and add a label to the link
const link = port1.link<DefaultLinkModel>(port2);
link.addLabel('Hello World!');

const model = new DiagramModel();
model.addAll(node1, node2, link);
engine.setModel(model);

/**
 * @description Renders a React component, consisting of a heading "System Architecture"
 * and a `<div>` element containing a `<CanvasWidget>`. The `CanvasWidget` receives
 * an `engine` prop, which is not defined within the code snippet.
 * 
 * @returns {JSX.Element} A React component that represents a hierarchical view of
 * the system architecture. The returned element consists of three child elements:
 * an h1 heading and two div elements with specific styles and a CanvasWidget element
 * inside one of them.
 */
export default function ArchitectureDiagramPage() {
  return (
    <div className='h-96'>
      <h1>System Architecture</h1>
      <div className='h-96 bg-white'>
        <CanvasWidget engine={engine} />
      </div>
    </div>
  );
}