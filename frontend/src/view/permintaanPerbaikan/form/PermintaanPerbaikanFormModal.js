import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import PermintaanPerbaikanForm from 'view/permintaanPerbaikan/form/PermintaanPerbaikanForm';
import PermintaanPerbaikanService from 'modules/permintaanPerbaikan/permintaanPerbaikanService';
import Errors from 'modules/shared/error/errors';

class PermintaanPerbaikanFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const {
        id,
      } = await PermintaanPerbaikanService.create(data);
      const record = await PermintaanPerbaikanService.find(
        id,
      );
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
        title={i18n(
          'entities.permintaanPerbaikan.new.title',
        )}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <PermintaanPerbaikanForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default PermintaanPerbaikanFormModal;
