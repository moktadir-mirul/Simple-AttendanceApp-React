import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../Components/RootLayout";
import { Shop } from "../Pages/Shop";
import { Cart } from "../Pages/Cart";
import { Posts } from "../Pages/Posts";
import { UserList } from "../Pages/UserList";
import { PostDetails } from "../Pages/PostDetails";
import { CounterApp } from "../Pages/Counter";

export const RootRouter = createBrowserRouter   ([
                                                   {path:"/", element: <RootLayout />, children: [
                                                    {path:"/", index: true, element: <Shop />},
                                                    {path: "/cart", element: <Cart />},
                                                    {path: "/posts", element: <Posts />},
                                                    {path:"/user", element: <UserList />},
                                                    {path:"/user/:userId", element: <PostDetails /> },
                                                    {path:"/counter", element: <CounterApp />}
                                                    ]} 
                                                ])