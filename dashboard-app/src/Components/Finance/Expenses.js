import React, { useRef, useEffect, useState } from "react";
import ScriptTag from "react-script-tag";
import Row from "../Dashboard/Row";
import EarningsMonthly from "../Dashboard/EarningsMonthly";
import EarningsAnnual from "./EarningsAnnual";
import Tasks from "./Tasks";
import PendingRequests from "../Dashboard/PendingRequests";
import { expensesData } from "./ExpensesData";
import { useAuth } from "../../Contexts/AuthContext";

//import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
//import "datatables.net-dt/js/dataTables.dataTables"
//import "datatables.net-dt/css/jquery.dataTables.min.css"

import "../../vendor/datatables/jquery.dataTables.min.js";
import "../../vendor/datatables/dataTables.bootstrap4.min.js";
import "../../vendor/datatables/dataTables.bootstrap4.min.css";

import $ from "jquery";

const Expenses = (props) => {
  const { currentUser, databaseService } = useAuth();

  const [expenses, setExpenses] = useState([]);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const idRef = useRef();
  const categoryRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const valueRef = useRef();
  const tableRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!categoryRef.current.value) {
      setError("Category is empty");
      return;
    }

    if (!dateRef.current.value) {
      setError("Date is empty");
      return;
    }

    if (!descriptionRef.current.value) {
      setError("Description is empty");
      return;
    }

    if (!valueRef.current.value) {
      setError("Value is empty");
      return;
    }

    try {
      let data = {
        category: categoryRef.current.value,
        date: dateRef.current.value,
        description: descriptionRef.current.value,
        value: valueRef.current.value,
      };

      let theexpense = {
        year: "2020",
        month: "01",
        data  
      }

      if (idRef.current.value) {
        console.log("UPDATE: " + idRef.current.value)
        console.log(theexpense)
        await databaseService.updateExpense(currentUser.uid, idRef.current.value, theexpense);
        let updatedExpenses = expenses.map(item =>
          item.id === idRef.current.value ? 
          {
            id: idRef.current.value,
            ...data
          } : item)
        $("#dataTable").DataTable().destroy();
        setExpenses(updatedExpenses)
        // updateTotalExpenses(updatedExpenses);
        $("#dataTable").DataTable();
        setSuccess("Os dados foram atualizados com sucesso.");
      } else {
        console.log("CREATE" )
        console.log(theexpense)
        let newId = await databaseService.createExpense(currentUser.uid, theexpense);
        idRef.current.value = newId;
        let newExpenses = [
          ...expenses,
          {
            id: newId,
            ...data
          }
        ]
        $("#dataTable").DataTable().destroy();
        setExpenses(newExpenses);
        // updateTotalExpenses(newExpenses);
        $("#dataTable").DataTable();
        setSuccess("Os dados foram salvos com sucesso. New id is: " + idRef.current.value);
      }
      
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (e) {
      setError(e);
    }
  };

  const cleanRefs = () => {
    idRef.current.value = '';
    categoryRef.current.value = 'supermercado';
    dateRef.current.value = '2021-02-01';
    descriptionRef.current.value = '';
    valueRef.current.value = '';
  }

  const handleEdit = (event, id) => {
    event.preventDefault()
    cleanRefs();
    let selectedItem = expenses.find(item => item.id === id)
    idRef.current.value = id;
    categoryRef.current.value = selectedItem.category;
    dateRef.current.value = selectedItem.date;
    descriptionRef.current.value = selectedItem.description;
    valueRef.current.value = selectedItem.value;
  }

  const updateTotalExpenses = (data) => {
    const reducer = (sum, item) => sum + parseFloat(item.value);
    const total = data.reduce(reducer, 0);
    setExpensesTotal(total);
  }

  useEffect(() => {
    const initDataTable = async () => {
      var data = await databaseService.getExpenses(currentUser.uid, {
        year: "2020",
        month: "01",
      });
      
      $("#dataTable").DataTable().destroy();
      setExpenses(data);
      // updateTotalExpenses(data);
      $("#dataTable").DataTable();
    };
    initDataTable();
  }, []);

  useEffect(() => {
    console.log("===========> expenses");
    console.log(expenses);
    updateTotalExpenses(expenses);
  }, [expenses]);

  return (
    <div className="container-fluid">
      {/* Begin Page Content */}

      {/* Page Heading */}

      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Expenses</h1>
        <a
          href="#"
          className="btn btn-success btn-icon-split "
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={cleanRefs}
        >
          <span className="icon text-white-50">
            <i className="fas fa-plus"></i>
          </span>
          <span className="text">New Expense</span>
        </a>
      </div>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
        .
      </p>
      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                New Expense
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form className="user">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}
                <input type="hidden" ref={idRef} />
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <select
                      name="cars"
                      ref={categoryRef}
                      id="cars"
                      className="form-control form-control-expenses"
                      defaultValue="supermercado"
                    >
                      <option value="supermercado">Supermercado</option>
                      <option value="fixa">Contas Fixas</option>
                      <option value="sacolao">Sacolão</option>
                      <option value="shopping">Shopping</option>
                    </select>
                  </div>
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="date"
                      ref={dateRef}
                      defaultValue="2020-08-01"
                      className="form-control form-control-expenses"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    ref={descriptionRef}
                    className="form-control form-control-user"
                    id="inputDescription"
                    aria-describedby="emailHelp"
                    placeholder="Description..."
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    ref={valueRef}
                    className="form-control form-control-user"
                    id="inputValue"
                    aria-describedby="emailHelp"
                    placeholder="R$0,00 ..."
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <Row>
        <EarningsMonthly />
        <EarningsAnnual total={expensesTotal}/>
        <Tasks percentage={37.5}/>
        <PendingRequests />
      </Row>

      {/* DataTales Example */}
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
              ref={tableRef}
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
                {expenses.length > 0 &&
                  expenses.map((item) => (
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
              <a className="dropdown-item" data-toggle="modal" data-target="#exampleModal" onClick={(e) => handleEdit(e, item.id)} href="#">Edit</a>
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

      {/* /.container-fluid */}
    </div>
  );
};

export default Expenses;
