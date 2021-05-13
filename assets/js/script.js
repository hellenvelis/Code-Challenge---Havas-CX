const apiURL = 'https://jsonplaceholder.typicode.com/posts'
const infos = [{userId: 'userid', id: 'id', title: 'titulo', body: 'body'}]
const box = document.querySelector('#infos')

fetch(apiURL)
	.then(dados => dados.json())
	.then(resposta => {
		resposta.forEach(info => infos.push({
		userId: info.userId,
		id: info.id,
		title: info.title,
		body: info.body
	})
	)
	console.log(infos)
})

infos.forEach(info => 
	informacoes.innerHTML += (`<li>userid: ${info.userId} id: ${info.id} title: ${info.title} body ${info.body}</li>`)

)