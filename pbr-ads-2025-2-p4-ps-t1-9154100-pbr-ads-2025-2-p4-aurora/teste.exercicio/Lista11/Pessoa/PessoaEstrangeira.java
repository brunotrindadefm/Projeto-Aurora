package pessoa;

public class PessoaEstrangeira extends Pessoa {
    private final String passaporte;

    public PessoaEstrangeira(String nome, String passaporte) {
        super(nome);
        this.passaporte = passaporte;
    }

    @Override
    public String getIdentificacao() {
                return "Pessoa Estrangeira: " + getNome() + " | Passaporte: " + passaporte;
    }
}
