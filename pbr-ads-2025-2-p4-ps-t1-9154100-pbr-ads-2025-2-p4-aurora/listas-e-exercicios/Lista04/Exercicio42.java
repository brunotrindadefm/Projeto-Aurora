import java.util.Scanner;

public class Exercicio42 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double soma = 0, nota;
        double maior = Double.MIN_VALUE, menor = Double.MAX_VALUE;
        int qtd = 0;
        char opcao;

        do {
            do {
                System.out.print("Digite uma nota (0 a 10): ");
                nota = sc.nextDouble();
                if (nota < 0 || nota > 10) {
                    System.out.println("Nota inválida, tente novamente.");
                }
            } while (nota < 0 || nota > 10);

            soma += nota;
            qtd++;
            if (nota > maior) maior = nota;
            if (nota < menor) menor = nota;

            System.out.print("Deseja inserir outra nota? (s/n): ");
            opcao = sc.next().toLowerCase().charAt(0);

        } while (opcao == 's');

        if (qtd > 0) {
            double media = soma / qtd;
            System.out.println("\nMenor nota: " + menor);
            System.out.println("Média: " + media);
            System.out.println("Maior nota: " + maior);
        } else {
            System.out.println("Nenhuma nota inserida.");
        }

        sc.close();
    }
}
