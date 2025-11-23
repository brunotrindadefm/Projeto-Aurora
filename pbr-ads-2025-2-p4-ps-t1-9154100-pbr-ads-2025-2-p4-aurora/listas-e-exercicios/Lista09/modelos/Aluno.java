package modelos;

/**
 * Classe que representa um aluno com nome, matrícula e curso.
 */
public class Aluno {
    private String nome;
    private int matricula;
    private String curso;

    /**
     * Construtor da classe Aluno.
     * @param nome Nome do aluno.
     * @param matricula Número de matrícula do aluno.
     * @param curso Curso do aluno.
     */
    public Aluno(String nome, int matricula, String curso) {
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
    }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public int getMatricula() { return matricula; }
    public void setMatricula(int matricula) { this.matricula = matricula; }

    public String getCurso() { return curso; }
    public void setCurso(String curso) { this.curso = curso; }

    /**
     * Exibe os dados do aluno.
     */
    public void exibirDados() {
        System.out.println("Nome: " + nome);
        System.out.println("Matrícula: " + matricula);
        System.out.println("Curso: " + curso);
        System.out.println("-------------------------");
    }
}
