"use client";

import React from "react";

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Avatar from '@mui/joy/Avatar';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Tooltip from '@mui/joy/Tooltip';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import ListDivider from '@mui/joy/ListDivider';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import DialogTitle from '@mui/joy/DialogTitle';

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { ThemeSwitch } from "@/components/ThemeSwitch";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between' }}>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: { xs: 'none', sm: 'flex' },
          ml: 5
        }}
      >
        <Button
          variant="plain"
          color="neutral"
          component="a"
          href="/"
          size="lg"
          sx={{ alignSelf: 'center' }}
        >
          <Typography component="h1" sx={{ fontWeight: 'xl', fontSize: 38 }}>Lipsum</Typography>
        </Button>
        <Tooltip title="Source Code" variant="soft">
          <IconButton
            size="md"
            variant="solid"
            color="neutral"
            component="a"
            href="https://github.com/take44444"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      {/* <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
          <MenuRoundedIcon />
        </IconButton>
        <Drawer
          sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalClose />
          <DialogTitle>Acme Co.</DialogTitle>
          <Box sx={{ px: 1 }}>
            <TeamNav />
          </Box>
        </Drawer>
      </Box> */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1.5,
          alignItems: 'center',
        }}
      >
        <Tooltip title="Switch theme" variant="soft">
          <ThemeSwitch />
        </Tooltip>
        <Button
          sx={{ display: 'flex', alignItems: 'center' }}
          variant="soft"
          color="primary"
          component="a"
          href="#"
        >
          <AccountCircleIcon sx={{ fontSize: 32 }} />
          <Box sx={{ ml: 1.5 }}>
            <Typography level="title-sm" textColor="text.primary">
              Takeshi Masumoto
            </Typography>
            <Typography level="body-xs" textColor="text.tertiary">
              take44444.general@gmail.com
            </Typography>
          </Box>
        </Button>
        <Button
          size="sm"
          variant="plain"
          color="neutral"
          component="a"
          href="#"
          sx={{ alignSelf: 'center' }}
        >
          <LogoutRoundedIcon href="#" />
          Log out
        </Button>
      </Box>
    </Box>
  );
};

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";

export default function LayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Layout.Root
        sx={[
          drawerOpen && {
            height: '100vh',
            overflow: 'hidden',
          },
        ]}
      >
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.SideNav>
          <Navigation />
        </Layout.SideNav>
        <Layout.Main>
          {children}
        </Layout.Main>
      </Layout.Root>
    </CssVarsProvider>
  );
}