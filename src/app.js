// imports del proyecto
import * as firebase from 'firebase';
import "isomorphic-fetch";
import 'rickmortyapi';
import _ from "lodash";
import './style.scss';
import 'bootstrap';

// firebase configuration - configuracion de firebase
const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
};

// Initialize Firebase - inicializar firebase
firebase.initializeApp(firebaseConfig);

// funcion que obtiene los personajes de la api de rick y morty
function getRickandMortyCharacters(progress, url = 'https://rickandmortyapi.com/api/character', characters = []) {
  // crea una promesa para cada url
  return new Promise((resolve, reject) => fetch(url)
    // comprueba si hay respuesta
    .then(response => {
      if (response.status !== 200) {
        throw `${response.status}: ${response.statusText}`;
      }
      //los datos de la respuesta se almacenan en data
      response.json().then(data => {
        //el array characters almacena los datos del array characters + los nuevos datos  
        characters = characters.concat(data.results);
        // si info.next no esta vacio en la respuesta se ejecuta nuevamente la funcion getRickandMortyCharacters
        if (data.info.next) {
          //el array characters iniciara con los valores que almaceno
          progress && progress(characters);
          // la url cambiara por info.next el cual contiene la url de la siguiente pagina
          getRickandMortyCharacters(progress, data.info.next, characters).then(resolve).catch(reject)
        } else {
          //el array character almaceno todo los personajes de cada pagina de la api
          resolve(characters);
        }
      }).catch(reject);
    }).catch(reject));
}

// funcion que creara el contenido y asigna los valores de characters a mostrar
getRickandMortyCharacters()
  .then(characters => {
    // carga todos los personales
    const contenido = document.querySelector('.contenido');
    let salida = '';
    characters.forEach(character => {
      salida += `
            <div class="col-sm-3">
                <div class="card-deck">
                    <div class="card">
                      <div class="face">
                        <img src="${character.image}" class="card-img" />
                      </div>
                      <div class="card-overlay text-center">
                        <h5 class="card-title">${character.name}</h5>
                      </div>
                      
                      <div class="back-face">
                        <img src="${character.image}" class="card-img" />
                        
                        <div class="card-body">
                          <p class="card-text">Hi, my name is ${character.name},
                           i am a ${character.gender} ${character.species}
                            ${character.type} from ${character.origin.name},
                            the last time I appeared I was in ${character.location.name}.
                            </br>
                            character status... ${character.status}</p>
                        </div>
                      </div>                          
                    </div>
                </div>
            </div>
        `
    });
    contenido.innerHTML = salida;
  })
  .catch(console.error);
