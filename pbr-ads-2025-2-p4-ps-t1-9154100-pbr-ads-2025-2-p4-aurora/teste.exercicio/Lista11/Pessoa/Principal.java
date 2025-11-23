package Pessoa;

import pessoa.*;

public class Principal {
    public static void main(String[] args) {
        Pessoa pessoa;

        // Instancia uma Pessoa Física
        pessoa = new PessoaFisica("Ana", "123.456.789-00");
        System.out.println(pessoa.getIdentificacao());

        // Instancia uma Pessoa Jurídica
        pessoa = new PessoaJuridica("Escola", "03.278.251/0001-32");
        System.out.println(pessoa.getIdentificacao());

        // Instancia uma Pessoa Estrangeira (nova classe criada)
        pessoa = new PessoaEstrangeira("John Doe", "X1234567");
        System.out.println(pessoa.getIdentificacao());
    }
}
