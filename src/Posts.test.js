import { render, screen } from "@testing-library/react";

function PostCard(props) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.post.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          By {props.post.user.name}
        </h6>
        <p className="card-text">
          {props.post.description.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
}

test("rendering posts", () => {
  // Arrange
  const posts = [
    {
      userId: "1",
      title: "My fav matcha store",
      description: "Ceremonial grade matcha! So rich! :)",
      body: "I LOVE THIS CAFE! Seating is amazing and the quality of the matcha is truly elite. I'd go here on a date or to study.",
      id: "1",
    },
    {
      id: "2",
      userId: "1",
      title: "How to Train Your Dragon",
      description: "Best heart-warming movie.",
      body: "THIS MOVIE DESERVES EVERYTHING AND MORE. It is musically, visually, and narrative-wise unlike any other animated movie.",
    },
  ];

  //Act
  const { getByText, getAllByTestId } = render(
    <div>
      {posts.map((post) => {
        return <PostCard data-testid="post" post={post} key={post.id} />;
      })}
    </div>
  );

  // Assert
  // check that there's two posts (posts.length)
  // expect(getByText("My fav matcha store")).toBeInTheDocument();
  expect(getAllByTestId("post").length).toBe(2);
  //
});
