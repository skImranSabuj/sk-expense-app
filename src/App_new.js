// import React from "react";
// import ReactDOM from "react-dom/client";
// import ErrorPage from "./error-page";
// import Contact, { loader as contactLoader } from "./routes/contact";
// import EditContact, { action as editAction } from "./routes/edit";
// import { action as destroyAction } from "./routes/destroy";
// import Root, {
//   loader as rootLoader,
//   action as rootAction,
// } from "./routes/root";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
// import Index from "./routes";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     // loader: rootLoader,
//     // action: rootAction,
//     children: [
//       { index: true, element: <Index /> },
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//         loader: contactLoader,
//       },
//       {
//         path: "contacts/:contactId/edit",
//         element: <EditContact />,
//         loader: contactLoader,
//         action: editAction,
//       },
//       {
//         path: "contacts/:contactId/destroy",
//         action: destroyAction,
//         errorElement: <div>Oops! Something went wrong!.</div>,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
