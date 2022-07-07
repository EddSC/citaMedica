<script setup>
import { useCitaMedica } from '@/stores/citaMedica'
import { onMounted, ref } from 'vue';

const citaMedica = useCitaMedica()
const alert = ref (false);
const eliminarPaciente = (id) => {
    citaMedica.deleteUsuario(id)
    alert.value = true
    setTimeout(() => {
        citaMedica.cargarUsuarios()
        alert.value = false
    },1200);
    console.log(id)
}

onMounted(() => {
    citaMedica.cargarUsuarios()
    // console.log(citaMedica.usuarios)
})

</script>

<template>
    <div class="container-lg">
        <div class="alert alert-danger my-3" role="alert" v-if="alert">
            Se elimino un paciente
        </div>
        <table class="table table-hover  table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Nombre y Apellido</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Email</th>
                    <th scope="col">Télefono</th>
                    <th></th>
                </tr>
            </thead>
            <tbody v-for="paciente in citaMedica.listaPaciente">
                <tr>
                    <th scope="row">{{paciente.name}} {{paciente.lastname}}</th>
                    <td>{{paciente.country}}</td>
                    <td>{{paciente.email}}</td>
                    <td>{{paciente.phone}}</td>
                    <td>
                        <button disabled
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

