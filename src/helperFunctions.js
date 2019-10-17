//obtener la diferencia de años
export function yearDiference (year) {     
    return new Date().getFullYear() - year;
}

//calculo del incremento por la marca
export function calculateBrand (brand) {
    let increments

    switch (brand) {
        case 'europeo':
            increments = 1.30;
            break;

        case 'americano':
            increments = 1.15;
            break;
        
        case 'asiatico':
            increments = 1.05;
            break;
    
        default:
            break;
    }

    return increments
}

//obtener el tipo de plan
export function typePlan (plan) {               
    return (plan === 'basic') ? 1.20 : 1.50;
}

//Hacer primera letra mayuscula
export function firstMayus (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}