import $ from 'jquery';
var dt = require( 'datatables.net' )();
const showTable = () => {
// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
});

}

export default showTable;