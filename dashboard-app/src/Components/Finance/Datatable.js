import React, { useRef, useEffect, useState } from "react";

//import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
//import "datatables.net-dt/js/dataTables.dataTables"
//import "datatables.net-dt/css/jquery.dataTables.min.css"

import "../../vendor/datatables/jquery.dataTables.min.js";
import "../../vendor/datatables/dataTables.bootstrap4.min.js";
import "../../vendor/datatables/dataTables.bootstrap4.min.css";

import $ from "jquery";

export const datatableDestroy = () => {
    $("#dataTable").DataTable().destroy();
}

export const datatableInit = () => {
    $("#dataTable").DataTable();
}

const Datatable = (props) => {

  return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <div className="d-sm-flex align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
            <a
              href="#"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Generate
              Report
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              ref={props.tableRef}
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Start date</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Value</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Start date</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Value</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {props.expenses.length > 0 &&
                  props.expenses.map((item) => (
                    <tr key={item.id}>
                      <td>{item.date}</td>
                      <td>{item.category}</td>
                      <td>{item.description}</td>
                      <td>{item.value}</td>
                      <td>
                      <div className="dropdown mb-0 ml-2">
            <button className="btn btn-primary btn-sm mx-auto dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Action
            </button>
            <div className="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" data-toggle="modal" data-target="#exampleModal" onClick={(e) => props.handleEdit(e, item.id)} href="#">Edit</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default Datatable;
