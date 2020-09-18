import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import PembelianForm from 'view/pembelian/form/PembelianForm';
import PembelianService from 'modules/pembelian/pembelianService';
import Errors from 'modules/shared/error/errors';

class PembelianFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await PembelianService.create(data);
      const record = await PembelianService.find(id);
      this.props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      this.setState({
        saveLoading: false,
      });
    }
  };

  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <Modal
        title={i18n('entities.pembelian.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <PembelianForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default PembelianFormModal;
