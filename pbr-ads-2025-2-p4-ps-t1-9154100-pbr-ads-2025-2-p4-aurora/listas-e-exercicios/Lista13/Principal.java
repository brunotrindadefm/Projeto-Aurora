import pessoa.*;
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Pessoa[] pessoas = new Pessoa[2];
        int count = 0;

        while (count < pessoas.length) {
            System.out.println("Cadastrar (1) Pessoa Física ou (2) Pessoa Jurídica?");
            int opcao = sc.nextInt();
            sc.nextLine();

            System.out.print("Nome: ");
            String nome = sc.nextLine();

            System.out.print("Endereço: ");
            String endereco = sc.nextLine();

            if (opcao == 1) {
                System.out.print("CPF: ");
                String cpf = sc.nextLine();
                pessoas[count] = new PessoaFisica(nome, endereco, cpf);
            } else if (opcao == 2) {
                System.out.print("CNPJ: ");
                String cnpj = sc.nextLine();
                pessoas[count] = new PessoaJuridica(nome, endereco, cnpj);
            } else {
                System.out.println("Opção inválida!");
                continue;
            }

            count++;
        }

        System.out.println("\n=== Lista de Pessoas ===");
        for (Pessoa p : pessoas) {
            System.out.println(p);
        }

        sc.close();
    }
}
