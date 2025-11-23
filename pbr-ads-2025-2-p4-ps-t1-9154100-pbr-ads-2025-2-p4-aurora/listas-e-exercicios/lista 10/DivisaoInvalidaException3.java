// A exceção estende 'Exception' para ser uma checked exception
public class DivisaoInvalidaException3 extends Exception {

    private final int dividendo;
    private final int divisor;

    public DivisaoInvalidaException3(int dividendo, int divisor, String mensagem) {
        // Chama o construtor da superclasse (Exception) com a mensagem de erro
        super(mensagem); 
        this.dividendo = dividendo;
        this.divisor = divisor;
    }

    // Métodos de acesso para obter os valores que causaram a exceção
    public int getDividendo() {
        return dividendo;
    }

    public int getDivisor() {
        return divisor;
    }
}