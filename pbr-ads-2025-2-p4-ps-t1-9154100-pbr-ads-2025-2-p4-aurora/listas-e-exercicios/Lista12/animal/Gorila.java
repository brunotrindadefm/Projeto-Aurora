package animal;

public class Gorila extends Animal { 
    public Gorila() { 
        super("[gorila]"); 
    }

    @Override //Anotação de sobrescrita/reescrita de método.
    public void emitirSom() {
        System.out.println("Som de gorila."); 
    }
}
