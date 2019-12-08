<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Leilão</title>
 </head>
<body>
    <h1>Leilão</h1>
<div>O número do contrato é: "0xbc6573af5627d0d0ff317379b93131176ffe2da0"</div>
<br/>
<br/>
   <h2>Status do Leilão</h2>
    <div>O bem em oferta é: <span id="campoBem">&nbsp;</span>
    </div>
    <div>O lance mínimo é: <span id="campoLance">&nbsp;</span>
    </div>
    <br/>
    <div>O valor do último Lance é: <span id="maiorLance">&nbsp;</span>
    </div>
    <br/>
    <hr>
        </div>
        <div>
            &nbsp;
    </form>
    <h1>Lances</h1>
    <form name="frmLance" id="frmLance" action="#" method="get" onsubmit="executeLance(); return false;">
        <div>
            <label for="Lance">Oferte um novo Lance: </label>
            <input id="Lance" type= "number">
        </div>
        <div>
            &nbsp;
        </div>
        <div>
            <button type="submit">Registrar Lance</button>
        </div>
        <div><br><hr></div>
        <div id="campoLance">
            &nbsp;
        </div>
    </form>

    <p>&nbsp;</p>
    
    <script charset="utf-8"  src="https://cdn.ethers.io/scripts/ethers-v4.min.js" type="text/javascript"></script>
    <script src="javascript/abi.js"></script>    
    <script src="javascript/blockchain.js"></script>    
    <script>
<h1>Encerramento do leilao</h1>
    <form action="#" method="get" id="frmEncerrar" name="frmEncerrar" onsubmit="encerrarLeilão(); return false;">
        <div>
        <br>
        </div>
        <div>
            &nbsp;
        </div>
        <div>
            <button type="submit">Encerrar Leilão</button>
        </div>
        <div><br><hr></div>
        <div id="encerrarLeilão">
            &nbsp;
        </div>
    </form>
        
    </script>

</body>
</html>
