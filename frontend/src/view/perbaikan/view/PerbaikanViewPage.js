import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import PerbaikanView from 'view/perbaikan/view/PerbaikanView';
import { i18n } from 'i18n';
import actions from 'modules/perbaikan/view/perbaikanViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/perbaikan/view/perbaikanViewSelectors';
import PerbaikanViewToolbar from 'view/perbaikan/view/PerbaikanViewToolbar';

class PerbaikanPage extends Component {
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
            [i18n('entities.perbaikan.menu'), '/perbaikan'],
            [i18n('entities.perbaikan.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.perbaikan.view.title')}
          </PageTitle>

          <PerbaikanViewToolbar match={this.props.match} />

          <PerbaikanView
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

export default connect(select)(PerbaikanPage);
