import { Post } from "./Posts";
import { fetchComments } from '../api.js';

export default function PostItem({post}: {post: Post}) {
    // replace with useQuery
    const data = [];

    return (
        <>
            <h3 style={{ color: "blue" }}>{post.title}</h3>
            <button>Delete</button> <button>Update title</button>
            <p>{post.body}</p>
            <h4>Comments</h4>
            {data.map((comment) => (
                <li key={comment.id}>
                    {comment.email}: {comment.body}
                </li>
            ))}
        </>
    );
}
