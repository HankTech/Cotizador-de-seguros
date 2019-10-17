import React, { Component } from 'react';

import { firstMayus } from '../helperFunctions';

class Summary extends Component {

    showSummary = () => {
        const { brand, year, plan } = this.props.data;

        if(!brand || !year || !plan) return null;

        return (
            <div className="d-flex justify-content-center mt-1 pt-2 pb-3 summary">
            <div className="d-flex flex-column align-items-center">
                <h2>Resumen de Cotizacion</h2>

                <li>Marca: { firstMayus(brand) }</li>
                <li>Plan: { firstMayus(plan) }</li>
                <li>Año del auto: { year }</li>
           </div>
         
       </div>
        )
    }

    render () {
        
        return (
           <div>
               { this.showSummary() }
           </div>
        )
    }
}

export default Summary