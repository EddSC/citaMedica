<script setup>
import { ref } from 'vue';
import MedicoForm from '../components/MedicoForm.vue';
import MedicoList from '../components/MedicoList.vue';

const formPaciente = ref(false);

const nuevoPaciente = () => {
    return formPaciente.value = !formPaciente.value;
}
</script>

<template>
    <div class="bg-primary my-2 p-2 container">
            <h3 class="text-center text-white">Medico</h3>
        </div>
        <div class="container my-3">
            <button class="btn btn-outline-primary" @click="nuevoPaciente"><i class="bi bi-person-plus"></i> NUEVO PACIENTE</button>
        </div>
    <div v-if="formPaciente">
        <MedicoForm/>
    </div>
    <div>
        <MedicoList/>
    </div>
</template>
