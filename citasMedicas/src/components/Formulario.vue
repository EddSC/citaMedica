<script setup>
import { useCitaMedica } from '@/stores/citaMedica'
import { onMounted, ref } from 'vue';

const citaMedica = useCitaMedica()
const usuario = ref({
            id: '',
            name: '',
            lastname:'',
            dni:'',
            gender: '',
            date: '',
            city: '',
            country: '',
            phone: '',
            status: '',
            type: {
                paciente: false,
                medico: false,
            }
        })
const procesarDato = () => {
    usuario.value.id = Date.now()
    citaMedica.setUsuarios(usuario.value)
    console.log(usuario.value)
}

onMounted(() => {
    citaMedica.cargarUsuarios()
})

</script>

<template>
    <div class="container">
        <h1 class="text-center text-danger">Formulario</h1>
        <form @submit.prevent="procesarDato">
            <div class="form-row">
                <div class="col">
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="First name"
                    v-model.trim="usuario.name"
                >
                </div>
                <div class="col">
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Last name"
                    v-model.trim="usuario.lastname"
                >
                </div>
            </div>
            <button class="btn btn-primary" type="submit"> submit </button>
        </form>
    </div>
</template>

<style lang="scss" scoped>

</style>