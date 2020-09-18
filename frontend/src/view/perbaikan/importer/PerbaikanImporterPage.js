import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/perbaikan/importer/perbaikanImporterSelectors';
import actions from 'modules/perbaikan/importer/perbaikanImporterActions';
import fields from 'modules/perbaikan/importer/perbaikanImporterFields';

class PerbaikanImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('entities.perbaikan.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.perbaikan.menu'), '/perbaikan'],
            [i18n('entities.perbaikan.importer.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.perbaikan.importer.title')}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default PerbaikanImportPage;
