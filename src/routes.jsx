import React from "react";

const routes = [
  {
    exact: true,
    path: "/",
    component: React.lazy(() =>
      import("./modules/dashboard/DashboardContainer")
    ),
  },
  {
    path: "/budget",
    exact: true,
    component: React.lazy(() =>
      import("./modules/budget-viewer/BudgetViewerContainer")
    ),
  },
  {
    path: "/login",
    exact: true,
    component: React.lazy(() => import("./modules/login/Login")),
  },
];

export default routes;
