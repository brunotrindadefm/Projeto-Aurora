import java.util.Scanner;

public class Exercicio23 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o código do produto (1 a 5): ");
        int codigo = sc.nextInt();

        switch (codigo) {
            case 1:
                System.out.println("Produto: Sapato - R$ 99,99");
                break;
            case 2:
                System.out.println("Produto: Bolsa - R$ 103,89");
                break;
            case 3:
                System.out.println("Produto: Camisa - R$ 49,98");
                break;
            case 4:
                System.out.println("Produto: Calça - R$ 89,72");
                break;
            case 5:
                System.out.println("Produto: Blusa - R$ 97,35");
                break;
            default:
                System.out.println("Código inválido.");
        }

        sc.close();
    }
}
