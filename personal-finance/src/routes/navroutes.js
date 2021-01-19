import BudgetPage from '../functions/BudgetPage'

const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <h2>Home</h2>
    },
    {
      path: "/budget",
      sidebar: () => <div>budget!</div>,
      main: () => <BudgetPage />
    },
    {
      path: "/loans",
      sidebar: () => <div>loans!</div>,
      main: () => <h2>loans</h2>
    }
  ];

  export default routes;