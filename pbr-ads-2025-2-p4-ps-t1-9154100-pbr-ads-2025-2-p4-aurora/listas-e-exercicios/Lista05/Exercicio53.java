import java.util.Scanner;

public class Exercicio53 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a base (número inteiro): ");
        int base = sc.nextInt();

        System.out.print("Digite o expoente (número inteiro >= 0): ");
        int expoente = sc.nextInt();

        if (expoente < 0) {
            System.out.println("Expoente inválido. Deve ser >= 0.");
        } else {
            long resultado = 1;
            for (int i = 0; i < expoente; i++) {
                resultado *= base;
            }
            System.out.println(base + "^" + expoente + " = " + resultado);
        }

        sc.close();
    }
}
