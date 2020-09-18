import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/gaji/importer/gajiImporterSelectors';
import actions from 'modules/gaji/importer/gajiImporterActions';
import fields from 'modules/gaji/importer/gajiImporterFields';

class GajiImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('entities.gaji.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.gaji.menu'), '/gaji'],
            [i18n('entities.gaji.importer.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.gaji.importer.title')}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default GajiImportPage;
