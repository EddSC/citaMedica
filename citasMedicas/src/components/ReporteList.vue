<script setup>
import { useCitaMedica } from '@/stores/citaMedica'
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';

const citaMedica = useCitaMedica()

const buscarPaciente = ref('Todos los datos')

const buscarPacient = computed(() => {
    return citaMedica.buscarPaciente = buscarPaciente.value
})

const filtrarPaciente = computed(() => {
    return buscarPaciente.value === 'Todos los datos' ? false : true 
});

onMounted(() => {
    citaMedica.cargarUsuarios()
    citaMedica.cargarCitaPaciente()
})
</script>

<template>
    <div class="container-lg">
        <form>
            <div class="form-group col-4">
                <label for="paciente">Buscar Paciente</label>
                <select 
                    class="form-control"
                    id="paciente"
                    autocomplete="on"
                    v-model="buscarPaciente"
                >
                <option value="Todos los datos">Todos los datos</option>
                <option v-for="paciente in citaMedica.listaPaciente"  v-bind:value="paciente.name +' '+ paciente.lastname">{{paciente.name}} {{paciente.lastname}}</option>
                </select>
            </div>
            <div>
                <h1>{{buscarPacient}}</h1>
            </div>
        </form>
        <table class="table table-hover  table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Paciente</th>
                    <th scope="col">Medico</th>
                    <th scope="col">Asunto</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Pago</th>
                    <th scope="col">Costo</th>
                    <!-- <th></th> -->
                </tr>
            </thead>
            <tbody v-for="paciente in citaMedica.listaCitaPaciente" v-if="filtrarPaciente">
                <tr>
                    <th scope="row">{{paciente.paciente}} </th>
                    <td>{{paciente.medico}}</td>
                    <td>{{paciente.asunto}}</td>
                    <td>{{paciente.fecha}}</td>
                    <td>{{paciente.estado}}</td>
                    <td>{{paciente.pago}}</td>
                    <td>S/ {{paciente.costo.toFixed(2)}}</td>
                    
                </tr>
            </tbody>
            <tbody v-for="paciente in citaMedica.citaPaciente" v-if="!filtrarPaciente">
                <tr>
                    <th scope="row">{{paciente.paciente}} </th>
                    <td>{{paciente.medico}}</td>
                    <td>{{paciente.asunto}}</td>
                    <td>{{paciente.fecha}}</td>
                    <td>{{paciente.estado}}</td>
                    <td>{{paciente.pago}}</td>
                    <td>S/ {{paciente.costo.toFixed(2)}}</td>
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>