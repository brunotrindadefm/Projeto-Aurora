import java.util.Scanner;

public class Exercicio51 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite um número natural: ");
        int n = sc.nextInt();

        if (n < 0) {
            System.out.println("Número inválido. O fatorial não é definido para negativos.");
        } else {
            long fatorial = 1;
            for (int i = 1; i <= n; i++) {
                fatorial *= i;
            }
            System.out.println(n + "! = " + fatorial);
        }

        sc.close();
    }
}
