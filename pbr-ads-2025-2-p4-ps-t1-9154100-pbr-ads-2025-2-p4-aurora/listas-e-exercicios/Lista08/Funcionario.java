public class Funcionario {
    
    // Atributos privados
    private String nome;
    private String cargo;
    private double salario;
    
    // Construtor para Inicializar o objeto
    public Funcionario(String nome, String cargo, double salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    // Método exibirInformacoes() → imprime os dados do funcionário
    public void exibirInformacoes() {
        System.out.println("--- Informações do Funcionário ---");
        System.out.println("Nome: " + this.nome);
        System.out.println("Cargo: " + this.cargo);
        System.out.printf("Salário: R$ %.2f\n", this.salario);
        System.out.println("---------------------------------");
    }

    // Método promover(String novoCargo, double aumento) → altera o cargo e aumenta o salário
    public void promover(String novoCargo, double aumento) {
        this.cargo = novoCargo;
        this.salario += aumento;
        System.out.println("PROMOÇÃO: " + this.nome + " foi promovido para " + novoCargo + "!");
    }

    // Método reajustarSalario (double percentual) → aplica um reajuste percentual
    public void reajustarSalario(double percentual) {
        double reajuste = this.salario * (percentual / 100.0);
        this.salario += reajuste;
        System.out.println("REAJUSTE: Salário de " + this.nome + " aumentado em " + percentual + "%.");
    }
    
    // Método demitir() → zera o salário e altera o cargo para "Desligado"
    public void demitir() {
        this.salario = 0.0;
        this.cargo = "Desligado";
        System.out.println("DEMISSÃO: " + this.nome + " foi desligado(a) da empresa.");
    }
}