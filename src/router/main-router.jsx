import { createBrowserRouter } from "react-router-dom";
import { Dashboard, AuthPage } from "@entrance-layout";
import { Agen, Analytic, Category, Product, Setting, NotFound } from "@/pages";

const router = createBrowserRouter([
  
    {
      
      path: "/",
      element: <Dashboard />,
      children: [
    
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "category",
          element: <Category />,
        },
        {
          path: "agen",
          element: <Agen />,
        },
        {
          path: "analytic",
          element: <Analytic />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "/auth-page",
      element: <AuthPage />,
    },
    {
      path: "*",
      element: <Error />,
    },
    
    
  ]);
  

export default router;
