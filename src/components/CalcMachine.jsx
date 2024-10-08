
// Importa las utilidades de cálculo
import Button from "./Button.jsx";
import {Calculate} from "./CalcScreen.jsx";
import Marca from "./Marca.jsx";
import { sum, res, divi, mult } from "../utils/calc.mjs";
import {useState}from 'react';

export function CalcMachine(){
    const [currentValue, setCurrentValue] = useState('0');
    const [operator, setOperator] = useState('');
    const [firstNumber, setFirstNumber] = useState(null);


    const handleButtonClick = (label) => {
        if (label === 'CE') {
            setCurrentValue('0');
            setOperator('');
            setFirstNumber(null);
        } else if (['+', '-', '*', '/'].includes(label)) {
            if (firstNumber === null) {
                // Guarda el primer número y el operador
                setFirstNumber(parseFloat(currentValue));
                setOperator(label);
                setCurrentValue(currentValue + ' ' + label + ' '); // Muestra el primer número seguido del operador
            } else {
                // Ya hay un primer número y un operador, realiza el cálculo con el segundo número
                const secondNumber = parseFloat(currentValue.split(' ').pop()); // Extrae el segundo número
                let result;
    
                switch (operator) {
                    case '+':
                        result = sum(firstNumber, secondNumber);
                        break;
                    case '-':
                        result = res(firstNumber, secondNumber);
                        break;
                    case '*':
                        result = mult(firstNumber, secondNumber);
                        break;
                    case '/':
                        result = divi(firstNumber, secondNumber);
                        break;
                    default:
                        result = secondNumber;
                }
    
                // Actualiza el estado con el resultado y el nuevo operador
                setCurrentValue(result.toString() + ' ' + label + ' '); // Muestra el resultado seguido del nuevo operador
                setFirstNumber(result); // El resultado se convierte en el nuevo primer número
                setOperator(label); // Guarda el nuevo operador
            }
        } else if (label === '=') {
            if (firstNumber !== null && operator) {
                const secondNumber = parseFloat(currentValue.split(' ').pop()); // Extrae el segundo número
                let result;
    
                switch (operator) {
                    case '+':
                        result = sum(firstNumber, secondNumber);
                        break;
                    case '-':
                        result = res(firstNumber, secondNumber);
                        break;
                    case '*':
                        result = mult(firstNumber, secondNumber);
                        break;
                    case '/':
                        result = divi(firstNumber, secondNumber);
                        break;
                    default:
                        result = secondNumber;
                }
    
                setCurrentValue(result.toString()); // Muestra solo el resultado
                setOperator(''); // Reinicia el operador
                setFirstNumber(null); // Limpia el primer número
            }
        } else {
            // Manejo de números
            if (operator) {
                // Si ya hay un operador, actualiza currentValue para mostrar el segundo número
                const parts = currentValue.split(' '); // Divide el currentValue
                const lastPart = parts.length > 2 ? parts.slice(-1)[0] : ''; // Obtiene el último número ingresado
                const newSecondNumber = lastPart + label; // Concatenar el nuevo dígito
        
                // Reemplaza el último número con el nuevo
                setCurrentValue(parts.slice(0, -1).join(' ') + ' ' + newSecondNumber);
            } else {
                // Manejo de primer número
                setCurrentValue(currentValue === '0' ? label : currentValue + label);
            }
        }
    };
    
    
    

return (
<div class="flex flex-col items-center text-center w-96 bg-gray-800 rounded-lg p-5 shadow-2xl">
    <Marca />
    <Calculate value={currentValue} />

    <div class="flex w-80 mb-5 gap-x-2 justify-center">
        <Button label="CE" onClick={handleButtonClick} onKeyDown={handleButtonClick} className="btn-primary-content w-10" />
        <Button label="+" onClick={handleButtonClick} onKeyDown={handleButtonClick} className="btn-accent w-10" />
        <Button label="-" onClick={handleButtonClick} onKeyDown={handleButtonClick} className="btn-accent w-10" />
        <Button label="/" onClick={handleButtonClick} onKeyDown={handleButtonClick} className="btn-accent w-10" />
        <Button label="*" onClick={handleButtonClick} onKeyDown={handleButtonClick} className="btn-accent w-10" />
        <Button label="=" onClick={handleButtonClick} onKeyDown={handleButtonClick} className="btn-warning w-10" />
    </div>

    <div class="w-80 flex justify-around">
        <Button label="7" onClick={handleButtonClick} onKeyDown={handleButtonClick} />
        <Button label="8" onClick={handleButtonClick} onKeyDown={handleButtonClick}/>
        <Button label="9" onClick={handleButtonClick} onKeyDown={handleButtonClick}/>
    </div>

    <div class="w-80 flex justify-around">
        <Button label="4" onClick={handleButtonClick} onKeyDown={handleButtonClick}/>
        <Button label="5" onClick={handleButtonClick} onKeyDown={handleButtonClick}/>
        <Button label="6" onClick={handleButtonClick} onKeyDown={handleButtonClick}/>
    </div>

    <div class="w-80 flex justify-around">
        <Button label="1" onClick={handleButtonClick} onKeyDown={handleButtonClick}/>
        <Button label="2" onClick={handleButtonClick} onKeyDown={handleButtonClick}/>
        <Button label="3" onClick={handleButtonClick} onKeyDown={handleButtonClick}/>
    </div>

    <div class="w-80">
        <Button label="0" onClick={handleButtonClick} onKeyDown={handleButtonClick}/>
    </div>
</div>
)
};