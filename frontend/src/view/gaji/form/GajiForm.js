import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/gaji/gajiModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'view/shared/form/items/TextAreaFormItem';
import ProyekAutocompleteFormItem from 'view/proyek/autocomplete/ProyekAutoCompleteFormItem';
import KaryawanAutocompleteFormItem from 'view/karyawan/autocomplete/KaryawanAutoCompleteFormItem';

const { fields } = model;

class GajiForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.proyeks,
    fields.karyawans,
    fields.totalGaji,
    fields.catatan,
  ]);

  handleSubmit = (values) => {
    const { id, ...data } = this.schema.cast(values);
    this.props.onSubmit(id, data);
  };

  initialValues = () => {
    const record = this.props.record;
    return this.schema.initialValues(record || {});
  };

  renderForm() {
    const { saveLoading, isEditing } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                {isEditing && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}
                <ProyekAutocompleteFormItem
                  name={fields.proyeks.name}
                  label={fields.proyeks.label}
                  required={fields.proyeks.required}
                  form={form}
                  autoFocus
                />
                <KaryawanAutocompleteFormItem
                  name={fields.karyawans.name}
                  label={fields.karyawans.label}
                  required={fields.karyawans.required}
                  form={form}
                />

                <InputFormItem
                  name={fields.totalGaji.name}
                  label={fields.totalGaji.label}
                  required={fields.totalGaji.required}
                />

                <TextAreaFormItem
                  name={fields.totalGaji.name}
                  label={fields.totalGaji.label}
                  required={fields.totalGaji.required}
                />

                <Form.Item
                  className="form-buttons"
                  {...tailFormItemLayout}
                >
                  <Button
                    loading={saveLoading}
                    type="primary"
                    onClick={form.handleSubmit}
                    icon="save"
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    icon="undo"
                  >
                    {i18n('common.reset')}
                  </Button>

                  {this.props.onCancel ? (
                    <Button
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                      icon="close"
                    >
                      {i18n('common.cancel')}
                    </Button>
                  ) : null}
                </Form.Item>
              </Form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (isEditing && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

export default GajiForm;
