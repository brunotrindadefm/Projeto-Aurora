import java.util.InputMismatchException;
import java.util.Scanner;

public class Principal3 {

    public static void main(String[] args) {
        // Objeto Scanner para ler a entrada do teclado
        Scanner scanner = new Scanner(System.in);
        // Criação de uma instância da classe Divisor
        Divisor3 objetoDivisor = new Divisor3();

        try {
            System.out.println("--- Divisão de Números Inteiros com Exceção Personalizada ---");
            
            System.out.print("Digite o dividendo (numerador): ");
            int numero1 = scanner.nextInt();

            System.out.print("Digite o divisor (denominador): ");
            int numero2 = scanner.nextInt();

            // Chamada ao método que lança a exceção personalizada
            int resultado = objetoDivisor.efetuarDivisao(numero1, numero2); 

            // Exibe o resultado se a operação for bem-sucedida
            System.out.println("\nResultado da divisão de " + numero1 + " por " + numero2 + " é: " + resultado);

        } catch (DivisaoInvalidaException3 e) {
            // Bloco catch para capturar a exceção personalizada repassada
            System.err.println("\n*** ERRO: Divisão Inválida ***");
            // Usa o método getMessage() da superclasse (Exception)
            System.err.println("Motivo: " + e.getMessage()); 
            
            // Usa os métodos personalizados para obter os dados que causaram o erro
            System.err.println("Valores inseridos: Dividendo = " + e.getDividendo() + ", Divisor = " + e.getDivisor());
            
        } catch (InputMismatchException e) {
            // Tratamento para entrada de dados não-numéricos
            System.err.println("\n*** ERRO: Entrada inválida ***");
            System.err.println("Certifique-se de digitar apenas números inteiros.");
        } finally {
            // Fecha o Scanner
            scanner.close();
        }
    }
}