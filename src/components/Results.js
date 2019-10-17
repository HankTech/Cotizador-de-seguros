import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Result extends Component {   

    render () {   

        const result = this.props.result;
        const message = (!result) ? 'Elije Marca, Año y tipo de de Plan Seguro' : 'El total es: $'

        return (   
           <div className="d-flex flex-row justify-content-center mb-3 mt-3 p-2  total">
               {message}
               <TransitionGroup component="span" className="result">
                   <CSSTransition key={result} timeout={500} classNames="result">
                        <span>{result}</span>
                   </CSSTransition>
               </TransitionGroup>               
           </div>
        )
    }
}

export default Result