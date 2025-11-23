package animal;

public class Urso extends Animal { 
    public Urso() { 
        super("[urso]"); 
    }

    @Override //Anotação de sobrescrita/reescrita de método. 
    public void emitirSom() { 
        super.emitirSom(); 
    }
}