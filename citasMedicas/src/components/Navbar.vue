<script setup>

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link class="navbar-brand" to="/">
            <img  style="height: 40px;" src="/public/image/logo.jpeg" alt="">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/citas">Citas</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/paciente">Paciente</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/medico">Medico</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/reporte">Reporte de Citas</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                        data-toggle="dropdown" aria-expanded="false">
                        Panel para Medicos
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <router-link class="dropdown-item" to="/citapaciente">Cita de Pacientes</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
</style>