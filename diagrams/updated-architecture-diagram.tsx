import React from 'react';
import Mermaid from 'mermaid-react';

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

    A --> J
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
    classDef deployed fill:#bfb,stroke:#333,stroke-width:4px;

    class A,B,C,D,N frontend;
    class E,F,G,O backend;
    class H,I,P storage;
    class J,K,L,M,Q external;
    class A deployed;
`;

const InteractiveArchitectureDiagram = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">System Architecture</h2>
      <div className="border rounded-lg shadow-lg p-4 bg-white">
        <Mermaid chart={diagramDefinition} />
      </div>
      <div className="mt-4">
        <p><span className="inline-block w-4 h-4 bg-[#bfb] border-2 border-[#333] mr-2"></span> Deployed on Vercel</p>
      </div>
    </div>
  );
};

export default InteractiveArchitectureDiagram;
