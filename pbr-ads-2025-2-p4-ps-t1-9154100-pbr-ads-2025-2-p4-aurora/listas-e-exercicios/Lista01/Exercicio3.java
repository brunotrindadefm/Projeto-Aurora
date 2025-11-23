// Importa a classe Scanner, usada para ler entradas do teclado
import java.util.Scanner;

// Declara a classe pública Exercicio3
// O nome da classe deve ser o mesmo do arquivo: Exercicio3.java
public class Exercicio3 {

    // Método main - ponto de entrada do programa
    // É o primeiro método que o Java executa quando rodamos a aplicação
    public static void main(String[] args) {

        // Cria um objeto Scanner para capturar dados digitados pelo usuário no console
        Scanner scanner = new Scanner(System.in);

        // Exibe uma mensagem explicando o que o programa faz
        System.out.println("Cálculo da área de um losango");

        // Pede ao usuário que digite a diagonal maior
        System.out.print("Digite o valor da diagonal maior: ");
        double diagonalMaior = scanner.nextDouble(); // Lê o valor digitado e guarda em uma variável

        // Pede ao usuário que digite a diagonal menor
        System.out.print("Digite o valor da diagonal menor: ");
        double diagonalMenor = scanner.nextDouble(); // Lê o valor digitado e guarda em uma variável

        // Calcula a área do losango usando a fórmula: (diagonal maior * diagonal menor) / 2
        double area = (diagonalMaior * diagonalMenor) / 2;

        // Exibe o resultado do cálculo no console
        System.out.println("A área do losango é: " + area);

        // Fecha o Scanner para liberar recursos
        scanner.close();
    }
}
