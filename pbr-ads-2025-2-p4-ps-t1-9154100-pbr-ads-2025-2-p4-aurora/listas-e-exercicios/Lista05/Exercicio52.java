import java.util.Scanner;

public class Exercicio52 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int idade, soma = 0, qtd = 0;

        System.out.println("Digite idades (valor negativo para encerrar):");

        for (;;) { // laço infinito com saída controlada
            idade = sc.nextInt();
            if (idade < 0) break;

            soma += idade;
            qtd++;
        }

        if (qtd > 0) {
            double media = (double) soma / qtd;
            System.out.println("Média das idades: " + Math.round(media));
        } else {
            System.out.println("Nenhuma idade válida foi informada.");
        }

        sc.close();
    }
}
