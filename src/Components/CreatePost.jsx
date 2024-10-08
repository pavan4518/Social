import { useContext, useRef } from "react";
import "../App";
import { PostList } from "../store/post-list";
export default function CreatePost() {
  const { addPost } = useContext(PostList);
  const userIdE = useRef();
  const postTitleE = useRef();
  const postBodyE = useRef();
  const reactionE = useRef();
  const tagsE = useRef();

  const handleSummit = (event) => {
    event.preventDefault();
    const userID = userIdE.current.value;
    const title = postTitleE.current.value;
    const postBody = postBodyE.current.value;
    const reaction = reactionE.current.value;
    const tags = tagsE.current.value.split(" ");

    userIdE.current.value = "";
    postTitleE.current.value = "";
    postBodyE.current.value = "";
    reactionE.current.value = "";
    tagsE.current.value = "";

    addPost(userID, title, postBody, reaction, tags);
  };
  return (
    <form className="create" onSubmit={handleSummit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter You User ID
        </label>
        <input
          type="text"
          ref={userIdE}
          className="form-control"
          id="title"
          placeholder="Your User ID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleE}
          className="form-control"
          id="title"
          placeholder="How are you feeling Today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyE}
          rows="4"
          type="text"
          className="form-control"
          id="title"
          placeholder="Tell me more About Today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of people Reacted
        </label>
        <input
          ref={reactionE}
          type="text"
          className="form-control"
          id="Recation"
          placeholder="How many people reacted "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Enter Your Tags
        </label>
        <input
          ref={tagsE}
          type="text"
          className="form-control"
          id="Recation"
          placeholder="please enter yours tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}
