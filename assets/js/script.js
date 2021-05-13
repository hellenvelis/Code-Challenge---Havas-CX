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
	template(infos)
})

infos.forEach(info => 
	informacoes.innerHTML += (`<li>userid: ${info.userId} id: ${info.id} title: ${info.title} body ${info.body}</li>`)

)


function template(data)
{
	var content = '';
	data.map(function(item){
		console.log(item)
		content += `<div id="box">
				<div class="card text-center">
  				<div class="card-header">
   					 Featured
  				</div>
 				<div class="card-body">	
   				 <h5 class="card-title">${item.title}</h5>
   				 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
   				 <p>
				  <button class="btn btn-outline-warning" type="button" data-toggle="collapse" data-target="#collapseExample${item.id}" aria-expanded="true" >
				    See more
				  </button>
				</p>
				<div class="collapse" id="collapseExample${item.id}">
				  <div class="card card-body">
				    ${item.body}
				  </div>
				</div>
  				</div>
  				<div class="card-footer text-muted">
    			2 days ago
  				</div>
				</div>
			</div>
		`
	})
	$('.container').html(content)
}