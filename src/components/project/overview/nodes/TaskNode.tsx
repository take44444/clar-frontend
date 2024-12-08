import { Box, Button, Stack, Typography } from "@mui/joy";
import type { Node, NodeProps } from "@xyflow/react";
import { Handle, Position } from "@xyflow/react";

export type TaskNodeData = {
  in?: boolean;
  out?: boolean;
  label: string;
};

export type TaskNode = Node<TaskNodeData>;

export default function TaskNode({
  data,
}: NodeProps<TaskNode>) {

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <Button
      sx={(theme) => ({ display: 'flex', alignItems: 'center', height: 40, width: 200, boxShadow: theme.shadow.lg })}
      variant="soft"
      color="danger"
      component="a"
      href="#"
    >
      <Stack direction="row" sx={{ width: "100%" }}>
        <Typography level="title-sm" textColor="text.secondary" sx={{ fontSize: 10 }}>
          {data.label}
        </Typography>
        {data.in && <Handle type="target" position={Position.Left} style={{ background: "#555" }} />}
        {data.out && <Handle type="source" position={Position.Right} style={{ background: "#555" }} />}
      </Stack>
    </Button>
    // <div className="react-flow__node-default" style={{
    //   height: 40,
    //   width: 150,
    //   color: "#555",
    //   borderColor: "#555",
    // }}>
    //   {data.label && <div>{data.label}</div>}

    // </div>
  );
}
