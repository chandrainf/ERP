import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/pembelian/importer/pembelianImporterSelectors';
import actions from 'modules/pembelian/importer/pembelianImporterActions';
import fields from 'modules/pembelian/importer/pembelianImporterFields';

class PembelianImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('entities.pembelian.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.pembelian.menu'), '/pembelian'],
            [i18n('entities.pembelian.importer.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.pembelian.importer.title')}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default PembelianImportPage;
