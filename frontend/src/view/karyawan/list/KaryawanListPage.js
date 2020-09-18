import React, { Component } from 'react';
import KaryawanListFilter from 'view/karyawan/list/KaryawanListFilter';
import KaryawanListTable from 'view/karyawan/list/KaryawanListTable';
import KaryawanListToolbar from 'view/karyawan/list/KaryawanListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class KaryawanListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.karyawan.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.karyawan.list.title')}
          </PageTitle>

          <KaryawanListToolbar />
          <KaryawanListFilter />
          <KaryawanListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default KaryawanListPage;
