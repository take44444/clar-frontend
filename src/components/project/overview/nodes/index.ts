import type { BuiltInNode, NodeTypes } from '@xyflow/react';
import EntityNode, { type EntityNode as EntityNodeType } from "@/components/project/overview/nodes/EntityNode";
import ProcessNode, { type ProcessNode as ProcessNodeType } from "@/components/project/overview/nodes/ProcessNode";
import RoleNode, { type RoleNode as RoleNodeType } from "@/components/project/overview/nodes/RoleNode";
import TaskNode, { type TaskNode as TaskNodeType } from "@/components/project/overview/nodes/TaskNode";
import UserNode, { type UserNode as UserNodeType } from "@/components/project/overview/nodes/UserNode";

export const nodeTypes = {
  'entity-node': EntityNode,
  'process-node': ProcessNode,
  'role-node': RoleNode,
  'task-node': TaskNode,
  'user-node': UserNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;

// Append the types of you custom edges to the BuiltInNode type
export type CustomNodeType = BuiltInNode | EntityNodeType | ProcessNodeType | RoleNodeType | TaskNodeType | UserNodeType;
