import java.util.Scanner;

public class Exercicio71 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[][] matriz = new int[5][5];

        // leitura
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.print("Digite o elemento [" + i + "][" + j + "]: ");
                matriz[i][j] = sc.nextInt();
            }
        }

        // a) imprimir matriz
        System.out.println("\nMatriz informada:");
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.print(matriz[i][j] + "\t");
            }
            System.out.println();
        }

        // b) imprimir elementos linha par / coluna ímpar
        System.out.println("\nElementos em posições (linha par, coluna ímpar):");
        for (int i = 0; i < 5; i += 2) {
            for (int j = 1; j < 5; j += 2) {
                System.out.print(matriz[i][j] + " ");
            }
        }

        sc.close();
    }
}
