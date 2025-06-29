let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];

  

  let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];
  
// 1. Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.


let itemRemovido =  inventarioAlpha.pop();

console.log(`Depois do pop: ${inventarioAlpha}`);
console.log(`Item removido: ${itemRemovido}`);


// 2. Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.

let UltimoitemRemovido =  inventarioBeta.pop();

console.log(`Depois do pop: ${inventarioBeta}`);
console.log(`Item removido: ${UltimoitemRemovido}`);

// 3. Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.

inventarioAlpha.push('o disco de Festos, 50000', ' o dodecaedro romano, 10000', ' o pilar de Ferro de Déli, 30000');

console.log(`Pós push: ${inventarioAlpha}`);

// 4. Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.


inventarioBeta.push('Fragmento Prismático Kepler-22b, 6400', 'Núcleo de Plasma, Kepler-452b, 9100');

console.table(inventarioBeta);


// 5. Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.

let UmitemRemovido =  inventarioAlpha.pop();

console.log(`Depois do pop: ${inventarioAlpha}`);
console.log(`Item removido: ${UmitemRemovido}`);

inventarioAlpha.unshift('o pilar de Ferro de Déli, 30000')

console.log(`Depois do unshift: ${inventarioAlpha}`);

// 6. Um item da Beta deve ser promovido para o início da lista para estudo prioritário.

let UmDositemsRemovido =  inventarioBeta.pop();

console.log(`Depois do pop: ${inventarioBeta}`);
console.log(`Item removido: ${UmDositemsRemovido}`);

inventarioBeta.unshift('Múcleo de Plasma, Kepler-452b, 9100')

console.log(`Depois do unshift: ${inventarioBeta}`);


// 7. Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.

let primeiroItemRemovido = inventarioAlpha.shift();


console.log(`Depois do shift: ${inventarioAlpha}`);
console.log(`Item removido: ${primeiroItemRemovido}`);


// 8. O primeiro item da Beta pertence a um museu e deve ser removido.

let primeiroItemRemovidoo = inventarioBeta.shift();


console.log(`Depois do shift: ${inventarioBeta}`);
console.log(`Item removido: ${primeiroItemRemovidoo}`);

// 9. Verifique se a “Relíquia de Zordon” está presente no inventário Beta.
const nomesItens = inventarioBeta.map((item) => item[0]);

const reliquiaExiste = nomesItens.includes("Relíquia de Zordon");

console.log(reliquiaExiste);


// 10. Verifique se o item “Nanofibra Luminosa” ainda está disponível na Alpha. (nível hard).

const itensNomes = inventarioAlpha.map ((item) => item[0]);

const reliquiaExistente = itensNomes.includes("Nanofibra Luminosa");

console.log(reliquiaExistente);


// 11. Gere uma string com todos os planetas do inventário Alpha, separados por um delimitador.

const planetas = inventarioAlpha.map((item) => item[1]);

const planetasString = planetas.join(", ");

console.log(planetasString);


// 12. Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas.

const primeiros10Itens = inventarioBeta.slice(0, 10).join(", ");
console.log('-------------------------');

console.log(primeiros10Itens);


// 13. Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.

const primeiros5Itens = inventarioBeta.slice(0, 5);
console.log('-------------------------');

console.log(primeiros5Itens);

// 14. Separe os 10 últimos itens do inventário Alpha para estudo temporal.

const ultimos10Itens = inventarioAlpha.slice(16, 27);
console.log('-------------------------');

console.log(ultimos10Itens);





