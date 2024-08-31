
import { useParams } from 'react-router-dom';

function Post() {
  const { postId } = useParams();
  

  const post = { id: postId, title: `Post ${postId}`, content: `Content of post ${postId}` };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
