import { useState } from "react";

function Calculator(){
    const [answer,setanswer] = useState(0);
    const [input_data,setInput_data] = useState([0])
    console.log(input_data)
    const inputHandler = (value)=>{
        let operators = "+-*/"
        if (operators.includes(value) && operators.includes(input_data[input_data.length-1])){
            alert("Operator is already used");
            return;
        }
        setInput_data(input_data => [...input_data,value]);
    };
    function calculate(expression) {
        let numStr = ""; 
        const stack = [];
    
        for (let i = 0; i < expression.length; i++) {
            const item = expression[i];
            if (typeof item === "number") {
                numStr += item;
            } else {
                if (numStr !== "") {
                    stack.push(parseInt(numStr)); 
                    numStr = ""; 
                }
                if (item === "+") {
                    stack.push("+");
                } else if (item === "-") {
                    stack.push("-");
                }
                else if (item =='*'){
                    stack.push("*");
                }
                else if (item =='/'){
                    stack.push("/");
                } else {
                    throw new Error("Invalid operator");
                }
            }
        }
        if (numStr !== "") {
            stack.push(parseInt(numStr)); 
        }
    
        let result = stack.shift(); 
    
        while (stack.length > 0) {
            const operator = stack.shift();
            const operand = stack.shift();
            if (operator === "+") {
                result += operand;
            } else if (operator === "-") {
                result -= operand;
            }
            else if (operator ==='*'){
                result *=operand;
            }
            else if (operator==="/"){
                result /=operand;
            }    
        }
    
        return result;
    }
    
    const inputremover=()=>{
        let newarr=[...input_data];
        newarr.pop();
        setInput_data(newarr);
    }
    const outputHandler=() =>{
        let arr = input_data;
        let value =calculate(arr)
        setInput_data([value]);
        setanswer(value);
    }
    return(
        <div className=" bg-slate-300 max-w-96">
            <div className='bg-slate-300 max-w-96 h-28'>
                <div className='bg-slate-500 h-24 m-2 pt-2 rounded'>
                    <div className='text-xl text-end '>{input_data}</div>
                    <div className='text-6xl text-end '>
                        {answer}
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex justify-between bg-slate-300 box-border">
                <button className = 'bg-slate-500 rounded h-16 m-2 w-16' onClick={() => inputHandler(1)}>1</button>
                <button className = 'bg-slate-500 rounded h-16 m-2 w-16' onClick={() => inputHandler(2)}>2</button>
                <button className = 'bg-slate-500 rounded h-16 m-2 w-16' onClick={() => inputHandler(3)}>3</button>
                <button className = 'rounded h-16 m-2 w-16 bg-orange-500' onClick={() => inputHandler('+')}>+</button>
                </div>
                <div className="justify-between bg-slate-300 box-border flex">
                <button className = 'bg-slate-500 rounded h-16 m-2 w-16' onClick={() => inputHandler(4)}>4</button>
                <button className = 'bg-slate-500 rounded h-16 m-2 w-16' onClick={() => inputHandler(5)}>5</button>
                <button className = 'bg-slate-500 rounded h-16 m-2 w-16' onClick={() => inputHandler(6)}>6</button>
                <button className = 'rounded h-16 m-2 w-16 bg-orange-500' onClick={() => inputHandler('-')}>-</button>
                </div>
                <div className="flex justify-between bg-slate-300 ">
                <button className = 'bg-slate-500 rounded h-16 m-2 w-16' onClick={() => inputHandler(7)}>7</button>
                <button className = 'bg-slate-500 rounded h-16 m-2 w-16' onClick={() => inputHandler(8)}>8</button>
                <button className = 'bg-slate-500 rounded h-16 m-2 w-16' onClick={() => inputHandler(9)}>9</button>
                <button className = 'rounded h-16 m-2 w-16 bg-orange-500' onClick={() => inputHandler('*')}>*</button>
                </div>
                <div className="flex justify-between bg-slate-300 ">
                <button className = 'rounded h-16 m-2 w-16 bg-orange-500' onClick={() => inputremover()}>{'<='}</button>
                <button className = 'bg-slate-500 rounded h-16 m-2 w-16' onClick={() => inputHandler(0)}>0</button>
                <button className = 'rounded h-16 m-2 w-16 bg-orange-500' onClick={() => outputHandler()}>=</button>
                <button className = 'rounded h-16 m-2 w-16 bg-orange-500' onClick={() => inputHandler('/')}>/</button>
                </div>
            </div>
        </div>
    );
}
export default Calculator