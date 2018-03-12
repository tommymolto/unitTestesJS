var validaEmail = function(){
    var email = '';
    var validaEmail = function(x){
        var usuario = x.substring(0, x.indexOf("@"));
        var dominio = x.substring(x.indexOf("@")+ 1, x.length);
        erro = {};
        tipoeErro ={ erro: erro, tipo: '', mensagem:''};
        if (usuario.length >=1) {
            return true;
            // esse tipo de coment cada o code coverage;
            /* esse
            tipo
            tambem
            */
        }
        if (dominio.length >=3) {
            return true;
            //this.erro=this.trataErro(true,'DOMINIO','Dominio pequeno');
            //return this.erro;
        }
        /* criem um caso para cada um abaixo */
            if ((usuario.search("@")==-1) && 
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) && 
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&      
            (dominio.indexOf(".") >=1)&& 
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
                return false;
        }
        else{
            this.erro = this.trataErro(false,'SUCESSO','EMAIL OK');
            return this.erro;
        } 
    };
    var trataErro = function(x,y,z){
        this.tipoeErro = {
                erro: x,
                tipoeErro: y,
                mensagem: z
            }
    };
    return {
        email: email,
        validaEmail: validaEmail,
        trataErro: trataErro
    }
}
module.exports = validaEmail;