import {render, screen} from '@testing-library/react'
import App from './App'
import Button from './components/Button'

test('renders learn react link',()=> {
    render(<App />)
    render(<Button text='merhaba' />)
    const linkElement = screen.getByText(/learn react/i)
    const btnElement=screen.getByText(/merhaba/i)
    expect(linkElement).toBeInTheDocument()
    expect(btnElement).toBeInTheDocument()
})