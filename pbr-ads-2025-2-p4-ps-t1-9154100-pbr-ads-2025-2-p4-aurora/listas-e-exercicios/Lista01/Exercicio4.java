// Importa a classe Scanner, que permite ler valores digitados pelo usuário
import java.util.Scanner;

// Declaração da classe pública ConversorTemperatura
// O arquivo precisa se chamar Exercicio4.java
public class Exercicio4 {

    // Método main - ponto de entrada do programa
    public static void main(String[] args) {

        // Cria um objeto Scanner para capturar o que o usuário digita no console
        Scanner scanner = new Scanner(System.in);

        // Exibe uma mensagem inicial explicando a função do programa
        System.out.println("Conversor de temperatura: Celsius para Fahrenheit");

        // Pede ao usuário para digitar a temperatura em graus Celsius
        System.out.print("Digite a temperatura em Celsius: ");
        double celsius = scanner.nextDouble(); // Lê o valor digitado e guarda na variável 'celsius'

        // Fórmula de conversão: (°C × 1.8) + 32 = °F
        double fahrenheit = (celsius * 1.8) + 32;

        // Mostra o resultado no console
        System.out.println("A temperatura em Fahrenheit é: " + fahrenheit);

        // Fecha o Scanner para liberar os recursos
        scanner.close();
    }
}
