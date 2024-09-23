import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Scrollbar } from "./Scrollbar";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = (text: any) => {
    const data = text.replace(/\s/g, "");
    window.location.href = data;
    console.log(data);
  };
  return (
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "white" }} open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
                color: "rgb(0 60 113)",
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "rgb(0 60 113)" }}
          >
            Dashboards
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 160,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 160,
            backgroundColor: "black",
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["System", "Master Data", "Technical", "PMS"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{
                backgroundColor: "black",
                color: "white",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                width: 150,
              }}
            >
              <ListItemButton>
                {/* <ListItemIcon sx={{color:"white"}}> */}
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {/* </ListItemIcon> */}
                <ListItemText
                  onClick={() => handleClick(text)}
                  primary={text}
                />
                <Divider sx={{ height: "50px" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ backgroundColor: "white", height: "1px" }} />
        <List>
          {["Operation", "Crewing", "Payroll", "Finance"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{
                backgroundColor: "black",
                color: "white",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                width: 150,
              }}
            >
              <ListItemButton>
                {/* <ListItemIcon sx={{color:"white"}}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText
                  onClick={() => handleClick(text)}
                  primary={text}
                />
                <Divider sx={{ height: "50px" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 1 }}>
          <Scrollbar />
        </Typography>
      </Main>
    </Box>
  );
}
