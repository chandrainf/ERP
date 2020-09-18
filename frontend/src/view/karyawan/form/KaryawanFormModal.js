import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import KaryawanForm from 'view/karyawan/form/KaryawanForm';
import KaryawanService from 'modules/karyawan/karyawanService';
import Errors from 'modules/shared/error/errors';

class KaryawanFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await KaryawanService.create(data);
      const record = await KaryawanService.find(id);
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
        title={i18n('entities.karyawan.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <KaryawanForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default KaryawanFormModal;
