import { defineStore } from "pinia";

export const useContadorStore = defineStore("contador",{
    state:() => {
        return {
            contador: 0
        }
    },
    actions: {
        incrementar(val=1){
            this.contador += val;
        },
        async esperarYSumar(){
            setTimeout(() => {
                this.contador++;
            }, 2000);
        },
    },
    getters:{
        dobleContador: (state) => state.contador*2,
    },
}

);