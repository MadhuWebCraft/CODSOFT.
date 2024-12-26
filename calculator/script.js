let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";  
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            try {
                string = eval(string);  
                input.value = string;   
            } catch (error) {
                input.value = "Error"; 
            }
        }
        else if (buttonValue === 'AC') {
            string = "";            
            input.value = "0";      
        }
        
        else if (buttonValue === 'DEL') {
            string = string.slice(0, -1);  
            if (string === "") {
                input.value = "0";       
            } else {
                input.value = string;     
            }
        }
        
        else {
            if (string === "0") {
                string = buttonValue;    
            } else {
                string += buttonValue;   
            }
            input.value = string;        
        }
    });
});
