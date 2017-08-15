fetch('https://api.github.com/users/princegold').then(function(response){
	return response.json()
}).then(function(data){
	

let htmlData = ""
	htmlData += `

<p id="head"> ${data.name} </p>

<div id="box">

<div id="first">

	<p class="basic">TheBasics</p>
	<div id="XCOM">
<div id="middle">
	<p class="blue">Name:</p>
	<p class="white"> ${data.name} </p>
</div>
<div id="middle">
	<p class="blue">Gitub URL:</p>
	<p class="black"> ${data.login} </p>
</div>
<div id="middle">
	<p class="blue">Email:</p>
	<p class="white"> ${data.email} </p>
</div>
<div id="middle">
	<p class="blue">Company:</p>
	<p class="white"> ${data.company} </p>
</div>
<div id="middle">
	<p class="blue">Website:</p>
	<p class="black"> ${data.url} </p>
</div>
</div>
</div>

<div id="second">
	<p class="basic">TheStory</p>
	<p class="para"> ${data.bio}</p>
</div>

<div id="third">
	<img src=" ${data.avatar_url} ">
</div>

</div>
`

document.getElementById("whatever").innerHTML += htmlData;
})
