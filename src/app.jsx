import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Carts from "./components/Carts";
import ResMenu from "./components/ResMenu";
import Login from "./components/Login";
import Register from "./components/Register";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import cartStore from "./utils/CartStore";
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState();
  const {userLogoDark,userLogoLight}=useContext(UserContext);
  return (
    <Provider store={cartStore}>
    <UserContext.Provider value={{setUserName,userName,userLogoLight,userLogoDark}}>
      <div className="app dark:bg-[#110f2a] bg-white min-h-screen">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Outlet context={{ isLoggedIn, setIsLoggedIn }} />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/carts",
        element: <Carts />,
      },
      {
        path: "/login",
        element: <Login />, // Setter function is passed via context
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/resMenu/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
