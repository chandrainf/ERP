import model from 'modules/gaji/gajiModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ProyekViewItem from 'view/proyek/view/ProyekViewItem';
import KaryawanViewItem from 'view/karyawan/view/KaryawanViewItem';

const { fields } = model;

class GajiView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />
        <ProyekViewItem
          label={fields.proyeks.label}
          value={fields.proyeks.forView(record.proyeks)}
        />
        <KaryawanViewItem
          label={fields.karyawans.label}
          value={fields.karyawans.forView(record.karyawans)}
        />
        <TextViewItem
          label={fields.totalGaji.label}
          value={fields.totalGaji.forView(record.totalGaji)}
        />

        <TextViewItem
          label={fields.catatan.label}
          value={fields.catatan.forView(record.catatan)}
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

export default GajiView;
