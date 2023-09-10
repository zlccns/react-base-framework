/**
 * @external react-router-dom
 * @desc react 的路由方案
 * @see https://reactrouter.com/en/main
 * */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import App from '../App'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
)

export { router, RouterProvider }
