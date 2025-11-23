package animal;

public class Elefante extends Animal { 
    public Elefante() { 
        super("[elefante]"); 
    }

    @Override //Anotação de sobrescrita/reescrita de método.
    public void emitirSom() {
        System.out.println("Som de elefante."); 
}
}