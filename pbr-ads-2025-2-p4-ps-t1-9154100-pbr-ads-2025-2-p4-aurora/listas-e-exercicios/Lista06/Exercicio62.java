import java.util.Scanner;

public class Exercicio62 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] v1 = new int[10];
        int[] v2 = new int[10];
        int[] soma = new int[10];

        // leitura do vetor 1
        for (int i = 0; i < v1.length; i++) {
            System.out.print("Digite o elemento " + (i + 1) + " do vetor 1: ");
            v1[i] = sc.nextInt();
        }

        // leitura do vetor 2
        for (int i = 0; i < v2.length; i++) {
            System.out.print("Digite o elemento " + (i + 1) + " do vetor 2: ");
            v2[i] = sc.nextInt();
        }

        // soma
        for (int i = 0; i < soma.length; i++) {
            soma[i] = v1[i] + v2[i];
        }

        // imprimir vetores
        System.out.print("\nVetor 1: ");
        for (int num : v1) System.out.print(num + " ");

        System.out.print("\nVetor 2: ");
        for (int num : v2) System.out.print(num + " ");

        System.out.print("\nVetor Soma: ");
        for (int num : soma) System.out.print(num + " ");

        sc.close();
    }
}
