const fetchPokemon = () => {
    const nombrepokemon = document.getElementById("nombrepokemon");
    let pokeinput = nombrepokemon.value.toLowerCase();
    const pag = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
    fetch(pag).then((res) => {
        if (res.status != "200") {
            console.log(res);
            imagenpokemon("./img/error.jpg");
            
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let imgpokemon = data.sprites.front_default;
        console.log(imgpokemon);
        imagenpokemon(imgpokemon);
        let nombrereal = data.species.name;
        console.log(nombrereal);
        let tipo = data.types[0].type.name;
        var tipo2 = data.types[1] && data.types[1].type && data.types[1].type.name;
            if( tipo2 === undefined) {
            tipo2 = "";
        }
        console.log(tipo2);
        /*let hp = data.stats[0].stat.name;
        console.log(hp);*/
        let hp = data.stats[0].base_stat;
        console.log(hp);
        let atack = data.stats[1].base_stat;
        console.log(atack);
        let def = data.stats[2].base_stat;
        console.log(def);
        let spatack = data.stats[3].base_stat;
        console.log(spatack);
        let spdef = data.stats[4].base_stat;
        console.log(spdef);
        let sped = data.stats[5].base_stat;
        console.log(sped);
        let movs = Object.values(data.moves).map(mname => mname.move.name).join(', ');
        console.log(sped);

        document.getElementById("Nombrereal").innerHTML=nombrereal.toUpperCase();
        document.getElementById("tipo").innerHTML=tipo.toUpperCase();
        /*document.getElementById("estadisticas").innerHTML=hp;*/
        document.getElementById("hp").innerHTML=hp;
        document.getElementById("atack").innerHTML=atack;
        document.getElementById("def").innerHTML=def;
        document.getElementById("spatack").innerHTML=spatack;
        document.getElementById("spdef").innerHTML=spdef;
        document.getElementById("sped").innerHTML=sped;
        document.getElementById("tipo2").innerHTML=tipo2.toUpperCase();
        document.getElementById("movimientos").innerHTML=movs;
        /*.cath(err=> renderNotFound())*/
    })
}
  function imagenpokemon(pag) {
    const imgpokemon = document.getElementById("imgpokemon");
    imgpokemon.src = pag;
}
