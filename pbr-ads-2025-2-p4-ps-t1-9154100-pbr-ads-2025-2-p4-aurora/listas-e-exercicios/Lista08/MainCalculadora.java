public class MainCalculadora {

    public static void main(String[] args) {
        Calculadora calc = new Calculadora();
        
        double a = 10;
        double b = 2;
        int expo = 3;

        System.out.println("--- Testando a Calculadora ---");
        System.out.println(a + " + " + b + " = " + calc.somar(a, b));
        System.out.println(a + " - " + b + " = " + calc.subtrair(a, b));
        System.out.println(a + " * " + b + " = " + calc.multiplicar(a, b));
        System.out.println(a + " / " + b + " = " + calc.dividir(a, b));
        System.out.println(a + " ^ " + expo + " = " + calc.potencia(a, expo));
        
        System.out.println("\n--- Teste da Divisão por Zero ---");
        System.out.println(a + " / 0 = " + calc.dividir(a, 0));
    }
}