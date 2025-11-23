import java.util.Scanner;

public class Exercicio31 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int qtdNotaAlta = 0;
        int qtdReprovados = 0;
        double maiorNota = Double.MIN_VALUE;
        double menorNota = Double.MAX_VALUE;
        double somaNotas = 0;
        int totalAlunos = 0;

        while (true) {
            System.out.print("Digite a nota final do aluno (negativa para sair): ");
            double nota = sc.nextDouble();

            if (nota < 0) break;

            System.out.print("Digite o total de faltas do aluno: ");
            int faltas = sc.nextInt();

            if (nota >= 90) {
                qtdNotaAlta++;
            }
            if (nota < 70 || faltas >= 20) {
                qtdReprovados++;
            }
            if (nota > maiorNota) {
                maiorNota = nota;
            }
            if (nota < menorNota) {
                menorNota = nota;
            }

            somaNotas += nota;
            totalAlunos++;
        }

        if (totalAlunos > 0) {
            double media = somaNotas / totalAlunos;
            System.out.println("\nResultados:");
            System.out.println("Alunos com nota >= 90: " + qtdNotaAlta);
            System.out.println("Reprovados (nota < 70 ou faltas >= 20): " + qtdReprovados);
            System.out.println("Maior nota: " + maiorNota);
            System.out.println("Menor nota: " + menorNota);
            System.out.println("Média da turma: " + media);
        } else {
            System.out.println("Nenhum aluno informado.");
        }

        sc.close();
    }
}
