import React from 'react';
import {Button, Text} from 'react-native';

class HelloReact extends React.Component {
  constructor() {
    super();
    this.state = {angka: 0};

    this.tambahSatu = this.tambahSatu.bind(this);
  }

  tambahSatu() {
    this.setState((state) => ({angka: state.angka + 1}));
  }

  render() {
    return (
      <>
        <Text>Angka saat ini adalah : {this.state.angka}</Text>
        <Button onPress={this.tambahSatu} title="tambah satu" />
      </>
    );
  }
}

export default HelloReact;
