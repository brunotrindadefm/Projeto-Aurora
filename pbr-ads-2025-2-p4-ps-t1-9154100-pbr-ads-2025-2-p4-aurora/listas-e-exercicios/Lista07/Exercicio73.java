import java.util.Scanner;

public class Exercicio73 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[][] m1 = new int[2][2];
        int[][] m2 = new int[2][2];
        int[][] soma = new int[2][2];

        // leitura matriz 1
        System.out.println("Digite os elementos da primeira matriz 2x2:");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print("[" + i + "][" + j + "]: ");
                m1[i][j] = sc.nextInt();
            }
        }

        // leitura matriz 2
        System.out.println("\nDigite os elementos da segunda matriz 2x2:");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print("[" + i + "][" + j + "]: ");
                m2[i][j] = sc.nextInt();
            }
        }

        // soma
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                soma[i][j] = m1[i][j] + m2[i][j];
            }
        }

        // imprimir matriz resultante
        System.out.println("\nMatriz resultante:");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print(soma[i][j] + "\t");
            }
            System.out.println();
        }

        sc.close();
    }
}
