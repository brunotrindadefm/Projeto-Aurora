// import java.util.InputMismatchException;
// import java.util.Scanner;

// public class DivisaoInteiros {

//     public static void main(String[] args) {
//         // Objeto Scanner para ler a entrada do teclado
//         Scanner scanner = new Scanner(System.in);

//         try {
//             // Leitura do primeiro número
//             System.out.print("Digite o primeiro número inteiro (numerador): ");
//             double numero1 = scanner.nextInt();

//             // Leitura do segundo número
//             System.out.print("Digite o segundo número inteiro (denominador): ");
//             double numero2 = scanner.nextInt();

//             // Bloco try onde a divisão será tentada
//             try {
//                 // Efetua a divisão entre os números inteiros
//                 double resultado = numero1 / numero2;

//                 // Exibe o resultado
//                 System.out.println("\nResultado da divisão de " + numero1 + " por " + numero2 + " é: " + resultado);

//             } catch (ArithmeticException e) {
//                 // Bloco catch para capturar a ArithmeticException (divisão por zero)
//                 System.err.println("\n*** ERRO: Ocorreu uma exceção aritmética ***");
//                 System.err.println("Detalhe: " + e.getMessage());
//                 System.err.println("Não é possível dividir um número inteiro por zero.");
//             }

//         } catch (InputMismatchException e) {
//             // Captura de exceção caso o usuário digite algo que não seja um inteiro
//             System.err.println("\n*** ERRO: Entrada inválida ***");
//             System.err.println("Certifique-se de digitar apenas números inteiros.");
//         } finally {
//             // Fecha o Scanner para liberar recursos
//             scanner.close();
//         }
//     }
// }