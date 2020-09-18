import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/gaji/list/gajiListActions';
import destroyActions from 'modules/gaji/destroy/gajiDestroyActions';
import selectors from 'modules/gaji/list/gajiListSelectors';
import destroySelectors from 'modules/gaji/destroy/gajiDestroySelectors';
import model from 'modules/gaji/gajiModel';
import gajiSelectors from 'modules/gaji/gajiSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import ProyekListItem from 'view/proyek/list/ProyekListItem';
import KaryawanListItem from 'view/karyawan/list/KaryawanListItem';

const { fields } = model;

class GajiListTable extends Component {
  handleTableChange = (pagination, filters, sorter) => {
    const { dispatch } = this.props;

    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  doDestroy = (id) => {
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(id));
  };

  columns = [
    fields.proyeks.forTable({
      render: (value) => <ProyekListItem value={value} />,
    }),
    fields.karyawans.forTable({
      render: (value) => <KaryawanListItem value={value} />,
    }),
    fields.totalGaji.forTable(),
    fields.catatan.forTable(),
    //fields.createdAt.forTable(),
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/gaji/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/gaji/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {this.props.hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => this.doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  rowSelection = () => {
    return {
      selectedRowKeys: this.props.selectedKeys,
      onChange: (selectedRowKeys) => {
        const { dispatch } = this.props;
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  render() {
    const { pagination, rows, loading } = this.props;

    return (
      <TableWrapper>
        <Table
          rowKey="id"
          loading={loading}
          columns={this.columns}
          dataSource={rows}
          pagination={pagination}
          onChange={this.handleTableChange}
          rowSelection={this.rowSelection()}
          scroll={{ x: true }}
        />
      </TableWrapper>
    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state) ||
      destroySelectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasPermissionToEdit: gajiSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: gajiSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(GajiListTable);
