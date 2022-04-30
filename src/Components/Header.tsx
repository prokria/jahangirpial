import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ background: "#000" }}>
        <Avatar alt="logo" src="/logo.png" sx={{ width: 56, height: 56 }} />
      </Toolbar>
    </AppBar>
  );
}
