
const book = {
    bookTitle: 'A arte da guerra',
    bookAuto: 'Sun  Tzu',
    bookPage: 134,
    bookCapitulo:{
        capituloOne: 'A Avaliação',
        capituloTwo: 'O comando da batalha',
        capituloThree: 'A vitória perfeita',
        capituloFour: 'O urso das tropas',
        capituloFive: 'A robustez das tropas'
    },

    printBook: function(){
        console.log('printing...')
    }
}

book.printBook()

// Criando Factory de objeto

function createBook(titulo, autor, paginas){
 let livro = {
    bookTitle: titulo,
    bookAutor: autor,
    bookPage: paginas}
    return livro
   
}

let book1 = createBook('A arte da guerra', 'Sun Tzu', 134)
let book2 = createBook('Menino do pijama listrado', 'Gabriel Dias', 300)
console.log(book1)


//  Criando um Constructor ( mesmo coisa do factory mas com menos código)

function CreateCar (marca, modelo, ano){
    this.carName = marca;
    this.carModelo = modelo;
    this.carAno = ano;
}

let carro1 = new CreateCar('Nissa', 'GTR-R36', 2024)
console.log(carro1)