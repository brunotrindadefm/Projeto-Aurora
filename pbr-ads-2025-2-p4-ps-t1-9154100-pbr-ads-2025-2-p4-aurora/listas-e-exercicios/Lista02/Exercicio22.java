import java.util.Scanner;

public class Exercicio22 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o peso (kg): ");
        double peso = sc.nextDouble();

        System.out.print("Digite a altura (m): ");
        double altura = sc.nextDouble();

        double imc = peso / (altura * altura);

        System.out.println("IMC = " + imc);

        if (imc < 20) {
            System.out.println("Situação: Abaixo do Peso");
        } else if (imc <= 25) {
            System.out.println("Situação: Normal");
        } else if (imc <= 30) {
            System.out.println("Situação: Sobrepeso");
        } else if (imc <= 40) {
            System.out.println("Situação: Obesidade");
        } else {
            System.out.println("Situação: Obesidade Mórbida");
        }

        sc.close();
    }
}
