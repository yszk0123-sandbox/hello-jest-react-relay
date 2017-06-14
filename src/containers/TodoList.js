import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import AddTodoMutation from '../mutations/AddTodoMutation';

export default class TodoList extends React.Component {
  cosntructor() {
    this.state = { title: '' };
  }

  _handleInputChange = text => {
    this.setState({ title: text });
  };

  _handleAddButtonClick = () => {
    AddTodoMutation.commit(
      this.props.relay.environment,
      { title: this.state.title },
      this.props.viewer,
    );
  };

  render() {
    return (
      <div>
        <Input onChange={this._handleInputChange} />
        <Button onClick={this._handleAddButtonClick} />
      </div>
    );
  }
}
