public class Divisor3 {

    public int efetuarDivisao(int dividendo, int divisor) throws DivisaoInvalidaException3 {
        
        // Condição 1: Divisor igual a zero
        if (divisor == 0) {
            String mensagem = "Erro: Divisão por zero não permitida.";
            // Lança a exceção personalizada, passando os valores e a mensagem
            throw new DivisaoInvalidaException3(dividendo, divisor, mensagem);
        }
        
        // Condição 2: Dividendo for menor que 0
        if (dividendo < 0) {
            String mensagem = "Erro: O dividendo não pode ser um valor negativo nesta operação.";
            // Lança a exceção personalizada, passando os valores e a mensagem
            throw new DivisaoInvalidaException3(dividendo, divisor, mensagem);
        }

        // Se nenhuma exceção for lançada, a divisão é efetuada
        return dividendo / divisor;
    }
}