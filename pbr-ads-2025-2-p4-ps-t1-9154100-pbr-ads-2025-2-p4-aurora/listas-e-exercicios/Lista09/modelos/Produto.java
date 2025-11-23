package modelos;

/**
 * Classe que representa um produto em estoque.
 */
public class Produto {
    private String nome;
    private double preco;
    private int quantidadeEstoque;

    /**
     * Construtor da classe Produto.
     * @param nome Nome do produto.
     * @param preco Preço do produto.
     * @param quantidadeEstoque Quantidade inicial em estoque.
     */
    public Produto(String nome, double preco, int quantidadeEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public double getPreco() { return preco; }
    public void setPreco(double preco) { this.preco = preco; }

    public int getQuantidadeEstoque() { return quantidadeEstoque; }
    public void setQuantidadeEstoque(int quantidadeEstoque) { this.quantidadeEstoque = quantidadeEstoque; }

    /**
     * Aumenta o estoque.
     * @param quantidade Quantidade a ser adicionada.
     */
    public void reporEstoque(int quantidade) {
        quantidadeEstoque += quantidade;
        System.out.println("Estoque aumentado em " + quantidade + " unidades.");
    }

    /**
     * Realiza uma venda, se houver estoque suficiente.
     * @param quantidade Quantidade a ser vendida.
     */
    public void venderProduto(int quantidade) {
        if (quantidade > quantidadeEstoque) {
            System.out.println("Erro: Estoque insuficiente para vender " + quantidade + " unidades.");
        } else {
            quantidadeEstoque -= quantidade;
            System.out.println("Venda de " + quantidade + " unidades realizada com sucesso.");
        }
    }

    /**
     * Exibe os dados do produto.
     */
    public void exibirProduto() {
        System.out.printf("Produto: %s%nPreço: R$ %.2f%nEstoque: %d unidades%n", nome, preco, quantidadeEstoque);
        System.out.println("----------------------------");
    }
}
