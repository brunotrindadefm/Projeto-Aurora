import java.util.Scanner;

public class Exercicio21 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double n1, n2, n3, media;

        System.out.print("Digite a primeira nota: ");
        n1 = sc.nextDouble();
        System.out.print("Digite a segunda nota: ");
        n2 = sc.nextDouble();
        System.out.print("Digite a terceira nota: ");
        n3 = sc.nextDouble();

        media = (n1 + n2 + n3) / 3;

        if (media < 3) {
            System.out.println("MÉDIA = " + media + " → REPROVADO");
        } else if (media < 7) {
            System.out.println("MÉDIA = " + media + " → EXAME");
        } else {
            System.out.println("MÉDIA = " + media + " → APROVADO");
        }

        sc.close();
    }
}
