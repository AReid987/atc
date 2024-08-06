import React, { useState } from 'react';
import Mermaid from 'mermaid-react';
import { Tooltip } from '@/components/ui/tooltip';

const diagramDefinition = `
  ... (same as before)
`;

const componentInfo = {
  A: { name: "Main Website", description: "Primary user-facing application" },
  B: { name: "Showcase Projects", description: "Display of project portfolio" },
  // ... add info for all components
};

const InteractiveArchitectureDiagram = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleNodeClick = (nodeId) => {
    setSelectedComponent(componentInfo[nodeId]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">System Architecture</h2>
      <div className="border rounded-lg shadow-lg p-4 bg-white">
        <Mermaid 
          chart={diagramDefinition} 
          onClick={handleNodeClick}
        />
      </div>
      {selectedComponent && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold">{selectedComponent.name}</h3>
          <p>{selectedComponent.description}</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveArchitectureDiagram;
