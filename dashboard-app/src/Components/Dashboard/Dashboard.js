import React, { useRef, useEffect } from 'react';

import PageHeading from './PageHeading';
import EarningsMonthly from './EarningsMonthly';
import EarningsAnnual from './EarningsAnnual';
import Tasks from './Tasks';
import PendingRequests from './PendingRequests';
import AreaChart from './AreaChart';
import PieChart from './PieChart';
import Projects from './Projects';
import ColorSystem from './ColorSystem';
import Illustrations from './Illustrations';
import Approach from './Approach';
import Row from './Row';
import Column from './Column';
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../Contexts/AuthContext"

const Dashboard = (props) => {

  const { currentUser } = useAuth()
  const history = useHistory()
  
  useEffect(() => {
    if (!currentUser) {
      history.push("/login")
    }
  }, [])

    return (
        <div className="container-fluid">
          <PageHeading/>
          
          <Row>
            <EarningsMonthly/>
            <EarningsAnnual/>
            <Tasks/>
            <PendingRequests/>
          </Row>

          <Row>
            <AreaChart/>
            <PieChart/>
          </Row>

          <Row>
            <Column>
              <Projects/>
              <ColorSystem/>
            </Column>
            <Column>
              <Illustrations/>
              <Approach/>  
            </Column>
          </Row>
      
          {/* Scroll to Top Button */}
          <a className="scroll-to-top rounded" href="#root">
            <i className="fas fa-angle-up"></i>
          </a>
      </div>
    );
}

export default Dashboard;