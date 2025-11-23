// Define que esta classe pertence ao pacote "animal".

package animal;

// Declara uma classe pública chamada "Animal".
// Esta é a SUPERCLASSE ou classe PAI, que servirá de modelo para outras classes de animais mais específicas.
public class Animal {

    // Declara um atributo (ou variável de instância) público chamado "nome" do tipo String.
    // Cada objeto criado a partir desta classe terá sua própria variável "nome".
    public String nome;

    // Este é o método CONSTRUTOR da classe.
    // Ele é chamado automaticamente sempre que um novo objeto "Animal" é criado (com a palavra-chave "new").
    // Ele recebe um parâmetro "nome" do tipo String.

    public Animal(String nome) {
        // A palavra-chave "this" se refere ao objeto atual que está sendo criado.
        // "this.nome" se refere ao atributo da classe.
        // "nome" (sozinho) se refere ao parâmetro recebido pelo método.
        // Esta linha atribui o valor do parâmetro ao atributo do objeto.
        
        this.nome = nome;
    }

    // Sobrescreve o método "toString()", que é herdado de toda classe em Java (da classe Object).
    // Este método é usado para obter uma representação em texto do objeto.
    // É chamado automaticamente quando você tenta imprimir um objeto, por exemplo.
    public String toString() {
        // getClass() -> Pega as informações da classe do objeto atual (ex: Leao, Zebra).
        // getSimpleName() -> Retorna apenas o nome da classe como uma String.
        // O resultado será "Leao", "Zebra", etc., dependendo do objeto real.
        return getClass().getSimpleName();
    }

    // Declara um método público chamado "emitirSom".
    // "void" significa que o método executa uma ação, mas não retorna nenhum valor.
    // Este método define um comportamento PADRÃO para todos os animais.
    public void emitirSom() {
        // Imprime no console a string "Som de animal.".
        // A ideia é que as subclasses (como Leao, Gorila) SOBRESCREVAM este método
        // para fornecer sua própria implementação de som.
        System.out.println("Som de animal.");
    }
}