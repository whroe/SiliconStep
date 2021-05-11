export default {
    forName:function (){
        for (let index = 0; index < 10; index++) {
            postMessage(index)
        }
    }
}
    
