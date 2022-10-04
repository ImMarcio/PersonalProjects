class Pilha{
    constructor(self){
        this.dados = []
    }

    estaVazia(){
        return this.dados == 0
    }
    tamanho(){
        return this.dados.length()
    }
   /*imprimir(){
        let s = ''
        for( index of this.dados){
            s += str(index)
        }
        return s
    }*/
    imprimir(){
        return this.dados
    }

    empilhar(value){
        return this.dados.push(value)
    }
    desempilhar(){
        if (not this.dados.estaVazia){
             return this.dados.pop()}
    }
    elemento(posicao){
        return this.dados.find(element => element > posicao)
    }
    busca(value){
        return this.dados.indexOf(value)
    }
    */esvazia(){
        while(not this.dados.estavazia()){ 
             this.dados.desempilhar()}
    }/*
}


let p1 = new Pilha()
for( let i = 0; i < 7; i++){
    p1.empilhar(i * 10);
};
p1.empilhar(1);

console.log(p1.imprimir());
console.log('Desempilhou!')
p1.desempilhar();
console.log(p1.imprimir());

console.log('Encontrou o elemento na posição determinada:  ' + p1.elemento(1))
console.log('Encontrou a posição do valor: ' + p1.busca(30));
console.log(p1.imprimir()); 
