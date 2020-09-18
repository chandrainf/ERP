import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/karyawan/importer/karyawanImporterSelectors';
import actions from 'modules/karyawan/importer/karyawanImporterActions';
import fields from 'modules/karyawan/importer/karyawanImporterFields';

class KaryawanImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('entities.karyawan.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.karyawan.menu'), '/karyawan'],
            [i18n('entities.karyawan.importer.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.karyawan.importer.title')}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default KaryawanImportPage;
