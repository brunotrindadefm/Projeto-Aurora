import java.util.Scanner;

public class Exercicio7 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Informe o raio R: ");
        double r = sc.nextDouble();

        if (r < 0) {
            System.out.println("Raio inválido. Use um valor não negativo.");
            sc.close();
            return;
        }

        double comprimento = 2 * Math.PI * r;              // dado
        double area        = Math.PI * r * r;              // dado (na verdade é área do círculo)
        double volume      = 0.75 * Math.PI * r * r * r;   // dado (¾ π R^3 — matematicamente incorreto p/ esfera)

        System.out.printf("C = %.5f%n", comprimento);
        System.out.printf("A = %.5f%n", area);
        System.out.printf("V = %.5f%n", volume);

        sc.close();
    }
}