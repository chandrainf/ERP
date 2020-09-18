import React, { Component } from 'react';
import GajiListFilter from 'view/gaji/list/GajiListFilter';
import GajiListTable from 'view/gaji/list/GajiListTable';
import GajiListToolbar from 'view/gaji/list/GajiListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class GajiListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.gaji.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.gaji.list.title')}
          </PageTitle>

          <GajiListToolbar />
          <GajiListFilter />
          <GajiListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default GajiListPage;
