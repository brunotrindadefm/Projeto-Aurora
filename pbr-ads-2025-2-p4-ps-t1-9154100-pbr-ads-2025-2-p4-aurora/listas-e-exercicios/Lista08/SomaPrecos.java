import java.util.Scanner;

public class SomaPrecos {

    /**
     * Método para somar o preço de vários produtos[cite: 6].
     * O usuário digita os preços. Digitar 0 encerra a soma.
     * @param scanner Objeto Scanner para ler a entrada do teclado.
     * @return A soma total dos preços informados.
     */
    public static double somarPrecos(Scanner scanner) {
        double soma = 0.0;
        double preco;

        System.out.println("--- Calculadora de Preços ---");
        System.out.println("Digite os preços dos produtos. Digite '0' (zero) para finalizar.");

        while (true) {
            System.out.print("Digite o preço: R$ ");
            preco = scanner.nextDouble();

            if (preco == 0) {
                break; // Encerra o loop se o usuário digitar 0
            }
            
            soma += preco; // Soma o preço ao total
        }
        
        return soma; // Retorna a soma 
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Chama o método para somar os preços
        double total = somarPrecos(scanner);

        // O total deve ser impresso na tela pelo método main 
        System.out.println("\n----------------------------------");
        System.out.printf("O valor total dos preços é: R$ %.2f\n", total);
        System.out.println("----------------------------------");

        scanner.close();
    }
}