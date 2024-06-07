import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../Components/RootLayout";
import { Shop } from "../Pages/Shop";
import { Cart } from "../Pages/Cart";
import { Posts } from "../Pages/Posts";

export const RootRouter = createBrowserRouter   ([
                                                   {path:"/", element: <RootLayout />, children: [
                                                    {path:"/", index: true, element: <Shop />},
                                                    {path: "/cart", element: <Cart />},
                                                    {path: "/posts", element: <Posts />}
                                                    ] } 
                                                ])