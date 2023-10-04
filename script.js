document.addEventListener("DOMContentLoaded", function () {
    const entrada = document.getElementById("entrada");
    const generarNumerosBtn = document.getElementById("generarNumeros");
    const listaNumeros = document.getElementById("listaNumeros");

    generarNumerosBtn.addEventListener("click", function () {
        const resultados = new Set();
        
        // Generar 10 resultados únicos
        while (resultados.size < 10) {
            let cadenaCompleta = entrada.value.replace(/x/gi, () => Math.floor(Math.random() * 10));
            
            // Validar con el algoritmo de Luhn
            if (luhnCheck(cadenaCompleta)) {
                resultados.add(cadenaCompleta);
            }
        }

        // Limpiar la lista actual
        listaNumeros.innerHTML = "";

        // Mostrar los 10 resultados en la lista
        for (const resultado of resultados) {
            const li = document.createElement("li");
            li.textContent = resultado;
            listaNumeros.appendChild(li);
        }
    });

    // Función para validar con el algoritmo de Luhn
    function luhnCheck(cardNumber) {
        let sum = 0;
        let alternate = false;
        
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber.charAt(i), 10);
            
            if (alternate) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            
            sum += digit;
            alternate = !alternate;
        }
        
        return (sum % 10 === 0);
    }
});
