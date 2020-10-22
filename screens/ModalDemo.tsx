import React, { Component } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";

import Modal from 'modal-enhanced-react-native-web';

export default class ModalDemo extends Component {
  state = {
    visibleModal: null
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View>
      <Text>Hello!</Text>
      {this._renderButton("Close", () => this.setState({ visibleModal: false }))}
    </View>
  );

  _handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y
    });
  };

  _handleScrollTo = p => {
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollTo(p);
    }
  };

  render() {
    return (
      <View>
        {this._renderButton("Modal that can be closed on backdrop press", () =>
          this.setState({ visibleModal: true })
        )}
        <Modal
          isVisible={this.state.visibleModal}
          onBackdropPress={() => this.setState({ visibleModal: false })}
        >
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}