import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import PostList from "./PostList";
export default function Post({ post }) {
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          This Post has been reacted by by{post.reaction} Peoples
        </div>
      </div>
    </div>
  );
}
