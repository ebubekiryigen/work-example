import { createBrowserRouter } from "react-router-dom";
import About from "./page/about";
import Blog from "./page/blog";
import BlogDetail from "./page/blogDetail";
import Contact from "./page/contact";
import Home from "./page/Home";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
        children: [
            {
                path: ":id",
                element: <BlogDetail />,
            },
        ],
      },
])


export default router