import About from './container/About'
import Project from './container/Project'
import Sidebar from './container/Sidebar'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Project />
        </main>
      </Container>
    </>
  )
}

export default App
