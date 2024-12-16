import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTodo from './AddTodo';

const addTodo = (newTodo: string) => newTodo;

describe('AddTodo', () => {
  it('renders the AddTodo component', () => {
    render(<AddTodo addTodo={addTodo}/>)
    screen.debug()
  })

  it('input field is present', () => {
    render(<AddTodo addTodo={addTodo}/>)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('input field placeholder correct', () => {
    render(<AddTodo addTodo={addTodo}/>)
    expect(screen.getByPlaceholderText(/What needs to be done?/i)).toBeInTheDocument()
  })

  it('component respond on keyboard input', async () => {
    render(<AddTodo addTodo={addTodo}/>)
    await userEvent.type(screen.getByRole('textbox'), 'new task')
    expect(screen.queryByDisplayValue('new task')).toBeInTheDocument()
  })
  
  it('input is in the focus after render', () => {
    render(<AddTodo addTodo={addTodo}/>)
    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  it('on key Enter call callback', async () => {
    const handler = vi.fn()
    render(<AddTodo addTodo={handler}/>)
    await userEvent.type(screen.getByRole('textbox'), `new task{enter}`)
    expect(handler).toHaveBeenCalled()
  })
})