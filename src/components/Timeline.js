import { useState, useCallback } from "react";
import { Container } from "@mui/material";
import PostModal from "./PostModal";
import PostCard from "./PostCard";

export default function Timeline({ posts, users, comments }) {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedComments, setSelectedComments] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenModal = useCallback(
    (post) => {
      setSelectedPost(post);
      setSelectedComments(
        comments.filter((comment) => comment.postId === post.id)
      );
      setSelectedUser(users[post.userId]);
      setOpen(true);
    },
    [comments, users]
  );

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedPost(null);
    setSelectedComments([]);
    setSelectedUser(null);
  };

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => {
          const title = post.title;
          const name = users[post.userId]?.name || "Unknown User";
          const body = post.body;

          return (
            <Container
              key={post.id}
              maxWidth={"lg"}
              style={{
                cursor: "pointer",
              }}
              onClick={() => handleOpenModal(post)}
            >
              <PostCard title={title} userName={name} body={body} />
            </Container>
          );
        })
      ) : (
        <p>No posts available</p>
      )}
      {selectedPost && (
        <PostModal
          post={selectedPost}
          user={selectedUser}
          comments={selectedComments}
          openModal={open}
          setOpenModal={handleCloseModal}
        />
      )}
    </>
  );
}
