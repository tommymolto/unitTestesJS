var validaEmail = function(){
    var validaEmail = function(x){
        var usuario = x.substring(0, x.indexOf("@"));
        var dominio = x.substring(x.indexOf("@")+ 1, x.length);
       
       
        /* criem um caso para cada um abaixo */
            if (
                this.tamanhoUsuario(usuario) &&
                this.tamanhoDominio(dominio) &&
                (usuario.search("@")==-1) && 
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) && 
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&      
            (dominio.indexOf(".") >=1)&& 
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
                return true;
        }
        else{
            return false;
        } 
    };
    var tamanhoUsuario = function(x){
         if (x.length >=1) {
            return true;
        }
        return false;
    };
    var tamanhoDominio = function(dominio){
         if (dominio.length >=3) {
            return true;
        }
        return false;
    };
    
    return {
        validaEmail: validaEmail,
        tamanhoDominio: tamanhoDominio,
        tamanhoUsuario: tamanhoUsuario
    }
}
module.exports = validaEmail;