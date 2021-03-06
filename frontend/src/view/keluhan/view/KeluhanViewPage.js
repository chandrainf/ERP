import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import KeluhanView from 'view/keluhan/view/KeluhanView';
import { i18n } from 'i18n';
import actions from 'modules/keluhan/view/keluhanViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/keluhan/view/keluhanViewSelectors';
import KeluhanViewToolbar from 'view/keluhan/view/KeluhanViewToolbar';

class KeluhanPage extends Component {
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
            [i18n('entities.keluhan.menu'), '/keluhan'],
            [i18n('entities.keluhan.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.keluhan.view.title')}
          </PageTitle>

          <KeluhanViewToolbar match={this.props.match} />

          <KeluhanView
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

export default connect(select)(KeluhanPage);
