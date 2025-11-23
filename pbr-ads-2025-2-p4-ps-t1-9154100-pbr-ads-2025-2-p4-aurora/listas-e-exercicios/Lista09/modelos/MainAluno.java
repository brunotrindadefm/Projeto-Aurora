package modelos;

/**
 * Classe principal para testar a classe Aluno.
 */
public class MainAluno {
    public static void main(String[] args) {
        Aluno aluno1 = new Aluno("Brenda Rocha", 101, "Engenharia de Software");
        Aluno aluno2 = new Aluno("Carlos Silva", 102, "Ciência da Computação");

        aluno1.exibirDados();
        aluno2.exibirDados();
    }
}
