import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import KaryawanView from 'view/karyawan/view/KaryawanView';
import { i18n } from 'i18n';
import actions from 'modules/karyawan/view/karyawanViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/karyawan/view/karyawanViewSelectors';
import KaryawanViewToolbar from 'view/karyawan/view/KaryawanViewToolbar';

class KaryawanPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.karyawan.menu'), '/karyawan'],
            [i18n('entities.karyawan.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.karyawan.view.title')}
          </PageTitle>

          <KaryawanViewToolbar match={this.props.match} />

          <KaryawanView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(KaryawanPage);
