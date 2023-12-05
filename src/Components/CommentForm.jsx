import { useState } from "react";
import { saveComment } from "../api";

import { ToastContainer, toast } from "react-toastify";

export default function CommentForm(props) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // DO ERROR HANDLING HERE
        // save the comment now
        saveComment({
          userName: name,
          body: comment,
          postId: props.postId,
        }).then(
          () => {
            // then empty out text area
            setComment("");
            setName("");
            toast.success("Yay! You commented.");
            props.onSubmitCommentForm();
          },
          () => {
            toast.error("Oops! Something went wrong. Please try again.");
          }
        );
      }}
    >
      <input type="hidden" name="postId" value={props.postId} />
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="titleHelp"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label htmlFor="name">Name</label>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="comment"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <label htmlFor="comment">Leave a comment</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/* allows it to be rendered on the page */}
      <ToastContainer position="bottom-left" autoClose={5000} />
    </form>
  );
}
