
$(document).ready(function() {
		Swal.fire({
		  title: 'BIENVENIDO A SU PLAYLIST',
		  type: 'success',
		  
		})
	});


function buscar(){

	Swal.fire({
		  title: 'PLAYLIST ENCONTRADA',
		  type: 'success',
		  
		})

	$.get(`https://api.deezer.com/user/2529/playlists`,function(resultado){
		$.each(resultado.data,function(i, musica){ // recorremos el resultado de la api
			mostrar=`
				<tr>
					<td>${musica.title}</td>
					<td>${musica.duration}</td>
					<td><img src="${musica.picture_small}"></td>
					<td>${musica.creator.name}</td>
					<td><button type="button" class="btn btn-secondary id="obtenerTracks" onclick="obtenerTracks()"">TRACKS</button></td>
			  	</tr>
			`;
			$('#table_mostrar').append(mostrar); 
		});
	});
}



function obtenerTracks(){

	Swal.fire({
		  title: 'TRACKS ENCONTRADOS',
		  type: 'success',
		  
		})


$("#table_mostrar2").children().remove()
	$.get(`https://api.deezer.com/playlist/757807/tracks`,function(resultado){	
		$.each(resultado.data,function(i, musica){
			debugger
			mostrar=`	
			    <tr>
					<td>${musica.title}</td>
					<td>${musica.artist.name}</td>
					<td><img src="${musica.artist.picture_small}"></td>
			    </tr>
			`;
			$('#table_mostrar2').append(mostrar);
		});
	});
}

	

	
