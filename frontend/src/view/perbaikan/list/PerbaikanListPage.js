import React, { Component } from 'react';
import PerbaikanListFilter from 'view/perbaikan/list/PerbaikanListFilter';
import PerbaikanListTable from 'view/perbaikan/list/PerbaikanListTable';
import PerbaikanListToolbar from 'view/perbaikan/list/PerbaikanListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class PerbaikanListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.perbaikan.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.perbaikan.list.title')}
          </PageTitle>

          <PerbaikanListToolbar />
          <PerbaikanListFilter />
          <PerbaikanListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default PerbaikanListPage;
