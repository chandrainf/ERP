import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import GajiView from 'view/gaji/view/GajiView';
import { i18n } from 'i18n';
import actions from 'modules/gaji/view/gajiViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/gaji/view/gajiViewSelectors';
import GajiViewToolbar from 'view/gaji/view/GajiViewToolbar';

class GajiPage extends Component {
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
            [i18n('entities.gaji.menu'), '/gaji'],
            [i18n('entities.gaji.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.gaji.view.title')}
          </PageTitle>

          <GajiViewToolbar match={this.props.match} />

          <GajiView
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

export default connect(select)(GajiPage);
