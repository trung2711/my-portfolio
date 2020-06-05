import React, { Component } from 'react'
import CloseButton from './CloseButton'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';

const CloseIcon = <CloseButton></CloseButton>

class ModalItem extends Component {
    render () {
        return  (
            <Modal open={this.props.isOpen} onClose={this.props.onClose} closeIcon={CloseIcon} center classNames={{modal: 'My-Modal'}}>
                {this.props.children}
            </Modal>
        )
    }
}

export default ModalItem