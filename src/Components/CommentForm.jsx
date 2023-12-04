import { useState } from "react";
import { saveComment } from "../api";

export default function CommentForm(props) {
  const [comment, setComment] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // save the comment now
        saveComment({
          body: comment,
          postId: props.postId,
        }).then(() => {
          // then empty out text area
          setComment("");
        });
      }}
    >
      <input type="hidden" name="postId" value={props.postId} />
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
    </form>
  );
}
