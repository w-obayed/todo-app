import CreateTodo from "../pages/CreateTodo/CreateTodo";
import Today from "../pages/CreateTodo/Today/Today";
import UpcomingTodo from "../pages/CreateTodo/UpcomingTodo/UpcomingTodo";

const publicRouter = [
  {
    path: "/",
    element: <CreateTodo />,
    children: [
      {
        path: "upcoming",
        element: <UpcomingTodo />,
      },
      {
        path: "today",
        element: <Today />,
      },
    ],
  },
];

export default publicRouter;
