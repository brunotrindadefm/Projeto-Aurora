package modelos;

/**
 * Classe principal para testar a classe Produto.
 */
public class MainProduto {
    public static void main(String[] args) {
        Produto produto = new Produto("Notebook Dell", 4500.00, 10);

        produto.exibirProduto();

        produto.reporEstoque(5);
        produto.exibirProduto();

        produto.venderProduto(8);
        produto.exibirProduto();
    }
}
