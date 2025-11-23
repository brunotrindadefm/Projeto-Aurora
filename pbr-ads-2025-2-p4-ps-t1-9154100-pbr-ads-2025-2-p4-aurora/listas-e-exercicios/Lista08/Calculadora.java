// Crie uma classe chamada Calculadora 
public class Calculadora {

    // Método somar(double a, double b) → retorna a soma [cite: 12]
    public double somar(double a, double b) {
        return a + b;
    }

    // Método subtrair(double a, double b) → retorna a subtração [cite: 13]
    public double subtrair(double a, double b) {
        return a - b;
    }

    // Método multiplicar(double a, double b) → retorna o produto [cite: 14]
    public double multiplicar(double a, double b) {
        return a * b;
    }

    // Método dividir(double a, double b) → retorna a divisão [cite: 15]
    public double dividir(double a, double b) {
        // Verifique se b é diferente de zero [cite: 15]
        if (b == 0) {
            System.out.println("Erro: Não é possível dividir por zero.");
            return 0; // Retorna 0 em caso de erro
        } else {
            return a / b;
        }
    }

    // Método potencia(double base, int expoente) → retorna a base elevada ao expoente [cite: 16]
    public double potencia(double base, int expoente) {
        return Math.pow(base, expoente);
    }
}