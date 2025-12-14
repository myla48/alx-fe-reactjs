import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return <h3>Viewing Blog Post #{id}</h3>;
}
export default BlogPost;
