import { useState } from "react";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import PostModal from "./PostModal";
import PostCard from "./PostCard";

export default function Timeline({ post, user, comments }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container
        maxWidth={"lg"}
        style={{
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      >
        <PostCard title={post.title} userName={user.name} body={post.body} />
      </Container>
      <Divider style={{ border: "0.25rem solid #26a69a" }} />
      <PostModal
        post={post}
        user={user}
        comments={comments}
        openModal={open}
        setOpenModal={setOpen}
      />
    </>
  );
}
