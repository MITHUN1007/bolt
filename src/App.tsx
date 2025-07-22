import { Header } from './components/header/Header'
import { Chat } from './components/chat/Chat.client'

function App() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <Chat />
    </div>
  )
}

export default App