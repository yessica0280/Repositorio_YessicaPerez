function sol(){
    let color_fondo_actual = getComputedStyle(document.documentElement).getPropertyValue("--fondo-color");
    color_fondo_actual = color_fondo_actual === "black"?"#0e4089":"black";
    document.documentElement.style.setProperty("--fondo-color", color_fondo_actual);

    let color_fondo1= getComputedStyle(document.documentElement).getPropertyValue("--fondo-color1");
    color_fondo1= color_fondo1 === "#9acef4"?"#598aaa":"#9acef4";
    document.documentElement.style.setProperty("--fondo-color1", color_fondo1);

    let deg1= getComputedStyle(document.documentElement).getPropertyValue("--deg-uno");
    deg1= deg1 === "#E1BEE7"?"#586982":"#E1BEE7";
    document.documentElement.style.setProperty("--deg-uno", deg1);

    let letra= getComputedStyle(document.documentElement).getPropertyValue("--letra-uno");
    letra= letra === "#3F51B5"?"#00255e":"#3F51B5";
    document.documentElement.style.setProperty("--letra-uno", letra);

    let letra1= getComputedStyle(document.documentElement).getPropertyValue("--letra-unoo");
    letra1= letra1 === "#2789d4"?"#1b3969":"#2789d4";
    document.documentElement.style.setProperty("--letra-unoo", letra1);

    let letra2= getComputedStyle(document.documentElement).getPropertyValue("--letra-dos");
    letra2= letra2 === "#3F51B5"?"black":"#3F51B5";
    document.documentElement.style.setProperty("--letra-dos", letra2);
}

