import useTheme from '../hooks/useTheme'

const Header = (): JSX.Element => {
  const { onToggleTheme, isDarkTheme } = useTheme()

  const handleToggleTheme = (): void => {
    console.log('toggle theme')
    onToggleTheme()
  }

  return (
    <header className="header">
      <section className="actionsContainer">
        <button onClick={handleToggleTheme}>
          {isDarkTheme ? 'Change to 🌚 mode' : 'Change to � mode'}
        </button>
      </section>
    </header>
  )
}

export default Header
