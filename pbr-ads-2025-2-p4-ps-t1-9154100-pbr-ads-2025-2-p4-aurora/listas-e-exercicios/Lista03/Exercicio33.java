import java.util.Scanner;

public class Exercicio33 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] canais = {2, 4, 5, 7, 12};
        int[] audiencia = new int[canais.length];
        int totalPessoas = 0;
        while (true) {
            System.out.print("Digite o número do canal (0 para encerrar): ");
            int canal = sc.nextInt();

            if (canal == 0) break;

            System.out.print("Digite o número de pessoas assistindo: ");
            int pessoas = sc.nextInt();

            for (int i = 0; i < canais.length; i++) {
                if (canais[i] == canal) {
                    audiencia[i] += pessoas;
                    totalPessoas += pessoas;
                }
            }
        }

        System.out.println("\nPercentual de audiência:");
        for (int i = 0; i < canais.length; i++) {
            if (totalPessoas > 0) {
                double percentual = (audiencia[i] * 100.0) / totalPessoas;
                System.out.printf("Canal %d → %.2f%%\n", canais[i], percentual);
            } else {
                System.out.println("Nenhuma audiência registrada.");
                break;
            }
        }

        sc.close();
    }
}
