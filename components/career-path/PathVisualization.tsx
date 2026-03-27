'use client';

import { useCallback, useMemo, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  Node,
  Edge,
  Position
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCareerStore } from '@/store/useCareerStore';
import { PathNode } from './PathNode';

const nodeTypes = {
  customNode: PathNode,
};

export function PathVisualization() {
  const { paths, setSelectedNode } = useCareerStore();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    if (!paths.length) return;

    const newNodes: Node[] = [];
    const newEdges: Edge[] = [];

    const startX = 50;
    const startY = 50;
    const xSpacing = 350;
    const ySpacing = 250;

    paths.forEach((path, pathIndex) => {
      // Add a label node for the path
      newNodes.push({
        id: `path-label-${path.id}`,
        type: 'default',
        position: { x: startX, y: startY + pathIndex * ySpacing - 60 },
        data: { label: `${path.name} (${path.totalTimeline}) - ${path.difficulty}` },
        style: { 
          background: 'transparent', 
          border: 'none', 
          fontSize: '14px', 
          fontWeight: 'bold', 
          color: '#0f172a',
          width: 300,
          textAlign: 'left'
        },
        draggable: false,
        selectable: false,
      });

      path.roles.forEach((role, roleIndex) => {
        const nodeId = `${path.id}-${role.id}`;
        
        newNodes.push({
          id: nodeId,
          type: 'customNode',
          position: { x: startX + roleIndex * xSpacing, y: startY + pathIndex * ySpacing },
          data: { 
            role, 
            pathId: path.id,
            isStart: roleIndex === 0,
            isEnd: roleIndex === path.roles.length - 1
          },
        });

        if (roleIndex > 0) {
          const prevNodeId = `${path.id}-${path.roles[roleIndex - 1].id}`;
          newEdges.push({
            id: `e-${prevNodeId}-${nodeId}`,
            source: prevNodeId,
            target: nodeId,
            label: role.transitionTimeline || '',
            type: 'smoothstep',
            animated: true,
            style: { stroke: '#10b981', strokeWidth: 2 },
            labelStyle: { fill: '#64748b', fontWeight: 500, fontSize: 12 },
            labelBgStyle: { fill: '#f8fafc', fillOpacity: 0.8 },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: '#10b981',
            },
          });
        }
      });
    });

    setNodes(newNodes);
    setEdges(newEdges);
  }, [paths, setNodes, setEdges]);

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    if (node.type === 'customNode') {
      setSelectedNode({ pathId: node.data.pathId as string, role: node.data.role as any });
    }
  }, [setSelectedNode]);

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-slate-50/50 rounded-2xl border border-slate-200 overflow-hidden relative shadow-inner">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.1}
        maxZoom={1.5}
        className="bg-slate-50/30"
      >
        <Background color="#cbd5e1" gap={20} size={1} />
        <Controls className="bg-white border-slate-200 shadow-sm rounded-lg overflow-hidden" />
        <MiniMap 
          className="bg-white border-slate-200 shadow-sm rounded-lg"
          nodeColor={(n) => {
            if (n.type === 'customNode') return '#10b981';
            return 'transparent';
          }}
        />
      </ReactFlow>
    </div>
  );
}
