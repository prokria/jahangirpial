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
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
            pt: 1,
            pb: 2,
            minHeight: "100vh",
          }}
        >
          <Container maxWidth="md">
              <Box sx={{ textAlign: "center", padding: 3 }}>
                  <img src="/pial.JPG" alt="JahangirPialPhoto" style={{borderRadius: 10, width:100, border: "3px solid #000" }} />
              </Box>

            <Stack
                sx={{ pt: 1 }}
                direction="row"
                spacing={2}
                justifyContent="center"
                flexWrap={"wrap"}
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
                  href="https://www.linkedin.com/in/jahangirpial/"
                  target="_blank"
              >
                <LinkedInIcon />
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
            <Typography
              variant="subtitle1"
              align="justify"
              color="text.primary"
              paragraph
            >
             <h4> I'm a Software Engineer with a Passion for Innovation.</h4>

              <p>
                  <strong>👨‍ About Me: </strong>
                  I am a highly skilled and dedicated software engineer with a bachelor's degree in Computer Science and Engineering,
                bringing over five years of industry experience to the table.
                My journey in the world of technology has been marked by a relentless pursuit of excellence, a deep-seated passion for problem-solving,
                and an unquenchable thirst for innovation.
              </p>


              <p>
                  <strong>🌟 Professional Expertise: </strong>
                  My expertise spans across a wide range of programming languages,
                  software development methodologies, and cutting-edge technologies. Over the course of my career,
                I have demonstrated a proven ability to deliver robust and scalable solutions that meet the unique challenges of each project.
                Whether it's designing elegant user interfaces, architecting complex backend systems, or optimizing code for performance,
                I thrive on turning ideas into functional, user-friendly, and impactful software.
              </p>


             <p>
                 <strong>🔧 Technical Proficiencies: </strong>
                 With a strong foundation in computer science concepts, I am well-versed in languages such as PHP, JavaScript, and Go,
                 and have hands-on experience with frameworks like Laravel, React, Symfony and Codeigniter.
                 My toolkit includes a deep understanding of database management systems, RESTful APIs, version control systems and cloud technologies,
                 allowing me to build versatile and reliable software applications.
             </p>


              <p>
                  <strong>🚀 Professional Journey: </strong>
                  Throughout my five-year journey as a software engineer,
                I have contributed to a diverse array of projects that have honed my skills in various domains.
                From developing e-commerce platforms that streamlined customer experiences,
                to crafting intricate financial software that adheres to the strictest security standards,
                I have consistently demonstrated adaptability and a quick grasp of domain-specific requirements.
              </p>

             <p>
                 <strong>🌐 Continuous Learning and Growth: </strong>
                 In the rapidly evolving tech landscape, I am committed to staying at the forefront of innovation.
               My eagerness to learn and adapt has led me to stay current with industry trends, attending workshops, conferences,
               and pursuing online courses to expand my skill set. This continuous pursuit of knowledge ensures that
                 I remain equipped to tackle new challenges head-on.
             </p>


              <p>
                  <strong>🌍 Beyond Code: </strong>
                  While I am deeply passionate about coding, my interests extend beyond the screen. In my free time,
                I enjoy exploring the realms of photography, outdoor activities, and volunteering within my community.
                These experiences contribute to my holistic approach to problem-solving and creativity.
              </p>


              <p>
                  <strong>🤝 Collaborative Approach: </strong>
                  An effective communicator and team player, I believe that the best results are achieved through collaboration and shared ideas.
                My ability to seamlessly integrate within multidisciplinary teams has been pivotal in delivering high-quality software solutions
                that meet both technical and business objectives.
              </p>


              <p>
                  <strong>🏆 Future Endeavors: </strong>
                  As I look ahead, I am excited to continue pushing boundaries and contributing to the evolution of technology.
                With a solid foundation, a passion for learning, and a track record of success, I am poised to embrace new challenges and drive
                innovation in the software engineering landscape.
              </p>

             <h4>Let's connect and embark on exciting tech ventures together!</h4>
            </Typography>

              <Box sx={{ textAlign: "center", padding: 3, border: "1px solid #DDD" }}>
                  <img src="/logo.png" alt="JahangirPial" width="200" />
              </Box>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
