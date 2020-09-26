import React from 'react';

import Row from '../Dashboard/Row';
import Column from '../Dashboard/Column';
import PageHeading from '../Dashboard/PageHeading';
import EarningsMonthly from '../Dashboard/EarningsMonthly';
import EarningsAnnual from '../Dashboard/EarningsAnnual';
import Tasks from '../Dashboard/Tasks';
import PendingRequests from '../Dashboard/PendingRequests';
import DefaultCard from './DefaultCard';
import BasicCard from './BasicCard';
import DropdownCard from './DropdownCard';
import CollapsableCard from './CollapsableCard';

const Cards = (props) => {
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
            <Column>
              <DefaultCard/>
              <BasicCard/>
            </Column>

            <Column>
              <DropdownCard/>
              <CollapsableCard/>
            </Column>
          </Row>

      </div>
    );
}

export default Cards;