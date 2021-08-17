interface IRouter {
  path: string
  exact: boolean
  componentPath: string
  protected: false
}

export const routes: IRouter[] = [
  {
    path: 'home',
    exact: true,
    componentPath: 'pages/Home',
    protected: false,
  },
  {
    path: 'auth',
    exact: true,
    componentPath: 'pages/Auth',
    protected: false,
  },
  //test-dev-area
  {
    path: 'sandbox',
    exact: true,
    componentPath: 'pages/Sandbox',
    protected: false,
  },
]
