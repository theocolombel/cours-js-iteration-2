function load_components(){
    console.log("Chargement des données de la page");
    $.get('/objects',(data) => {
        for(let object of data.objects) {
            $('#table_body').append(add_line_to_table(object));
            get_type_img(object,'#img-'+object.serial);
        };
    })
}

function get_type_img(object,DOMelement){
     
    $.get('/types').done((data) => {
            for(let type of data.types) if(type[0]==object.type)  img = type[1].default_image ;
            if($(DOMelement).attr('src').includes('undefined')) $(DOMelement).attr('src',"./static/images/"+img); 
        });   
}

function add_line_to_table(u){
    
    line = `   
                <tr>
                    <td>   
                        <h3>${u.serial}</h3>
                    </td>
                    <td>
                        <img id="img-${u.serial}" src="./static/images/${u.image}" style="width : 100% ;max-height : 200px;" alt="${u.type}"/>
                    </td>
                    <td>
                        <p>${u.description}</p>
                    </td>
                    <td style="color : ${u.status ? " #048904;\" > Disponible" : " #890404;\" > Indisponible"}
                    </td>
                    <td>
                        <input type="button" class="btn btn-primary" value="Details" data-toggle="modal" data-target="#modal-details" >
                    </td>
                </tr>
    `;
    return line ;
}