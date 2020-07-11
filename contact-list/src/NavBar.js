import React from "react";
import { Link } from 'react-router-dom';

function NavBar () {
  
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link class="navbar-brand" to="/">CristNascimento</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact/add">Add</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact/list">List</Link>
              </li>
            </ul>
          </div>
      </nav>
    );
}

export default NavBar;