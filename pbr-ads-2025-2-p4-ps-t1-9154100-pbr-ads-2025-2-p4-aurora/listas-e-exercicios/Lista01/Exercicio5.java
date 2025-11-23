import java.util.Scanner; // tem que ser a primeira linha

public class Exercicio5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Entrada de dados
        System.out.print("Digite o valor do salário mínimo: ");
        double salarioMinimo = scanner.nextDouble();

        System.out.print("Digite o salário do funcionário: ");
        double salarioFuncionario = scanner.nextDouble();

        // Cálculo
        double quantidade = salarioFuncionario / salarioMinimo;

        // Saída
        System.out.println("O funcionário recebe " + quantidade + " salários mínimos.");

        scanner.close();
    }
}
