const frasespro = [
    
        "La vida es una obra teatral que no importa cuánto haya durado, sino lo bien que haya sido representada (Séneca)."
    ,
    
        "Elige un trabajo que ames, y no tendrás que trabajar un solo día de tu vida (Confucio)."
    ,
    
        "Nuestra mayor gloria no es no caer nunca, sino levantarnos cada vez que caemos (Confucio)."
    ,
    
        "No hagas a los otros lo que no te gustaría que te hicieran a ti (Confucio)."
    ,
    
        "Si das pescado a un hombre hambriento lo nutrirás durante una jornada. Si le enseñas a pescar, le nutrirás toda su vida (Lao-Tsé)."
    ,
    
        "La victoria más difícil es la victoria sobre uno mismo (Aristóteles)."
    ,
    
        "Es sencillo hacer que las cosas sean complicadas, pero es difícil hacer que sean sencillas (Friedrich Nietzsche)."
    ,
    
        "La peor lucha es la que no se hace (Karl Marx)."
    ,
    
        "La felicidad no brota de la razón, sino de la imaginación (Immanuel Kant)."
    ,
    
        "La experiencia no es lo que te ocurre, es lo que haces con lo que te ocurre (Aldous Huxley)."
    
];

function generaFrase() {
 
    const frases = Math.floor(Math.random() * frasespro.length);
    const fraseGenerada = <p>${frasespro.frases}</p>
    return fraseGenerada;
}

console.log(generaFrase()); 

function generaFrase(){
    document.getElementById('fraseGenerada').innerHTML = generaFrase;
}

generaFrase();
