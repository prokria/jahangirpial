import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const theme = createTheme();

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "#f7f1e3",
            pt: 8,
            pb: 6,
            minHeight: "100vh",
          }}
        >
          <Container maxWidth="sm">
            <Box sx={{ textAlign: "center", padding: 3 }}>
              <img src="/logo.png" alt="JahangirPial" width="200" />
            </Box>

            <Typography
              variant="subtitle1"
              align="center"
              color="text.primary"
              paragraph
            >
              I'm <strong>Jahangir Pial</strong> a professional Software
              Engineer, currently working at mPower Social. Also, I'm a full
              time learner of new technologies and many more things! If you have
              any investment idea or plan to develop any tech project, feel free
              to contact with me.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="outlined"
                href="https://www.facebook.com/jpial/"
                target="_blank"
              >
                <FacebookIcon />
              </Button>
              <Button
                variant="outlined"
                href="https://twitter.com/jahangirpial"
                target="_blank"
              >
                <TwitterIcon />
              </Button>
              <Button
                variant="outlined"
                href="https://github.com/japial"
                target="_blank"
              >
                <GitHubIcon />
              </Button>
              <Button
                variant="outlined"
                href="mailto:jahangiralompial@gmail.com"
              >
                <EmailIcon />
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
