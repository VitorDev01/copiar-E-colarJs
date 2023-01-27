<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style> 
       
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
          }
          
          body {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #202024;
            font-family: times;
          }
          
          h3 {
            color: white;
          }
          
          input {
            padding: 5px;
            width: 300px;
            outline: none;
            border: none;
            border-radius: 5px;
          }
          
          button {
            margin-top: 10px;
            width: 300px;
            display: block;
            cursor: pointer;
            border: none;
            padding: 6px 15px;
            border-radius: 5px;
            background-color: #8257e6;
            color: white;
            outline-color: #8257e6;
            
          }
          
          button:hover {
            opacity: 0.9;
            background-color: #202024;
          }
          
          .divCopy {
            margin: 15px 0;
          }
          
          .btnGen {
            background-color: #8257e6;
          }
          .btnGen:hover {
            background-color: #202024;
          }     
          
          .area {
            margin-top: 10px;
            height: 30px;
          }
        
    </style>
  </head>
  <body>
        <div class="item">
        <h3>Copiar Para Área De Transferência</h3>
        <!--Chamando a função Copiar-->
        <div class="divCopy">
          <input type="text" placeholder="Gere ou digite por aqui" />
         
          <button onclick="copyToClipboard()" >Copiar</button>
          
        </div>
     
        <!-- Chamando a função Gerador de string dentro do botão -->
        <button class="btnGen" onclick="stringGenerator()" >Gerador de String </button>
        
       <input type="textarea" class="area" placeholder="Cole Aqui!">
      </div>
      
  <script>

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
  </script>
  <body>
</html>
