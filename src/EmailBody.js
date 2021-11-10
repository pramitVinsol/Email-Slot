import React, { Component } from 'react'
import Input from './component/Input';
import TextArea from './component/TextArea';
import Email from './component/Email';

class EmailBody extends Component {

  constructor(props) {

    super(props);

    this.state = {
      salutations: { label: 'Salutations', type: 'text', value: `Hi ${props.receiverName}` },
      regards: { label: 'Regards', type: 'text', value: `Regards, <br> ${props.senderName}` },
      content: { label: 'Content', value: '' }
    }
  }

  inputChanged = (event, inputIdentfier) => {
    let updatedInput = { ...this.state[inputIdentfier] };
    updatedInput.value = event.target.value;
    this.setState({ [inputIdentfier]: updatedInput });
  };


  render() {
    return (
      <div>
        <Input
          changed={(event) => this.inputChanged(event, 'salutations')}
          {...this.state['salutations']} />

        <TextArea
          changed={(event) => this.inputChanged(event, 'content')}
          {...this.state['content']} />


        <Input
          changed={(event) => this.inputChanged(event, 'regards')}
          {...this.state['regards']} />

        <Email salutation={this.state.salutations.value} regards={this.state.regards.value} content={this.state.content.value} />
      </div>
    )
  }
}

export default EmailBody