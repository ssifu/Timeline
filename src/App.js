import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import OutlinedCard from "./components/Post";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import { Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
  },
});

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, usersResponse, commentsResponse] =
          await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/posts"),
            axios.get("https://jsonplaceholder.typicode.com/users"),
            axios.get("https://jsonplaceholder.typicode.com/comments"),
          ]);
        setPosts(postsResponse.data);
        console.log(postsResponse.data);
        const userData = usersResponse.data.reduce((acc, user) => {
          acc[user.id] = user;
          return acc;
        }, {});
        console.log(userData);
        setUsers(userData);
        console.log(commentsResponse);
        setComments(commentsResponse.data);
      } catch (error) {
        console.log("Error loading data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading posts and user data...</p>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={10}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={3}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography
              variant="h1"
              style={{ textAlign: "center", color: "#009688" }}
            >
              Timeline
            </Typography>
            {posts.length > 0 ? (
              posts.map((post) => (
                <OutlinedCard
                  key={post.id}
                  post={post}
                  user={users[post.userId]}
                  comments={comments.filter(
                    (comment) => comment.postId === post.id
                  )}
                />
              ))
            ) : (
              <p>No posts available</p>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;