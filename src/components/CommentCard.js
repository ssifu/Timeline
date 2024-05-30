import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CommentCard = ({ name, email, body }) => {
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
          {name}
        </Typography>
        <Typography
          sx={{ mb: 1 }}
          style={{ color: "#f5f5f5", fontWeight: "bold" }}
        >
          {email}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
