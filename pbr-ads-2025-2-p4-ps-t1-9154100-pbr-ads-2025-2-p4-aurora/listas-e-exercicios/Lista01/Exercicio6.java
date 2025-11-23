import java.util.Scanner;

public class Exercicio6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor do primeiro cateto: ");
        double cateto1 = scanner.nextDouble();

        System.out.print("Digite o valor do segundo cateto: ");
        double cateto2 = scanner.nextDouble();

        double hipotenusa = Math.sqrt((cateto1 * cateto1) + (cateto2 * cateto2));

        System.out.println("O valor da hipotenusa é: " + hipotenusa);

        scanner.close();
    }
}
