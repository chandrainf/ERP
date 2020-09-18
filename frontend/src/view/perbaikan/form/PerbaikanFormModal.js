import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import PerbaikanForm from 'view/perbaikan/form/PerbaikanForm';
import PerbaikanService from 'modules/perbaikan/perbaikanService';
import Errors from 'modules/shared/error/errors';

class PerbaikanFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await PerbaikanService.create(data);
      const record = await PerbaikanService.find(id);
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
        title={i18n('entities.perbaikan.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <PerbaikanForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default PerbaikanFormModal;
