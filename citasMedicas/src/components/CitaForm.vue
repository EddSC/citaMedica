<script setup>
import { onMounted, ref } from 'vue';
import { useCitaMedica } from '@/stores/citaMedica'
const citaMedica = useCitaMedica()

const alert = ref (false);

const citaPaciente = ref ({
    id: '',
    asunto: '',
    paciente: '',
    medico: '',
    fecha: '',
    hora:'',
    nota: '',
    enfermedad:'',
    estado: 'Pendiente',
    pago: 'Pendiente',
    costo:0.00,
});

const procesarDato = () => {
    citaPaciente.value.id = Date.now();
    alert.value = true;
    citaMedica.setCitaPaciente(citaPaciente.value)
    // console.log(citaPaciente.value)
    // console.log(id.value)
    setTimeout(() => {
        alert.value = false;
    },3000);

    citaPaciente.value = {
    id: '',
    asunto: '',
    paciente: '',
    medico: '',
    fecha: '',
    hora:'',
    nota: '',
    enfermedad:'',
    estado: 'Pendiente',
    pago: 'Pendiente',
    costo:0.00,
}
}

onMounted(() => {
    citaMedica.cargarUsuarios()
})
</script>

<template>
    <div class="container">
        <div class="alert alert-success my-3" role="alert" v-if="alert">
            Se Registro Cita
        </div>
        <form @submit.prevent="procesarDato">
            <div class="form-group">
                <label for="inputAddress">Asunto</label>
                <textarea 
                    type="text" 
                    class="form-control" 
                    id="inputAddress" 
                    placeholder="Asunto"
                    v-model.trim="citaPaciente.asunto"
                ></textarea>
            </div>
            <div class="form-group">
                <label for="paciente">Paciente</label>
                <select 
                    class="form-control"
                    id="paciente"
                    v-model="citaPaciente.paciente"
                >
                <option disabled selected>Selecione un Paciente</option>
                <option v-for="paciente in citaMedica.listaPaciente"  v-bind:value="paciente.name +' '+ paciente.lastname">{{paciente.name}} {{paciente.lastname}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="medico">Medico</label>
                <select 
                    class="form-control" 
                    id="medico"
                    v-model="citaPaciente.medico"
                >
                    <option disabled selected>Selecione un Medico</option>
                    <option v-for="paciente in citaMedica.listaMedico" v-bind:value="paciente.name +' '+ paciente.lastname">{{paciente.name}} {{paciente.lastname}}</option>
                </select>
            </div>
            <div class="form-row">
                <div class="col">
                <label for="nombre" class="col-form-label">Fecha</label>
                <input 
                    type="date"
                    id="nombre" 
                    class="form-control" 
                    placeholder="First name"
                    v-model="citaPaciente.fecha"
                >
                </div>
                <div class="col">
                <label for="apellido" class="col-form-label">Hora</label>
                <input 
                    type="time" 
                    id="apellido"
                    class="form-control" 
                    placeholder="Last name"
                    v-model="citaPaciente.hora"
                >
                </div>
            </div>
            <div class="form-group">
                <label for="nota">Nota</label>
                <textarea 
                    type="text" 
                    class="form-control" 
                    id="nota" 
                    placeholder="Asunto"
                    v-model.trim="citaPaciente.nota"
                ></textarea>
            </div>
            <div class="form-group">
                <label for="enfermedad">Enfermedad</label>
                <textarea 
                    type="text" 
                    class="form-control" 
                    id="enfermedad" 
                    placeholder="Asunto"
                    v-model.trim="citaPaciente.enfermedad"
                ></textarea>
            </div>
            
            <div class="form-group my-3">
                <button class="btn btn-primary form-control" type="submit"> submit </button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>

</style>