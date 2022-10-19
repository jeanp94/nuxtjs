<template>
    <div class="flex flex-column h-50">
        <div class="basis-2/4">
            <img src="/img/imagen.png" alt="img de HP imprime facil" class="w-full h-full">
        </div>
        <div class="basis-2/4 background__terc">
            <div class="background__secundary">
                <h2 class="mx-8 py-2">Conoce todos los puntos participantes a nivel nacional:</h2>
            </div>
               
             <ul class="background__terc square px-14" id="data" v-for="(result, index) in {data}" :key="index"> 
               <li class="py-2 ss" v-for="(r,index) in result" :key="index" v-show="r.ciudad==='Lima'">
                     {{r.surcursal}} <br/>
                     {{r.direccion }} <br/>
                     Ciudad: {{r.ciudad}} - Distrito: {{r.distrito}}
               </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const datas = await useFetch('https://imprimefacil.pe/file/js/data.json');
const {data} = datas;
</script>