import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import styled from 'styled-components'


const config = {
  width: '400px',
  height: '500px',
  floating: true,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot 
      // adding text steps to the chatbot component
      steps = {[
        // {
        //   id: 'welcome',
        //   message: 'Hello User! Welcome to the Online Auction',
        //   trigger: 'welcome-user',
          
        // },
        {
          id: 'welcome',
          message: 'Hello User! Do you wanna latest News?',
          trigger: 'intro-user',
          
        },
        // add use steps plus option
        {
          id: 'intro-user',
          options: [
            {value: 'y', label: 'Yes', trigger: 'yes-response'},
            {value: 'n', label: 'No', trigger: 'no-response'},
          ]
          
        },
        {
          id: 'yes-response',
          message: 'Great!',
          end: true,
        },
        {
          id: 'no-response',
          message: 'Sorry to here that',
          end: true,
        },


      ]}
      {...config}
      />
    );
  }
       
}

export default SimpleForm;