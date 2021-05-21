import React from "react";
const Test = () => <div>test</div>;

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
];

export default routes;
