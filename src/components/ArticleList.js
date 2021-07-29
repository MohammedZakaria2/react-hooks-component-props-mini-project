import React from 'react'
import data from './../data/blog'
function ArticleList () {
return (
    <main>
{
    data.posts.map(post => {
        return <h2 key={post.id}>{post.title}</h2>
    })
}
    </main>
)
}

export default ArticleList