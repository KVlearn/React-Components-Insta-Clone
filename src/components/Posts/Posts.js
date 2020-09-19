import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts,searchText } = props;
  console.log('props==',props)
  let out;
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {/* {posts.filter((item)=>{
         if(item.username.includes(searchText)){
           console.log(searchText);
          console.log(item.username);
          console.log('filtered!!!!!')
          out=item
         }
        })
        } */}

      {posts.filter(item => item.username.includes(searchText))
      .map((item)=><Post post={item} likePost={likePost}/>)}
      
      {/* { posts.map((item)=>{
        return <Post post={item} likePost={likePost} />
      }) */}
      {/* } */}
    </div>
  );
};

export default Posts;
