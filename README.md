# Express

## Commands

``` shell
    $ npm ini
    $ npm i --save express
```


## Exercicio 1

``` js
	const express = require('express')
	const server  = express()

	server.get('/',function(req,res){
		res.send('<h1> Index! </h1>')
	})

	server.get(/api/,function(req,res){
		res.send('<h1>APIIIIII</h1>')
	})

	server.listen(3000, () => console.log('Executando..'))
```

## Exercicio 2

``` js
	const express = require('express')
	const server  = express()

	server.get('/',function(req, res, next){
		console.log('inicio.....')
		next()
		console.log('fim.....')
	})

	server.get('/',function(req, res){
		console.log('resposta')
		res.send('<h1>EX02</h1>')    

	})

	server.listen(3000, () => console.log('Executando..'))
```

## Exercicio 3

``` js
	const express = require('express')
	const server  = express()

	server.use(function(req, res, next){
		console.log('inicio.....')
		next()
		console.log('fim.....')
	})

	server.use(function(req, res){
		console.log('resposta')
		res.send('<h1>Api</h1>')    
	})

	server.listen(3000, () => console.log('Executando..ex03'))
```

## Exercicio 4

``` js
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
```

## Exercicio 5


``` js
em breve
```

