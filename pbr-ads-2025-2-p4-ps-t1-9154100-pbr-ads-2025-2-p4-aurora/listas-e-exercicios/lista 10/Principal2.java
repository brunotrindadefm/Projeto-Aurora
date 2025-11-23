// import java.util.InputMismatchException;
// import java.util.Scanner;

// public class Principal2 {

//     public static void main(String[] args) {
//         // Objeto Scanner para ler a entrada do teclado
//         Scanner scanner = new Scanner(System.in);
//         // Criação de uma instância da classe Divisor
//         Divisor2 objetoDivisor = new Divisor2();

//         try {
//             // c. Leitura dos números a partir do teclado
//             System.out.println("--- Divisão de Números Inteiros ---");
            
//             System.out.print("Digite o dividendo (numerador): ");
//             int numero1 = scanner.nextInt();

//             System.out.print("Digite o divisor (denominador): ");
//             int numero2 = scanner.nextInt();

//             // a. Chamada ao método da classe secundária dentro do bloco try para tratamento de exceção
//             int resultado = objetoDivisor.efetuarDivisao(numero1, numero2);

//             // Exibe o resultado se a operação for bem-sucedida
//             System.out.println("\nResultado da divisão de " + numero1 + " por " + numero2 + " é: " + resultado);

//         } catch (ArithmeticException e) {
//             // a. Bloco catch para capturar a ArithmeticException repassada (throws) pela classe Divisor
//             System.err.println("\n*** ERRO na Operação de Divisão ***");
//             System.err.println("Motivo: " + e.getMessage());
//         } catch (InputMismatchException e) {
//             // Tratamento adicional para entrada de dados não-numéricos
//             System.err.println("\n*** ERRO: Entrada inválida ***");
//             System.err.println("Certifique-se de digitar apenas números inteiros.");
//         } finally {
//             // Fecha o Scanner
//             scanner.close();
//         }
//     }
// }