<script setup>
import { useCitaMedica } from '@/stores/citaMedica'
import { onMounted, ref } from 'vue';

const citaMedica = useCitaMedica()
const alert = ref(false);
const usuario = ref({
            id: '',
            name: '',
            lastname:'',
            dni:'',
            gender: '',
            date: '',
            city: '',
            country: '',
            email:'',
            phone: '',
            status: '',
            type: '',
            citaMedica:[],
        })
const procesarDato = () => {
    usuario.value.id = Date.now();
    usuario.value.type = 'Medico';
    citaMedica.setUsuarios(usuario.value)
    console.log(usuario.value)
    alert.value = true;
    
    setTimeout(() => {
        alert.value = false;
    },3000);

    usuario.value = {
            id: '',
            name: '',
            lastname:'',
            dni:'',
            gender: '',
            date: '',
            city: '',
            country: '',
            email:'',
            phone: '',
            status: '',
            type: '',
            citaMedica:[],
        }
}

</script>

<template>
    <div class="container">
        <div class="alert alert-success my-3" role="alert" v-if="alert">
            Se Guardo Medico
        </div>
        <form @submit.prevent="procesarDato">
            <div class="form-row">
                <div class="col">
                <label for="nombre" class="col-form-label">Nombres</label>
                <input 
                    type="text"
                    id="nombre" 
                    class="form-control" 
                    placeholder="First name"
                    v-model.trim="usuario.name"
                >
                </div>
                <div class="col">
                <label for="apellido" class="col-form-label">Apellidos</label>
                <input 
                    type="text" 
                    id="apellido"
                    class="form-control" 
                    placeholder="Last name"
                    v-model.trim="usuario.lastname"
                >
                </div>
            </div>
            <fieldset class="form-group row my-2">
            <legend class="col-form-label col-sm-2 float-sm-left pt-0">Genero</legend>
            <div class="form-check form-check-inline ">
                <input 
                    class="form-check-input" 
                    type="radio" 
                    name="inlineRadioOptions" 
                    id="inlineRadio1" 
                    value="Hombre"
                    v-model="usuario.gender"
                >
                <label class="form-check-label" for="inlineRadio1">Hombre</label>
            </div>
            <div class="form-check form-check-inline">
                <input 
                    class="form-check-input" 
                    type="radio" 
                    name="inlineRadioOptions" 
                    id="inlineRadio2" 
                    value="Mujer"
                    v-model="usuario.gender"
                >
                <label class="form-check-label" for="inlineRadio2">Mujer</label>
            </div>
            </fieldset>
            <div class="form-row">
                <div class="col">
                <label for="fechaNacimiento" class="col-form-label">Fecha de Nacimiento</label>
                <input 
                    type="date"
                    id="fechaNacimiento" 
                    class="form-control" 
                    placeholder="First name"
                    v-model.trim="usuario.date"
                >
                </div>
                <div class="col">
                <label for="dni" class="col-form-label">DNI</label>
                <input 
                    type="number" 
                    id="dni"
                    class="form-control" 
                    placeholder="DNI"
                    v-model.trim="usuario.dni"
                >
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Dirección</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="inputAddress" 
                    placeholder="1234 Main St"
                    v-model.trim="usuario.country" 
                >
            </div>
            <div class="form-row">
                <div class="col">
                <label for="email" class="col-form-label">Email</label>
                <input 
                    type="text"
                    id="email" 
                    class="form-control" 
                    placeholder="name@example.com"
                    v-model.trim="usuario.email"
                >
                </div>
                <div class="col">
                <label for="telefono" class="col-form-label">Telefono</label>
                <input 
                    type="tel" 
                    id="telefono"
                    class="form-control" 
                    placeholder="Telefono"
                    v-model.trim="usuario.phone"
                >
                </div>
            </div>
            <div class="form-group my-3">
                <button class="btn btn-primary form-control" type="submit"> submit </button>
            </div>
        </form>
    </div>
</template>


