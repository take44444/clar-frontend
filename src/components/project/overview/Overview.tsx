import {
  Background,
  BackgroundVariant,
  Edge,
  Node,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  useStore,
  ViewportPortal,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { nodeTypes, type CustomNodeType } from "./nodes";
import { edgeTypes, type CustomEdgeType } from "./edges";
import { useEffect } from "react";

const initialNodes = [
  {
    id: 'role1',
    type: "role-node",
    position: { x: 0, y: 0 },
    data: { out: true, label: 'Business Analyst' },
  },
  {
    id: 'role2',
    type: "role-node",
    position: { x: 0, y: 50 },
    data: { out: true, label: 'Architecture' },
  },
  {
    id: 'role3',
    type: "role-node",
    position: { x: 0, y: 100 },
    data: { out: true, label: 'Developer' },
  },
  {
    id: 'user1',
    type: "user-node",
    position: { x: 300, y: 0 },
    data: { in: true, out: true, label: 'Takeshi Masumoto', mail: 'take44444.general@gmail.com' },
  },
  {
    id: 'user2',
    type: "user-node",
    position: { x: 300, y: 50 },
    data: { in: true, out: true, label: 'Alice', mail: 'alice@alice.com' },
  },
  {
    id: 'user3',
    type: "user-node",
    position: { x: 300, y: 100 },
    data: { in: true, out: true, label: 'Bob', mail: 'bob@bob.com' },
  },
  {
    id: 'user4',
    type: "user-node",
    position: { x: 300, y: 150 },
    data: { in: true, out: true, label: 'Charlie', mail: 'charlie@charlie.com' },
  },
  {
    id: 'task1',
    type: "task-node",
    position: { x: 600, y: 0 },
    data: { in: true, out: true, label: 'Implement User Service.' },
  },
  {
    id: 'task2',
    type: "task-node",
    position: { x: 600, y: 50 },
    data: { in: true, out: true, label: 'Implement Repository for backend with GraphDB.' },
  },
  {
    id: 'task3',
    type: "task-node",
    position: { x: 600, y: 100 },
    data: { in: true, out: true, label: 'Make UI design.' },
  },
  {
    id: 'task4',
    type: "task-node",
    position: { x: 600, y: 150 },
    data: { in: true, out: true, label: 'Design data model for backend.' },
  },
  {
    id: 'task5',
    type: "task-node",
    position: { x: 600, y: 200 },
    data: { in: true, out: true, label: 'Implement Resolvers for GraphQL Queries.' },
  },
  {
    id: 'task6',
    type: "task-node",
    position: { x: 600, y: 250 },
    data: { in: true, out: true, label: 'Implement Resolvers for GraphQL Mutations.' },
  },
  {
    id: 'task7',
    type: "task-node",
    position: { x: 600, y: 300 },
    data: { in: true, out: true, label: 'Create front-end.' },
  },
  {
    id: 'process1',
    type: "process-node",
    position: { x: 900, y: 0 },
    data: { in: true, label: 'Feasibility check' },
  },
  {
    id: 'process2',
    type: "process-node",
    position: { x: 900, y: 50 },
    data: { in: true, label: 'Create basic design' },
  },
  {
    id: 'process3',
    type: "process-node",
    position: { x: 900, y: 100 },
    data: { in: true, label: 'Create detail design' },
  },
  {
    id: 'process4',
    type: "process-node",
    position: { x: 900, y: 150 },
    data: { in: true, label: 'Development' },
  },
  {
    id: 'process5',
    type: "process-node",
    position: { x: 900, y: 200 },
    data: { in: true, label: 'Test' },
  },
] satisfies Node[];

const initialEdges = [
  { id: "1", source: "role1", target: "user1", type: "relation-edge" },
  { id: "2", source: "role1", target: "user2", type: "relation-edge" },
  { id: "3", source: "role1", target: "user3", type: "relation-edge" },
  { id: "4", source: "role2", target: "user1", type: "relation-edge" },
  { id: "5", source: "role2", target: "user4", type: "relation-edge" },
  { id: "6", source: "role3", target: "user1", type: "relation-edge" },
  { id: "7", source: "role3", target: "user3", type: "relation-edge" },
  { id: "8", source: "role3", target: "user4", type: "relation-edge" },
  { id: "9", source: "user1", target: "task3", type: "relation-edge" },
  { id: "10", source: "user1", target: "task7", type: "relation-edge" },
  { id: "11", source: "user2", target: "task3", type: "relation-edge" },
  { id: "12", source: "user3", target: "task4", type: "relation-edge" },
  { id: "13", source: "user3", target: "task2", type: "relation-edge" },
  { id: "14", source: "user3", target: "task1", type: "relation-edge" },
  { id: "15", source: "user4", target: "task4", type: "relation-edge" },
  { id: "16", source: "user4", target: "task6", type: "relation-edge" },
  { id: "17", source: "user4", target: "task5", type: "relation-edge" },
  { id: "18", source: "task1", target: "process3", type: "relation-edge" },
  { id: "19", source: "task2", target: "process5", type: "relation-edge" },
  { id: "20", source: "task3", target: "process2", type: "relation-edge" },
  { id: "21", source: "task4", target: "process1", type: "relation-edge" },
  { id: "22", source: "task5", target: "process3", type: "relation-edge" },
  { id: "23", source: "task6", target: "process2", type: "relation-edge" },
  { id: "24", source: "task7", target: "process4", type: "relation-edge" },
] satisfies Edge[];

function Overview() {
  const widthSelector = (state: { width: any }) => state.width;
  const heightSelector = (state: { height: any }) => state.height;
  const reactFlowWidth = useStore(widthSelector);
  const reactFlowHeight = useStore(heightSelector);

  const reactFlowInstance = useReactFlow();
  useEffect(() => {
    reactFlowInstance.fitView();
  }, [reactFlowWidth, reactFlowHeight, reactFlowInstance]);
  return (
    <ReactFlow<CustomNodeType, CustomEdgeType>
      // preventScrolling={false}
      panOnDrag={false}
      // panOnScroll
      panActivationKeyCode={""}
      // panOnScrollMode={"vertical"}
      zoomOnDoubleClick={false}
      zoomOnPinch={false}
      zoomOnScroll={false}
      zoomActivationKeyCode={""}
      nodes={initialNodes}
      nodeTypes={nodeTypes}
      edges={initialEdges}
      edgeTypes={edgeTypes}
      nodesDraggable={false}
      // draggable={false}
      // edgesFocusable={false}
      fitView
    >
      <ViewportPortal>
        <div
          style={{ transform: 'translate(0px, -50px)', position: 'absolute', textAlign: 'center', width: 200, color: "#555" }}
        >
          Role
        </div>
        <div
          style={{ transform: 'translate(300px, -50px)', position: 'absolute', textAlign: 'center', width: 200, color: "#555" }}
        >
          Member
        </div>
        <div
          style={{ transform: 'translate(600px, -50px)', position: 'absolute', textAlign: 'center', width: 200, color: "#555" }}
        >
          Task
        </div>
        <div
          style={{ transform: 'translate(900px, -50px)', position: 'absolute', textAlign: 'center', width: 200, color: "#555" }}
        >
          Process
        </div>
      </ViewportPortal>
      <Background color="#ddd" variant={BackgroundVariant.Cross} />
    </ReactFlow>
  );
}

export default function OverviewProvider() {
  return (
    <ReactFlowProvider>
      <Overview />
    </ReactFlowProvider>
  );
}
