const express = require('express')
const server  = express()

server.route('/clientes')
    //get é usado para receber uma lista de 
    //post é usando para adicionar um cliente
    //put é usado para alterar um cliente
    //delete é usando para eliminar o registro
    .get((req, res)    => res.send('Lista de Clientes'))
    .post((req, res)   => res.send('Novo Cliente')) 
    .put((req, res)    => res.send('Altera Cliente'))
    .delete((req,res)  => res.send('Cliente Deletado'))


server.listen(3000, () => console.log('Executando.. ex04'))