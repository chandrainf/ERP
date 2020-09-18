import React, { Component } from 'react';
import PembelianListFilter from 'view/pembelian/list/PembelianListFilter';
import PembelianListTable from 'view/pembelian/list/PembelianListTable';
import PembelianListToolbar from 'view/pembelian/list/PembelianListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class PembelianListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.pembelian.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.pembelian.list.title')}
          </PageTitle>

          <PembelianListToolbar />
          <PembelianListFilter />
          <PembelianListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default PembelianListPage;
