import model from 'modules/kasMasuk/kasMasukModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';

const { fields } = model;

class KasMasukView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.tanggal.label}
          value={fields.tanggal.forView(record.tanggal)}
        />

        <TextViewItem
          label={fields.jenisKas.label}
          value={fields.jenisKas.forView(record.jenisKas)}
        />
        <TextViewItem
          label={fields.jumlah.label}
          value={fields.jumlah.forView(record.jumlah)}
        />
        <TextViewItem
          label={fields.catatan.label}
          value={fields.catatan.forView(record.catatan)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default KasMasukView;
