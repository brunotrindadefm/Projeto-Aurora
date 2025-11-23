import java.util.Scanner;

public class Exercicio63 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] vetor = new int[10];

        // leitura
        for (int i = 0; i < vetor.length; i++) {
            System.out.print("Digite o número " + (i + 1) + ": ");
            vetor[i] = sc.nextInt();
        }

        int somaPrimeira = 0, somaSegunda = 0;

        // primeira metade
        for (int i = 0; i < 5; i++) {
            somaPrimeira += vetor[i];
        }

        // segunda metade
        for (int i = 5; i < 10; i++) {
            somaSegunda += vetor[i];
        }

        int diferenca = somaPrimeira - somaSegunda;

        System.out.println("\nSoma da primeira metade: " + somaPrimeira);
        System.out.println("Soma da segunda metade: " + somaSegunda);
        System.out.println("Diferença: " + diferenca);

        sc.close();
    }
}
