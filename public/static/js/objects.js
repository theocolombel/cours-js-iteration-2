
/**
 * Fonction à appeler au chargement de la page
 * Cette fonction devra exécuter les actions suivantes :
 *    - charger la liste des objets depuis l'API
 *    - charger les données des objets dans la table
 */
// function load_components(){
//     $(document).ready(function(){
//     console.log("Chargement des données de la page");
//     // Ajouter ici le code permettant de charger dynamiquement les éléments de la page
//     });
// }
// load_components();





// function load_components(){
    
//     console.log("Chargement des données de la page");
//     // Ajouter ici le code permettant de charger dynamiquement les éléments de la page
    
// }
// window.onload = load_components;




// function load_components(){
// window.addEventListener("DOMContentLoaded", function() {
//     console.log("Chargement des données de la page");
// });
// }

// function load_components(){
//     document.addEventListener("load", function() {
//         console.log("Chargement des données de la page");
//     });
//     }




// function load_components(){
//     $(window).on('load', function() {
//         console.log('Chargement des données de la page')
//     })
//     }
//     load_components();


    function load_components(){
       
            console.log('Chargement des données de la page');
            $.get('/objects',(data) => {

                for(let u of data.objects) {
                  
                    console.log(u);
                    document.querySelector('#table_body').innerHTML = document.querySelector('#table_body').innerHTML + add_line_to_table(u);
                    // document.querySelector('#table_body').innerHTML+=add_line_to_table(u);
                    // $('#table_body').append(add_line_to_table(u));
                    // document.getelementsById('table_body').innerHTML+=add_line_to_table(u);
                };
             });
        }

function add_line_to_table(data){
    u = data;
    console.log(u);
    let image;
    if (data.image == undefined){
       
        load_default_image(data.type, data.serial);
       
    }
    else image = data.image;
    line = `   
                <tr>
                    <td>   
                        <h3>${u.serial}</h3>
                    </td>
                    <td>
                        <img src="./static/images/${u.image}" style="width : 100% ;" alt="${u.type}"/>
                    </td>
                    <td>
                        <p>${u.description}</p>
                    </td>
                    
                    <td><input type="checkbox" ${u.status ? 'checked' : ''} />
                    </td>
                    <td>
                        <button class="btn btn-primary">Details</button>
                    </td>
                </tr>
    `;
    return line ;
}


function load_default_image(type, serial){
    
    $.get('http://localhost:5000/data', function(data){
      
    let image;
        for (let u in data.types){
            if (u == type){
                
                image = data.types[u].default_image;

                document.getElementById("table_body").getElementsByTagName("img")[parseInt (serial.substring(4))-1].setAttribute("src", "/static/images/"+image)
                // $('td:contains('+serial+')').next().children().attr('src', '/static/images/'+image);
                console.log('Data Serial :' + serial);
                console.log('Data image :' + image);
                
                return image;
            }
        }   
    });
}

