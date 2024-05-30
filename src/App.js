import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Timeline from "./components/Timeline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

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
        const sortedPosts = postsResponse.data.sort((a, b) => b.id - a.id);
        setPosts(sortedPosts);
        console.log(postsResponse.data);
        const userData = usersResponse.data.reduce((acc, user) => {
          acc[user.id] = user;
          return acc;
        }, {});
        console.log("User Data: " + userData);
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
    <Grid
      container
      spacing={10}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={3}>
        <Box
          style={{
            backgroundColor: "#009688",
          }}
          sx={{ maxWidth: 600 }}
        >
          <Typography
            variant="h2"
            style={{ textAlign: "center", color: "#FFF", fontWeight: "bold" }}
          >
            Timeline
          </Typography>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Timeline
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
  );
};

export default App;
