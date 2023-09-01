const checkboxes = document.querySelectorAll('input[type=checkbox]');
const inputs = document.querySelectorAll('input[type=number]');

inputs.forEach((input) => {
    input.addEventListener('input', () => {
        const totalPrix = input.parentElement.querySelector('#total');
        const totalPieces = input.parentElement.querySelector('input[type=number]').value;
        const prix = input.parentElement.querySelector('#info>label').innerText;
        const montantTotal = prix * totalPieces;
        totalPrix.innerText = montantTotal.toFixed(2);
    })
})

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const totalPrix = checkbox.parentElement.querySelector('#total');
        
        let nomPiece;
        let totalPieces;
        let prix;
        let total = 0;
        let montantTotal = 0;
        let allType = [];
        const types = {};
        console.log('--------------------------');

        for (const item of checkboxes) {
            if(item.checked) {
                nomPiece = item.parentElement.querySelector('input[type=checkbox]+span').innerText;
                totalPieces = item.parentElement.querySelector('input[type=number]').value;
                prix = item.parentElement.querySelector('#info>label').innerText;
                total = prix * totalPieces;
                montantTotal += total;
                
                const elements = item.parentElement.querySelector('input[type=checkbox]').dataset.type;
                allType.push(elements)
    
                if(!types[elements]) {
                    types[elements] = {total: prix * totalPieces};
                } else {
                    types[elements].total += prix * totalPieces;
                }

                console.log(`${nomPiece} - ${totalPieces} - ${prix}`);
            }
        }
        
        console.log('Sous totaux: ');
        // log tous les sous totaux par type de pièce
        for (const type in types) {
            console.log(`${type}: ${types[type].total}`);
        }
        // Log le montant total
        console.log(`Total: ${montantTotal.toFixed(2)}`);
        
        if (checkbox.checked) {
            // classListAdd
            totalPrix.style.display = 'inline';
            totalPrix.innerText = total.toFixed(2);
        } else {
            totalPrix.style.display = 'none';
        }
    })
})