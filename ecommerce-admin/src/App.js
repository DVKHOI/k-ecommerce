import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Customers,
  Dashboard,
  Enquiries,
  ForgotPassword,
  Login,
  ResetPassword,
} from "./pages";
import { MainLayout } from "./components";
import {
  AddBlog,
  AddBlogCat,
  AddBrand,
  AddCategory,
  AddColor,
  AddProduct,
  BlogCatList,
  BlogList,
  BrandList,
  CategoryList,
  ColorList,
  Order,
  ProductList,
} from "./modules";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="enquiries" element={<Enquiries />} />

          <Route path="customers" element={<Customers />} />

          <Route path="blog" element={<AddBlog />} />

          <Route path="blog/:id" element={<AddBlog />} />
          <Route path="blog-list" element={<BlogList />} />

          <Route path="blog-category" element={<AddBlogCat />} />
          <Route path="blog-category-list" element={<BlogCatList />} />

          <Route path="orders" element={<Order />} />

          <Route path="product" element={<AddProduct />} />
          <Route path="product-list" element={<ProductList />} />

          <Route path="brand" element={<AddBrand />} />
          <Route path="brand/:id" element={<AddBrand />} />
          <Route path="list-brand" element={<BrandList />} />

          <Route path="category" element={<AddCategory />} />
          <Route path="category/:id" element={<AddCategory />} />
          <Route path="list-category" element={<CategoryList />} />

          <Route path="color" element={<AddColor />} />
          <Route path="list-color" element={<ColorList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
