var palavras = [
  "amigo", "anexo", "andar", "ardor", "areia", "aviso", "balao", "banco", "barco", "beijo",
  "berro", "bicho", "bloco", "boato", "bravo", "burro", "cacho", "caixa", "calor", "campo",
  "canto", "carro", "cedro", "cerco", "chave", "cheio", "cinto", "cisco", "claro", "cobra",
  "corpo", "cravo", "credo", "custo", "dados", "dedos", "dente", "dicas", "dique", "doido",
  "drama", "ecoar", "elite", "enfim", "envio", "epico", "etico", "falso", "festa", "ficha",
  "filho", "firme", "folha", "fundo", "gasto", "gente", "gesso", "grito", "haste", "horta",
  "idolo", "ideal", "imune", "indio", "inter", "janta", "jogar", "juros", "lance", "lapso",
  "largo", "leite", "lenda", "limpo", "lindo", "louco", "lucro", "lugar", "macho", "manso",
  "massa", "matar", "media", "midia", "moeda", "morro", "multa", "nariz", "nobre", "nivel",
  "noite", "norma", "nuvem", "obvio", "oculos", "ordem", "otimo", "pacto", "perto", "tenso"
];

let sorteio = Math.floor(Math.random() * palavras.length);
let palavra = palavras[sorteio];

function verificarLetra(posicao, input, event) {
  if (!/[A-Z]/i.test(input.value)) {
    event.preventDefault();
    input.value = '';
  }

  var letra = input.value.toLowerCase();

  if (!letra) {
    input.classList.remove('exata');
    input.classList.remove('existe');
    input.classList.remove('naotem');
  } else if (palavra[posicao] === letra) {
    input.classList.add('exata');
  } else if (palavra.includes(letra)) {
    input.classList.add('existe');
  } else {
    input.classList.add('naotem');
  }
}

function verificarCursor(posicao, input, event) {
  if (event.key === 'ArrowLeft') {
    moverCursorSetaEsquerda(posicao, event);
  } else if (event.key === 'ArrowRight') {
    moverCursorSetaDireta(posicao, event);
  } else if (event.key === 'Backspace') {
    tentaRetornarCursor(posicao, input);
  } else {
    tentaAvancarCursor(posicao, input);
  }
}

function tentaAvancarCursor(posicao, input) {
  var inputs = document.querySelectorAll('.letra');
  if (input.value) {
    if (posicao+1 < inputs.length) {
      inputs[posicao+1].focus();
    }
  }
}

function tentaRetornarCursor(posicao, input) {
  var inputs = document.querySelectorAll('.letra');
  if (!input.value && posicao) {
    inputs[posicao-1].focus();
  }
}

function moverCursorSetaDireta(posicao, event) {
  event.preventDefault();
  var inputs = document.querySelectorAll('.letra');
  if (posicao+1 < inputs.length) {
    inputs[posicao+1].focus();
  }
}

function moverCursorSetaEsquerda(posicao, event) {
  event.preventDefault();
  var inputs = document.querySelectorAll('.letra');
  if (posicao) {
    inputs[posicao-1].focus();
  }
}