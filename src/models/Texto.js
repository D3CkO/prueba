class Texto extends MultimediaElement{
    constructor(file,type = null){
        let element = document.createElement("iframe");
        element.controls = true;
        super(file,type,element);
    }

    save(){
        super.save("Text.php");
    }

    
    static select(){
        let tag = document.createElement("iframe");
        tag.controls = true;
        super.select("Texto.php",tag,"div");
    }

    loadFileContent(){
        return new Promise((resolve, reject) => {
            this._readFileAsDataURL((result)=>{
                this.DOMElement.src = `${result}`;
                resolve();
            });
          });
    }
    
}