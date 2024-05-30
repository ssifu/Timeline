import { Card, CardContent, Typography } from "@mui/material";

const PostCard = ({ title, userName, body }) => {
  return (
    <Card
      style={{ backgroundColor: "#26a69a", color: "white" }}
      variant="outlined"
      sx={{ mb: 1.5, mt: 1.5 }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mt: 1.5, mb: 1 }} style={{ color: "#f5f5f5" }}>
          {userName}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
