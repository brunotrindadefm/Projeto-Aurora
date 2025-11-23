// Crie uma classe Main com o método main para instanciar objetos... e testar 
public class MainFuncionario {

    public static void main(String[] args) {
        // Instanciando um objeto Funcionario
        Funcionario func1 = new Funcionario("Carlos Silva", "Analista de Suporte", 3200.00);

        // Testando exibirInformacoes() [cite: 22]
        System.out.println("--- Estado Inicial ---");
        func1.exibirInformacoes();

        // Testando reajustarSalario() [cite: 24]
        System.out.println("\n--- Aplicando Reajuste de 15% ---");
        func1.reajustarSalario(15);
        func1.exibirInformacoes();
        
        // Testando promover() [cite: 23]
        System.out.println("\n--- Aplicando Promoção ---");
        func1.promover("Analista Sênior", 1300.00);
        func1.exibirInformacoes();
        
        // Testando demitir() [cite: 25]
        System.out.println("\n--- Aplicando Demissão ---");
        func1.demitir();
        func1.exibirInformacoes();
    }
}