import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import GajiForm from 'view/gaji/form/GajiForm';
import GajiService from 'modules/gaji/gajiService';
import Errors from 'modules/shared/error/errors';

class GajiFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await GajiService.create(data);
      const record = await GajiService.find(id);
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
        title={i18n('entities.gaji.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <GajiForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default GajiFormModal;
