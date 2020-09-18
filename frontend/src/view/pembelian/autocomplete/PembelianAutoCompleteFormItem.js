import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import PembelianService from 'modules/pembelian/pembelianService';
import PembelianFormModal from 'view/pembelian/form/PembelianFormModal';
import { connect } from 'react-redux';
import selectors from 'modules/pembelian/pembelianSelectors';

class PembelianAutocompleteFormItem extends Component {
  state = {
    modalVisible: false,
  };

  doCloseModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  doOpenModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  doCreateSuccess = (record) => {
    const { form, name, mode } = this.props;

    if (mode && mode === 'multiple') {
      form.setFieldValue(name, [
        ...(form.values[name] || []),
        record,
      ]);
    } else {
      form.setFieldValue(name, record);
    }

    this.doCloseModal();
  };

  fetchFn = (value, limit) => {
    return PembelianService.listAutocomplete(value, limit);
  };

  mapper = {
    toAutocomplete(value) {
      if (!value) {
        return undefined;
      }

      const key = value.id;
      let label = value.label;

      if (value['nama']) {
        label = value['nama'];
      }

      return {
        key,
        label,
      };
    },

    toValue(value) {
      if (!value) {
        return undefined;
      }

      return {
        id: value.key,
        label: value.label,
      };
    },
  };

  render() {
    const { form, ...rest } = this.props;

    return (
      <React.Fragment>
        <AutocompleteFormItem
          {...rest}
          fetchFn={this.fetchFn}
          mapper={this.mapper}
          onOpenModal={this.doOpenModal}
        />

        <PembelianFormModal
          visible={this.state.modalVisible}
          onCancel={this.doCloseModal}
          onSuccess={this.doCreateSuccess}
        />
      </React.Fragment>
    );
  }
}

const select = (state) => ({
  hasPermissionToCreate: selectors.selectPermissionToCreate(
    state,
  ),
});

export default connect(select)(
  PembelianAutocompleteFormItem,
);
