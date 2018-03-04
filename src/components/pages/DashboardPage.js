import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';


const DashboardPage = ({ isConfirmed }) => (
    <div>
        {!isConfirmed && <ConfirmEmailMessage/> }
    </div>
)

DashboardPage.propTypes = {
    isConfirmed : PropTypes.bool.isRequired
}



const mapStateToProps = (state) => (
    {
        isConfirmed: state.user.isConfirmed
    }
)
    
export default connect(mapStateToProps)(DashboardPage);