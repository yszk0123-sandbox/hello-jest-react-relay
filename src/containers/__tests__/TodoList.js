import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../TodoList';
import Button from '../../components/Button';
import Input from '../../components/Input';
import AddTodoMutation from '../../mutations/AddTodoMutation';

const relay = {
  environment: {},
};
const viewer = {};

test('commits AddTodoMutation after click', () => {
  const originalCommit = AddTodoMutation.commit;
  AddTodoMutation.commit = jest.fn();
  const todoList = shallow(<TodoList relay={relay} viewer={viewer} />);
  const title = 'test';

  todoList.find(Input).prop('onChange')(title);
  todoList.find(Button).prop('onClick')();

  expect(AddTodoMutation.commit.mock.calls[0]).toEqual([
    relay.environment,
    { title },
    viewer,
  ]);
  AddTodoMutation.commit = originalCommit;
});
