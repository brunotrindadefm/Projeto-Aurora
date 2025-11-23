package banco;

import java.util.Scanner;

/**
 * Classe principal para testar a classe ContaCorrente.
 */
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Informe o número da conta: ");
        int numero = sc.nextInt();

        System.out.print("Informe o número da agência: ");
        int agencia = sc.nextInt();

        ContaCorrente conta = new ContaCorrente(numero, agencia);

        System.out.print("Informe o valor para depósito: ");
        double valorDeposito = sc.nextDouble();
        conta.depositar(valorDeposito);
        conta.exibe();

        System.out.print("\nInforme o valor para saque: ");
        double valorSaque = sc.nextDouble();
        conta.sacar(valorSaque);
        conta.exibe();

        sc.close();
    }
}
