import java.util.Scanner;

public class Exercicio32 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.print("Digite a matrícula do aluno (negativa para sair): ");
            int matricula = sc.nextInt();

            if (matricula < 0) break;

            System.out.print("Digite a primeira nota: ");
            double n1 = sc.nextDouble();
            System.out.print("Digite a segunda nota: ");
            double n2 = sc.nextDouble();
            System.out.print("Digite a terceira nota: ");
            double n3 = sc.nextDouble();

            double media = (n1 + n2 + n3) / 3;

            if (media >= 70) {
                System.out.println("Aluno " + matricula + " → APROVADO");
            } else if (media >= 60) {
                System.out.println("Aluno " + matricula + " → RECUPERAÇÃO");
            } else {
                System.out.println("Aluno " + matricula + " → REPROVADO");
            }
        }

        sc.close();
    }
}
