import java.util.Scanner;

public class Exercicio61 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] vetor = new int[10];

        // leitura
        for (int i = 0; i < vetor.length; i++) {
            System.out.print("Digite o número " + (i + 1) + ": ");
            vetor[i] = sc.nextInt();
        }

        // a) imprimir vetor
        System.out.print("\nVetor: ");
        for (int num : vetor) {
            System.out.print(num + " ");
        }
        System.out.println();

        // b) soma dos pares
        int somaPares = 0;
        for (int num : vetor) {
            if (num % 2 == 0) somaPares += num;
        }
        System.out.println("Soma dos números pares: " + somaPares);

        // c) posições dos negativos
        System.out.print("Posições com números negativos: ");
        for (int i = 0; i < vetor.length; i++) {
            if (vetor[i] < 0) System.out.print(i + " ");
        }
        System.out.println();

        // d) menor e maior
        int menor = vetor[0], maior = vetor[0];
        for (int num : vetor) {
            if (num < menor) menor = num;
            if (num > maior) maior = num;
        }
        System.out.println("Menor número: " + menor);
        System.out.println("Maior número: " + maior);

        // e) elementos em posições ímpares
        System.out.print("Elementos em posições ímpares: ");
        for (int i = 1; i < vetor.length; i += 2) {
            System.out.print(vetor[i] + " ");
        }

        sc.close();
    }
}
