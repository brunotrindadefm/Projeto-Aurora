// public class Divisor2 {

//     /**
//      * Efetua a divisão entre dois números inteiros.
//      * Repassa a exceção ArithmeticException se o divisor for zero OU se o dividendo for negativo.
//      * * @param dividendo O número a ser dividido.
//      * @param divisor O número que divide.
//      * @return O resultado inteiro da divisão.
//      * @throws ArithmeticException Se o divisor for 0 ou se o dividendo for menor que 0.
//      */
//     public int efetuarDivisao(int dividendo, int divisor) throws ArithmeticException {
        
//         // b. Condição de exceção 1: Divisor igual a zero
//         if (divisor == 0) {
//             // Lança a exceção com uma mensagem específica para divisão por zero
//             throw new ArithmeticException("O divisor não pode ser zero.");
//         }
        
//         // b. Condição de exceção 2: Dividendo for menor que 0
//         if (dividendo < 0) {
//             // Lança a exceção com uma mensagem específica para dividendo negativo
//             throw new ArithmeticException("O dividendo não pode ser menor que zero nesta operação.");
//         }

//         // Se nenhuma exceção for lançada, a divisão é efetuada
//         return dividendo / divisor;
//     }
// }