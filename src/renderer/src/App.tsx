import Header from './components/Header'

function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className="text">digress</div>
      <div className="actions">
        <div className="action">
          <a href="/dashboard" rel="noreferrer">
            Enter
          </a>
        </div>
      </div>
    </>
  )
}

export default App
