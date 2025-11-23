import java.util.Scanner;

public class Exercicio41 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int nota, idade;
        double salario;
        char sexo;

        // Validação da nota
        do {
            System.out.print("Digite a nota (0 a 100): ");
            nota = sc.nextInt();
            if (nota < 0 || nota > 100) {
                System.out.println("Nota inválida, tente novamente.");
            }
        } while (nota < 0 || nota > 100);

        // Validação do salário
        do {
            System.out.print("Digite o salário (maior que 0): ");
            salario = sc.nextDouble();
            if (salario <= 0) {
                System.out.println("Salário inválido, tente novamente.");
            }
        } while (salario <= 0);

        // Validação do sexo
        do {
            System.out.print("Digite o sexo (m/f): ");
            sexo = sc.next().toLowerCase().charAt(0);
            if (sexo != 'm' && sexo != 'f') {
                System.out.println("Sexo inválido, tente novamente.");
            }
        } while (sexo != 'm' && sexo != 'f');

        // Validação da idade
        do {
            System.out.print("Digite a idade (0 a 110): ");
            idade = sc.nextInt();
            if (idade < 0 || idade > 110) {
                System.out.println("Idade inválida, tente novamente.");
            }
        } while (idade < 0 || idade > 110);

        System.out.println("✅ Dados válidos! Programa finalizado.");
        sc.close();
    }
}
