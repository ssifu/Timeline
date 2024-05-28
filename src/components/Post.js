import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, blue } from "@mui/material/colors";
import { Button, Container, Modal } from "@mui/material";
import { Box } from "@mui/material";

const colorTheme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "50%",
  // maxHeight: 500,
  // width: "90vw",
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "#009688",
  border: "none",
  outline: "none",
  color: "#FFF",
  boxShadow: 24,
  p: 4,
};
export default function OutlinedCard({ post, user, comments }) {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={colorTheme}>
      <Container
        maxWidth={"lg"}
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(true)}
      >
        <Card
          style={{ backgroundColor: "#009688", color: "white" }}
          variant="outlined"
          sx={{ mb: 1.5 }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography sx={{ mt: 1.5, mb: 1 }} style={{ color: "#f5f5f5" }}>
              {user.name}
            </Typography>
            <Typography variant="body2">{post.body}</Typography>
          </CardContent>
        </Card>
      </Container>
      <Modal
        style={{ overflow: "scroll" }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <Card
            style={{ backgroundColor: "#26a69a", color: "white" }}
            variant="outlined"
            sx={{ mb: 1.5 }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography sx={{ mt: 1.5, mb: 1 }} style={{ color: "#f5f5f5" }}>
                {user.name}
              </Typography>
              <Typography variant="body2">{post.body}</Typography>
            </CardContent>
          </Card>
          <Typography variant="h5" fontWeight={800}>
            Comments
          </Typography>
          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <Card
                  style={{ backgroundColor: "#4db6ac", color: "white" }}
                  sx={{ mb: 1.5 }}
                >
                  <CardContent>
                    <Typography
                      sx={{ mb: 1 }}
                      style={{ color: "#f5f5f5", fontWeight: "bold" }}
                    >
                      {comment.email}
                    </Typography>
                    <Typography variant="body2">{comment.body}</Typography>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <Typography variant="body2">No Comments</Typography>
          )}
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
