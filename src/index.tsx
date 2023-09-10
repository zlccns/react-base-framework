import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const element: Element | DocumentFragment = document.getElementById('root')!

const root = ReactDOM.createRoot(element)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// 如果您想开始测量应用程序的性能，请传递一个函数
// 记录结果（例如：reportWebVitals(console.log)）
// 或发送到分析端点。了解更多：https://bit.ly/CRA-vitals
reportWebVitals()
