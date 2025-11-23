package Pessoa;

// Subclasse de Pessoa que representa uma pessoa jurídica (empresa)
public class PessoaJuridica extends Pessoa {
  private String cnpj; // CNPJ da empresa

  // Construtor que recebe nome e CNPJ
  public PessoaJuridica(String nome, String cnpj) {
    super(nome);
    this.cnpj = cnpj;
  }

  public String getCnpj() {
    return cnpj;
  }

  public void setCnpj(String cnpj) {
    this.cnpj = cnpj;
  }

  // Sobrescreve o método getIdentificacao()
  @Override
  public String getIdentificacao() {
    return "Pessoa Jurídica: " + getNome() + " | CNPJ: " + this.cnpj;
  }

  // Sobrecarga de método: adiciona o telefone como informação adicional
  public String getIdentificacao(String telefone) {
    return "Pessoa Jurídica: " + getNome() + " | CNPJ: " + this.cnpj + " | Telefone: " + telefone;
  }
}
