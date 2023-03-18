import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/baseUrl";

// create a new blog
const createBlog = async (blog) => {
  const response = await axios.post(`${base_url}blog`, blog, config);
  return response.data;
};
// update a blog
const updateBlog = async (blog) => {
  const response = await axios.put(
    `${base_url}blog/${blog.id}`,
    {
      title: blog.blogData.title,
      description: blog.blogData.description,
      category: blog.blogData.category,
      images: blog.blogData.images,
    },
    config
  );
  return response.data;
};

// delete blog
const deleteBlog = async (id) => {
  const response = await axios.delete(`${base_url}blog/${id}`, config);

  return response.data;
};

// get all blog
const getAllBlog = async () => {
  const response = await axios.get(`${base_url}blog/`);

  return response.data;
};
// get a blog
const getBlog = async (id) => {
  const response = await axios.get(`${base_url}blog/${id}`, config);

  return response.data;
};

const blogService = {
  getAllBlog,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};
export default blogService;
