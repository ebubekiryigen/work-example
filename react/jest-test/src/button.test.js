import {fireEvent, render, screen} from '@testing-library/react'
import Button from './components/Button'

const clickMock=jest.fn(()=>{
    console.log('Btn Clicked')
})

test('test button', ()=>{
    render(<Button id='btn' text='ebubekir' className='ebubekir' style={{backgroundColor:"red"}} onClick={clickMock}  />)
    const element=screen.getByTestId('btn')
    fireEvent.click(element)
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('ebubekir')
    expect(element).toHaveStyle('backgroundColor:"red"')
    expect(element).toHaveClass('ebubekir')
    expect(clickMock).toHaveBeenCalledTimes(1)
})
