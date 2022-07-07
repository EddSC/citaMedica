<script setup>
import { useCitaMedica } from '@/stores/citaMedica'
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';

const citaMedica = useCitaMedica()

const buscarPaciente = ref('Todos los datos')
const alert = ref (false);
const estadoEdit = ref (true);
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

const cerrarForm = () => {
    estadoEdit.value = !estadoEdit.value
}

const editPacienteCita = (paciente) => {
    // console.log(paciente);
    citaPaciente.value = paciente
    console.log(citaPaciente.value);
    estadoEdit.value = !estadoEdit.value
    // citaMedica.updateCitaPaciente(citaPaciente)
}

const procesarDato = () => {
    citaMedica.updateCitaPaciente(citaPaciente.value)
    alert.value = true;
    setTimeout(() => {
        alert.value = false;
    },2000);

    citaPaciente.value = {
    id: '',
    asunto: '',
    paciente: '',
    medico: '',
    fecha: '',
    hora:'',
    nota: '',
    enfermedad:'',
    estado: '',
    pago: '',
    costo:0,
    };

    setTimeout(() => {
        estadoEdit.value = !estadoEdit.value
    },1000);
    
}

const buscarPacient = computed(() => {
    return citaMedica.buscarPaciente = buscarPaciente.value
})

const filtrarPaciente = computed(() => {
    return buscarPaciente.value === 'Todos los datos' ? false : true 
});

const eliminarPaciente = (id) => {
    citaMedica.deleteCitaPaciente(id)
    setTimeout(() => {
        citaMedica.cargarCitaPaciente()
    },1200);
    console.log(id)
}

onMounted(() => {
    citaMedica.cargarUsuarios()
    citaMedica.cargarCitaPaciente()
})
</script>

<template>
    <div class="container" v-if="!estadoEdit" >
        <div class="clearfix">
            <button class="btn btn-danger my-2 float-right" @click="cerrarForm()"><i class="bi bi-backspace-fill"></i> Regresar</button>
        </div>
        <div class="alert alert-success my-3" role="alert" v-if="alert">
            Se registraron los cambios
        </div>
        <div class="card">
            <div class="card-header bg-primary text-white">
                Datos del Paciente
            </div>
            <div class="card-body bg-light text-dark">
                <blockquote class="blockquote mb-0">
                <p> <span class="font-weight-bold">Paciente:</span> {{citaPaciente.paciente}} </p>
                <p> <span class="font-weight-bold">Medico:</span> {{citaPaciente.medico}} </p>
                <div class="row">
                    <div class="col">
                        <p> <span class="font-weight-bold">Fecha:</span> {{citaPaciente.fecha}} </p>
                    </div>
                    <div class="col">
                        <p> <span class="font-weight-bold">Hora:</span> {{citaPaciente.hora}} </p>
                    </div>
                </div>
                <p> <span class="font-weight-bold">Asunto:</span> {{citaPaciente.asunto}} </p>
                <p> <span class="font-weight-bold">Nota:</span> {{citaPaciente.nota}} </p>
                <p> <span class="font-weight-bold">Enfermedad:</span> {{citaPaciente.enfermedad}} </p>
                <footer class="blockquote-footer">Detalle de cita del <cite title="Source Title">Paciente</cite></footer>
                </blockquote>
            </div>
        </div>



        <form @submit.prevent="procesarDato">
            <div class="form-row mt-5">
                <div class="form-group col">
                    <label for="paciente">Estado</label>
                    <select 
                        class="form-control"
                        id="paciente"
                        v-model="citaPaciente.estado"
                    >
                    <option disabled selected :value="citaPaciente.estado">Estado - {{citaPaciente.estado}}</option>
                    <option   value="Pendiente">Pendiente</option>
                    <option   value="Finalizado">Finalizado</option>
                    </select>
                </div>
                <div class="form-group col">
                    <label for="medico">Pago</label>
                    <select 
                        class="form-control" 
                        id="medico"
                        v-model="citaPaciente.pago"
                    >   
                        <option disabled selected :value="citaPaciente.pago">Estado - {{citaPaciente.pago}}</option>
                        <option selected value="Pendiente">Pendiente</option>
                        <option value="Finalizado">Finalizado</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="col">

                </div>
                <div class="col">
                <label for="costo" class="col-form-label">Costo</label>
                <input 
                    type="number" 
                    id="costo"
                    class="form-control" 
                    placeholder="S/ 0.00"
                    v-model="citaPaciente.costo"
                >
                </div>
            </div>
            
            <div class="form-group my-3">
                <button class="btn btn-primary form-control" type="submit"> submit </button>
            </div>
        </form>
    </div>





    <div class="container-lg" v-if="estadoEdit">
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
                    <th scope="col"></th>
                    <!-- <th></th> -->
                </tr>
            </thead>
            <tbody v-for="paciente in citaMedica.listaCitaPaciente" v-if="filtrarPaciente">
                <tr>
                    <th scope="row">{{paciente.paciente}} </th>
                    <td>{{paciente.medico}}</td>
                    <td>{{paciente.asunto}}</td>
                    <td>{{paciente.fecha}}</td>
                    <td>
                        <button
                            @click="editPacienteCita(paciente)" 
                            class="btn btn-primary">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                            @click="eliminarPaciente(paciente.id)"  
                            class="btn btn-danger mx-2">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </td>
                    
                </tr>
            </tbody>
            <tbody v-for="paciente in citaMedica.citaPaciente" v-if="!filtrarPaciente">
                <tr>
                    <th scope="row">{{paciente.paciente}} </th>
                    <td>{{paciente.medico}}</td>
                    <td>{{paciente.asunto}}</td>
                    <td>{{paciente.fecha}}</td>
                    <td>
                        <button
                            @click="editPacienteCita(paciente)" 
                            class="btn btn-primary">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                            @click="eliminarPaciente(paciente.id)"  
                            class="btn btn-danger mx-2">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </td>
                    
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>

</style>