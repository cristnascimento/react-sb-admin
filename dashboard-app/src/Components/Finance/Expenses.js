import React, {useRef, useEffect, useState} from 'react';
import ScriptTag from 'react-script-tag';
import Row from '../Dashboard/Row';
import EarningsMonthly from '../Dashboard/EarningsMonthly';
import EarningsAnnual from '../Dashboard/EarningsAnnual'
import Tasks from '../Dashboard/Tasks'
import PendingRequests from '../Dashboard/PendingRequests'
import { expensesData } from './ExpensesData'

//import showTable from './datatables-demo';

const Expenses = (props) => {

  const [expenses, setExpenses] = useState([])

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const mobileRef = useRef()
  const tableRef = useRef(null);

  const handleSubmit = async (event) => {}

    const dt = () => {
        return (
            <div>
            <ScriptTag type="text/javascript" src="vendor/datatables/jquery.dataTables.min.js"/>
            <ScriptTag type="text/javascript" src="vendor/datatables/dataTables.bootstrap4.min.js"/>
            <ScriptTag type="text/javascript" src="js/demo/datatables-demo.js"/>
              </div>
        );
    }

    useEffect(() => {
        if (tableRef && tableRef.current) {
           // showTable();
          //const newChartInstance = new Chart(chartContainer.current, chartConfig);
          //setChartInstance(newChartInstance);
        }
      }, [tableRef]);

      useEffect(() => {
    
          setExpenses(expensesData)
      }, []);

      useEffect(() => {
        console.log(expenses)
    }, [expenses]);

    return (
      <div className="container-fluid">
      {/* Begin Page Content */}
      
        {/* Page Heading */}

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Expenses</h1>
            <a href="#" className="btn btn-success btn-icon-split " data-toggle="modal" data-target="#exampleModal">
            <span className="icon text-white-50">
              <i className="fas fa-plus"></i>
            </span>
            <span className="text">New Expense</span>
          </a>
        </div>
        <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>
        {/* Modal */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Expense</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form className="user" onSubmit={handleSubmit}>
            
      <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                          
                          <select name="cars" id="cars" className="form-control form-control-expenses" defaultValue="supermercado">
                              <option value="supermercado">Supermercado</option>
                                <option value="fixa">Contas Fixas</option>
                                <option value="sacolao">Sacolão</option>
                                <option value="shopping">Shopping</option>
                          </select>
                          </div>
                          <div className="col-sm-6 mb-3 mb-sm-0">
                          
                          <input type="date" defaultValue='2020-08-01' className="form-control form-control-expenses"/>
                          </div>
                      </div>
            <div className="form-group row">
              
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" ref={firstNameRef} className="form-control form-control-user" id="inputFirstName" placeholder="First Name"/>
                      </div>
                      <div className="col-sm-6">
                        <input type="text" ref={lastNameRef} className="form-control form-control-user" id="inputLastName" placeholder="Last Name"/>
                      </div>
                    </div>
                        <div className="form-group">
                          <input type="email" ref={emailRef} className="form-control form-control-user" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                        </div>
                        <div className="form-group">
                          <input type="text" ref={mobileRef} className="form-control form-control-user" id="inputMobile" aria-describedby="emailHelp" placeholder="Enter Phone Number +55 31 99988-7755..."/>
                        </div>
                        
                        
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        <Row>
            <EarningsMonthly/>
            <EarningsAnnual/>
            <Tasks/>
            <PendingRequests/>
          </Row>

        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
          <div className="d-sm-flex align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" ref={tableRef} width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </tfoot>
                <tbody>
                  {
                    expenses.map(item =>
                      <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.position}</td>
                      <td>{item.office}</td>
                      <td>{item.age}</td>
                      <td>{item.startDate}</td>
                      <td>{item.salary}</td>
                      </tr>    
                    )
                  }
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <ScriptTag type="text/javascript" src="js/demo/datatables-demo.js"/>
      {/* /.container-fluid */}
      </div>
    );
}

export default Expenses;