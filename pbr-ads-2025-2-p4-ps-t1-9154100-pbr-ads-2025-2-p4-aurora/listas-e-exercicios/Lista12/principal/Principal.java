// Define que esta classe pertence ao pacote chamado "principal".

package principal;

// Importa TODAS as classes públicas (*) do pacote "animal".
// Isso é necessário para que a classe Principal possa "enxergar" e usar
// as classes Animal, Leao, Gorila, etc.
import animal.*;

// Declaração da classe principal do programa.
public class Principal {

    // Este é o método principal
    public static void main(String[] args) {

        // Declara e cria um array (vetor) chamado "zoologico".
        // O tipo do array é "Animal", o que significa que ele pode guardar
        // qualquer objeto que SEJA UM Animal ou uma subclasse de Animal.
        
        Animal[] zoologico = new Animal[10];

        //  POLIMORFISMO.
        // Estamos atribuindo a cada posição do array (que é do tipo Animal)
        // um objeto de uma subclasse específica (Leao, Gorila, etc.). 
        // Isso é possível porque um Leão É UM Animal, um Gorila É UM Animal, e assim por diante.

        zoologico[0] = new Leao();
        zoologico[1] = new Gorila();
        zoologico[2] = new Zebra();
        zoologico[3] = new Elefante();
        zoologico[4] = new Urso();
        zoologico[5] = new Leao();
        zoologico[6] = new Zebra();
        zoologico[7] = new Gorila();
        zoologico[8] = new Elefante();
        zoologico[9] = new Urso();

        
        System.out.println("--- Sons do Zoológico ---");

        // Ele vai percorrer
        // cada item do array "zoologico", um por um.
        // A cada volta do loop, o item atual do array será colocado na variável "animal".

        for (Animal animal : zoologico) {

            // Pega o objeto atual (seja ele um Leao, Zebra, etc.) e chama seu método toString().
            // O método toString() foi definido na classe Animal para retornar o nome da classe.
            // Em seguida, concatena com a string " diz: " e imprime na tela sem pular linha.

            System.out.print(animal.toString() + " diz: ");

            //  POLIMORFISMO EM AÇÃO!
            // Estamos chamando o mesmo método, `emitirSom()`, para todos os objetos.
            // No entanto, o Java é inteligente o suficiente para saber qual é o objeto REAL
            // por trás da referência "animal".
            // - Se o objeto for um Leao, ele executa o `emitirSom()` da classe Leao.
            // - Se o objeto for uma Zebra (que não tem o método sobrescrito), ele executa o `emitirSom()` da classe PAI (Animal).
            // - Se o objeto for um Urso, ele executa o método da classe Urso, que por sua vez chama o método da classe Animal.
            
            animal.emitirSom(); // Esta linha se comporta de forma diferente para cada tipo de animal.
        }
    }
}