        
        const input = document.querySelector('input')
          //criando a função gerador de string
          function stringGenerator() {
            var randomString = Math.random().toString(36).slice(-10)
          
            input.value = randomString
       }
          //criando a função copiar 
       function copyToClipboard() {
            navigator.clipboard.writeText(input.value).then(() => {
              alert('Copiado Para Sua Área De Transferência')
            })
       }