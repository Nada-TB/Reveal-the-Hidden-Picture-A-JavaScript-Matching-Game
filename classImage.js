'use strict';

class Card{

    constructor(source, name){
        this.source=source;
        this.name=name;
     
    }

    imageEvent(elt,table){
        let random=Math.floor(Math.random() * table.length);
        elt.setAttribute('src', table[random].src);
        elt.setAttribute('alt', table[random].name);
        elt.setAttribute('id', random);
        elt.setAttribute('class', 'selected');   
    }

    createImage(root, table){
        let image=document.createElement('img');
        image.setAttribute('src', this.source);
        image.setAttribute('alt', this.name);
        root.appendChild(image);
    }


}