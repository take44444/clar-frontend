import type { BuiltInEdge, EdgeTypes } from "@xyflow/react";

import RelationEdge, { type RelationEdge as RelationEdgeType } from "@/components/project/overview/edges/RelationEdge";

export const edgeTypes = {
  // Add your custom edge types here!
  "relation-edge": RelationEdge,
} satisfies EdgeTypes;

// Append the types of you custom edges to the BuiltInEdge type
export type CustomEdgeType = BuiltInEdge | RelationEdgeType;
