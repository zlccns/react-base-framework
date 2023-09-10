import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { router, RouterProvider } from 'router'

const element: Element | DocumentFragment = document.getElementById('root')!

const root = ReactDOM.createRoot(element)
root.render(
  // StrictMode 的作用是帮助开发者在开发过程中发现潜在的问题:
  // 1. 未使用过时的 API
  // 2. 识别不安全的生命周期方法(可能会在未来过期的方法)
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// 如果您想开始测量应用程序的性能，请传递一个函数
// 记录结果（例如：reportWebVitals(console.log)）
// 或发送到分析端点。了解更多：https://bit.ly/CRA-vitals
reportWebVitals()
