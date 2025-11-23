package pessoa;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class PessoaFisica extends Pessoa {
    private String cpf;

    public PessoaFisica(String nome, String endereco, String cpf) {
        super(nome, endereco);
        this.cpf = cpf;
    }
}
