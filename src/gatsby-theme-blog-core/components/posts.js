import React from "react";
import Posts from "../../components/posts";

const PostsCore = ({ location, data }) => {
    const { site, allBlogPost } = data;
    return (
        <Posts
            location={location}
            posts={allBlogPost.edges}
            siteTitle={site.siteMetadata.title}
            socialLinks={site.siteMetadata.social}
        />
    );
};

export default PostsCore;
