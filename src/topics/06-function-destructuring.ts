import { Product, taxCalculation } from './06-function-destructuring';


export interface Product {
    descripction :string;
    price: number;
}

const phone: Product = {
descripction: 'Nokia A1',
price : 150.0
}

const tablet: Product = {
    descripction: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number,
    products: Product[];
}


export function taxCalculation (options:TaxCalculationOptions): number []{

let total = 0;
//La instrucción foreach : enumera los elementos de una colección y ejecuta su cuerpo para cada elemento de la colección.
options.products.forEach(product => {
    total += product.price;
})

return [total, total * options.tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;


const result = taxCalculation({
    products: shoppingCart,
    tax: tax,
})

//console.log ('Total', result[0]);
//console.log('Tax', result[1]);
console.log('Tax', tax);
console.log('Tax', tax);

