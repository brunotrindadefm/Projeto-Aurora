import java.util.Scanner;

public class Exercicio2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Digite o salário atual do funcionário: ");
        double salario = input.nextDouble();

        double novoSalario = salario * 1.25;

        System.out.println("O novo salário com 25% de aumento é: " + novoSalario);

        input.close();
    }
}

