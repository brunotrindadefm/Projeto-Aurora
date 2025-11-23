import java.util.Scanner;

public class Exercicio43 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char jogarNovamente;

        do {
            int numeroSecreto = (int) (Math.random() * 100) + 1;
            int palpite;

            System.out.println("\n🎮 Jogo do Número Secreto! (1 a 100)");
            System.out.println("Digite 0 se quiser desistir.");

            do {
                System.out.print("Seu palpite: ");
                palpite = sc.nextInt();

                if (palpite == 0) {
                    System.out.println("Você desistiu! O número era: " + numeroSecreto);
                    break;
                } else if (palpite > numeroSecreto) {
                    System.out.println("O número secreto é MENOR.");
                } else if (palpite < numeroSecreto) {
                    System.out.println("O número secreto é MAIOR.");
                } else {
                    System.out.println("🎉 Parabéns! Você acertou o número!");
                }

            } while (palpite != numeroSecreto && palpite != 0);

            System.out.print("Quer jogar novamente? (s/n): ");
            jogarNovamente = sc.next().toLowerCase().charAt(0);

        } while (jogarNovamente == 's');

        System.out.println("👋 Obrigado por jogar!");
        sc.close();
    }
}
