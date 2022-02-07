// import React from 'react';

const Alert = ({ alert }) => {
    const capitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
      alert &&  <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(alert.type)}</strong> {alert.message}
        </div>);
};

export default Alert;
