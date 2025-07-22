import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Chat } from './components/chat/Chat.client'

function App() {
  return (
    <Router>
      <div className="flex flex-col h-full w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/chat/:id" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App