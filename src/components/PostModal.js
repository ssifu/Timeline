import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import PostCard from "./PostCard";
import CommentCard from "./CommentCard";

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

const PostModal = ({ post, user, comments, openModal, setOpenModal }) => {
  return (
    <Modal
      style={{ overflow: "scroll" }}
      open={openModal}
      onClose={() => setOpenModal(false)}
    >
      <Box sx={style}>
        <PostCard title={post.title} userName={user.name} body={post.body} />
        <Typography variant="h5" fontWeight={800}>
          Comments
        </Typography>
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <CommentCard
                key={comment.id}
                email={comment.email}
                body={comment.body}
              />
            );
          })
        ) : (
          <Typography variant="body2">No Comments</Typography>
        )}
      </Box>
    </Modal>
  );
};

export default PostModal;
