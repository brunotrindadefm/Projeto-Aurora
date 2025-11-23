package banco;

/**
 * Classe que representa uma conta corrente de um banco.
 * Permite realizar operações de saque, depósito e consulta de saldo.
 */
public class ContaCorrente {
    private int numero;
    private int agencia;
    private double saldo;

    /**
     * Construtor da classe ContaCorrente.
     * @param numero Número da conta.
     * @param agencia Número da agência.
     */
    public ContaCorrente(int numero, int agencia) {
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = 0.0;
    }

    /**
     * Realiza um saque, se houver saldo suficiente.
     * @param valor Valor a ser sacado.
     */
    public void sacar(double valor) {
        if (valor > saldo) {
            System.out.println("Erro: Saldo insuficiente para saque de R$ " + valor);
        } else {
            saldo -= valor;
            System.out.println("Saque de R$ " + valor + " realizado com sucesso.");
        }
    }

    /**
     * Realiza um depósito.
     * @param valor Valor a ser depositado.
     */
    public void depositar(double valor) {
        saldo += valor;
        System.out.println("Depósito de R$ " + valor + " realizado com sucesso.");
    }

    /**
     * Retorna o saldo atual.
     * @return Saldo da conta.
     */
    public double consultarSaldo() {
        return saldo;
    }

    /**
     * Exibe os dados da conta.
     */
    public void exibe() {
        System.out.printf("Agência: %d%nConta: %d%nSaldo: R$ %.2f%n", agencia, numero, saldo);
    }
}
