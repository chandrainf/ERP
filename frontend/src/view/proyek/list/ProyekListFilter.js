import { Button, Col, Form, Row } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/proyek/list/proyekListActions';
import selectors from 'modules/proyek/list/proyekListSelectors';
import model from 'modules/proyek/proyekModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilterWrapper, {
  formItemLayout,
} from 'view/shared/styles/FilterWrapper';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.kodeProyek,
  fields.namaProyek,
  fields.lokasi,
]);

class ProyekListFilter extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch(this.initialFilter()));
  }

  initialFilter = () => {
    return schema.initialValues(
      this.props.filter,
      this.props.location,
    );
  };

  handleSubmit = (values) => {
    const valuesToSubmit = schema.cast(values);
    const { dispatch } = this.props;
    dispatch(actions.doFetch(valuesToSubmit));
  };

  handleReset = (form) => {
    form.setValues({});
    const { dispatch } = this.props;
    dispatch(actions.doReset());
  };

  render() {
    const { loading } = this.props;

    return (
      <FilterWrapper>
        <Formik
          initialValues={this.initialFilter()}
          validationSchema={schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                <Row gutter={24}>
                  <Col md={24} lg={12}>
                    <InputFormItem
                      name={fields.kodeProyek.name}
                      label={fields.kodeProyek.label}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <InputFormItem
                      name={fields.namaProyek.name}
                      label={fields.namaProyek.label}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <InputFormItem
                      name={fields.lokasi.name}
                      label={fields.lokasi.label}
                      layout={formItemLayout}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="filter-buttons" span={24}>
                    <Button
                      loading={loading}
                      icon="search"
                      type="primary"
                      htmlType="submit"
                    >
                      {i18n('common.search')}
                    </Button>
                    <Button
                      loading={loading}
                      onClick={() => this.handleReset(form)}
                      icon="undo"
                    >
                      {i18n('common.reset')}
                    </Button>
                  </Col>
                </Row>
              </Form>
            );
          }}
        />
      </FilterWrapper>
    );
  }
}

function select(state) {
  return {
    filter: selectors.selectFilter(state),
  };
}

export default withRouter(
  connect(select)(ProyekListFilter),
);
