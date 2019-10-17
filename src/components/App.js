import React, { Component } from 'react';

import Header from './Header';
import Form from './Form';
import Summary from './Summary';
import Result from './Results';

import { yearDiference, calculateBrand, typePlan } from '../helperFunctions';

class App extends Component {

    state = {
        result : '',
        data: {}
    }

    cotizarSeguro = (data) => {
        const { brand, year, plan } = data; 

        //agregar una base de 2000
        let result = 2000

        //obtener la diferencia de años
        const diference = yearDiference(year);

        //por cada año restar 3% al valor del seguro
        result -= ((diference * (3/100)) * result);
        

        //Europeo 30% Americado 15% Asiatico 5% de incremento del valor actual
        result = calculateBrand(brand) * result;

        //EL plan del auto, basic=20% . full=50%
        let incrementPlan = typePlan(plan);
        result = parseFloat(result * incrementPlan).toFixed(2);
        //ya con eso tenemos el costo

        // Crear objeto para el resumen
        const carData = {
            brand: brand,
            year: year,
            plan: plan
        }

        this.setState({
            result: result,
            data: carData
        })
    }

    render() {
        
        return (
            <div className="container col-6">
                <Header title='Cotizador de Seguro de Autos'/>
    
                <div className="bg-white p-5">
                    <Form cotizarSeguro = {this.cotizarSeguro}/>

                    <Summary data = {this.state.data}/>

                    <Result result = {this.state.result}/>
                </div>              
    
            </div>
        );
    }    
}

export default App;
