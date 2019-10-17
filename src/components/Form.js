import React, { Component } from 'react';

class Form extends Component {

    //ref son para leer los valores de los campos de un formulario

    brandRef = React.createRef();       //Marca
    yearRef = React.createRef();        //año
    planBasicRef = React.createRef();   //plan basico
    planFullRef = React.createRef();    //plan completo


    cotizarSeguro = (e) => {
        e.preventDefault();
        
        //leer plan
        const plan = this.planBasicRef.current.checked ? 'basic' : 'full';

        //obtener los datos
        //console.log(this.brandRef.current.value);

        //crear objeto
        const infoAuto = {
            brand: this.brandRef.current.value,
            year: this.yearRef.current.value,
            plan: plan            
        }
        //console.log(infoAuto)
        
        //enviarlo al componente principal (App)
        this.props.cotizarSeguro(infoAuto);

        //reset formulario->Opcional
        //e.currentTarget.reset();

    }

    render() {
        return (
            <form className="mb-5" onSubmit={this.cotizarSeguro}>                
                <div className="d-flex justify-content-center mb-3">
                    <label className="col-3">Marca</label>
                    <select className="form-control col-3" name="marca" ref={this.brandRef}>                       
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>
            
                <div className="d-flex justify-content-center mt-3">
                    <label className="col-3">Año</label>
                    <select className="col-3 form-control" name="year" ref={this.yearRef}>   
                        <option value="2019">2019</option>                     
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
            
                <div className="d-flex justify-content-center mt-4 mb-3">
                    <legend className="col-form-label col-3 pt-0">Plan:</legend>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1"     value="basic" ref={this.planBasicRef} />
                        <label className="form-check-label mr-2">
                            Basico
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"     value="full" ref={this.planFullRef} />
                        <label className="form-check-label" >
                            Completo
                        </label>
                    </div>
                </div>
            
                <button type="submit" className="button btn-lg btn-block rounded mt-3">Cotizar</button>
            </form>
        );
    }
}

export default Form;