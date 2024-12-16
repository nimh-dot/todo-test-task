import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';
import { ITodo } from '../../types/data';

const data: ITodo = {
    id: 3,
    title: 'предложить оффер',
    isComplete: false
}

describe('TodoItem', () => {
    it('renders the TodoItem component', () => {
      render(<TodoItem todo={data} toggleComplete={() => {}}/>)
      screen.debug()
    })
  
    it('list item and checkbox are present', () => {
      render(<TodoItem todo={data} toggleComplete={() => {}}/>)
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
      expect(screen.getByRole('listitem')).toBeInTheDocument()
    })
  
    it('input field placeholder correct', () => {
      render(<TodoItem todo={data} toggleComplete={() => {}}/>)
      expect(screen.getByText(`${data.title}`)).toBeInTheDocument()
    })
  })