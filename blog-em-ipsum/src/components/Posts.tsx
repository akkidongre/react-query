import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts, deletePost, updatePost } from "../api.js";
import PostItem from "./PostItem";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const maxPostPage = 10;

export default function Posts() {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedPost, setSelectedPost] = useState(null);

    // replace with useQuery
    const {data, isError, isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 2000
    });

    if (isLoading) {
        <h3>Loading...</h3>
    }

    if (isError) {
        <h3>Error...</h3>
    }

    if (!data) {
        return <div></div>
    }

    return (
        <>
            <ul>
                {data.map((post) => (
                    <li
                        key={post.id}
                        className="post-title"
                        onClick={() => setSelectedPost(post)}
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
            <div className="pages">
                <button disabled onClick={() => { }}>
                    Previous page
                </button>
                <span>Page {currentPage + 1}</span>
                <button disabled onClick={() => { }}>
                    Next page
                </button>
            </div>
            <hr />
            {selectedPost && <PostItem post={selectedPost} />}
        </>
    );
}