package pessoa;

public class PessoaFisica extends Pessoa {
    private final String cpf;

    public PessoaFisica(String nome, String cpf) {
        super(nome);
        this.cpf = cpf;
    }

    @Override
    public String getIdentificacao() {
        return "Pessoa Física: " + getNome() + " | CPF: " + cpf;
    }
}