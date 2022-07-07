import { defineStore } from 'pinia'

export const useCitaMedica = defineStore('citasMedica',{
    state: () => ({
        usuarios: [],
        citaPaciente: [],
        buscarPaciente:'',
        usuario: {
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
        },
        contador: 16
    }),
    actions: {
        async setUsuarios(usuario){
            try {
                const res = await fetch(`https://eddsc-66fb6-default-rtdb.firebaseio.com/citaMedica/${usuario.id}.json`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(usuario)
                })
                const dataDB = await res.json();
                console.log(dataDB);
                this.usuarios.unshift(usuario)
            } catch (error) {
                console.log(error);
            }
        },
        async setCitaPaciente(citaPaciente){
            try {
                const res = await fetch(`https://eddsc-66fb6-default-rtdb.firebaseio.com/citaPaciente/${citaPaciente.id}.json`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(citaPaciente)
                })
                const dataDB = await res.json();
                console.log(dataDB);
                this.usuarios.unshift(citaPaciente)
            } catch (error) {
                console.log(error);
            }
        },
        async cargarUsuarios(){
            try {
                const res = await fetch('https://eddsc-66fb6-default-rtdb.firebaseio.com/citaMedica.json')
                const data = await res.json();
                this.usuarios = []
                for (let id in data){
                    this.usuarios.push(data[id]);
                }
                // this.pacientes.push(data) 
                console.log(this.usuarios);
            } catch (error) {
                
            }
        },
        async cargarCitaPaciente(){
            try {
                const res = await fetch('https://eddsc-66fb6-default-rtdb.firebaseio.com/citaPaciente.json')
                const data = await res.json();
                this.citaPaciente = []
                for (let id in data){
                    this.citaPaciente.push(data[id]);
                }
                // this.pacientes.push(data) 
                console.log(this.citaPaciente);
            } catch (error) {
                
            }
        },
        async updateCitaPaciente(citaPaciente){
            try {
                const res = await fetch(`https://eddsc-66fb6-default-rtdb.firebaseio.com/citaPaciente/${citaPaciente.id}.json`,{
                    method: 'PATCH',
                    body: JSON.stringify(citaPaciente),
                })
                this.citaPaciente.map(p => p.id === citaPaciente.id ? citaPaciente: p)
            } catch (error) {
                console.log(error);
            }
        },
        async deleteCitaPaciente(id){
            try {
                const res = await fetch(`https://eddsc-66fb6-default-rtdb.firebaseio.com/citaPaciente/${id}.json`,{
                    method: 'DELETE',
                })
                this.citaPaciente.filter(p => p.id !== id)
            } catch (error) {
                console.log(error);
            }
        },
        async deleteUsuario(id){
            try {
                const res = await fetch(`https://eddsc-66fb6-default-rtdb.firebaseio.com/citaMedica/${id}.json`,{
                    method: 'DELETE',
                })
                this.usuarios.filter(p => p.id !== id)
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        listaMedico: (state) => state.usuarios.filter((usuario) => usuario.type === 'Medico'),
        listaPaciente: (state) => state.usuarios.filter((usuario) => usuario.type === 'Paciente'),
        listaCitaPaciente: (state) => state.citaPaciente.filter((usuario) => usuario.paciente === state.buscarPaciente)
    }
})