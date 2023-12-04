import { useLoaderData } from "react-router-dom";
import CommentForm from "../Components/CommentForm";
// import { fetchUserById } from "../api";

export default function Post() {
  const post = useLoaderData();

  return (
    <div className="post-page">
      {/* <h1>{post.title}</h1>
      <h4>By {post.user.name}</h4>

      <p>{post.body}</p> */}
      <h1>{post.title}</h1>
      <h5>{post.description}</h5>
      <h4>By {post.user.name}</h4>
      <p>{post.body}</p>
      <br></br>
      <h3>Comments</h3>
      <ol>
        {post.comments.map((comment) => {
          return (
            <li key={comment.id}>
              {comment.body} | Posted by {comment.userId}
            </li>
          );
        })}
      </ol>

      <CommentForm postId={post.id} />
    </div>
  );
}
