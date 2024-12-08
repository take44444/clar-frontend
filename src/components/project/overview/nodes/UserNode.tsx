import { Box, Button, Stack, Typography } from "@mui/joy";
import type { Node, NodeProps } from "@xyflow/react";
import { Handle, Position } from "@xyflow/react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export type UserNodeData = {
  in?: boolean;
  out?: boolean;
  label: string;
  mail: string;
};

export type UserNode = Node<UserNodeData>;

export default function UserNode({
  data,
}: NodeProps<UserNode>) {

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <Button
      sx={(theme) => ({ display: 'flex', alignItems: 'center', height: 40, width: 200, boxShadow: theme.shadow.lg })}
      variant="soft"
      color="primary"
      component="a"
      href="#"
    >
      <Stack direction="row" sx={{ width: "100%" }}>
        <AccountCircleIcon sx={{ fontSize: 26 }} />
        <Box sx={{ ml: 1 }}>
          <Typography level="title-sm" textColor="text.secondary" sx={{ fontSize: 12 }}>
            {data.label}
          </Typography>
          <Typography level="body-xs" textColor="text.tertiary" sx={{ fontSize: 7 }}>
            {data.mail}
          </Typography>
        </Box>
        {data.in && <Handle type="target" position={Position.Left} style={{ background: "#555" }} />}
        {data.out && <Handle type="source" position={Position.Right} style={{ background: "#555" }} />}
      </Stack>
    </Button>
  );
}
