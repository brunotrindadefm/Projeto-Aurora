package animal;

public class Leao extends Animal {
    public Leao() { 
        super("[leao]"); 
    }

    @Override //Anotação de sobrescrita/reescrita de método.
    public void emitirSom() {
        System.out.println("Som de leao."); 
}
}