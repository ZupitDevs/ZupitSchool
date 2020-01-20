<template>
  <v-row>
    <v-col>
      {{model}}
      <v-form ref="form" v-model="valid" :lazy-validation="lazy" style="width:500px;margin:0 auto">
        <v-text-field v-model="model.name" label="Nome Evento" required :rules="nameRules"></v-text-field>

        <v-text-field v-model="model.author" label="Autore" required :rules="authorRules"></v-text-field>

        <v-dialog
          ref="dialogstart"
          v-model="modalstart"
          :return-value.sync="model.start"
          persistent
          width="290"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="model.start"
              label="Scegli data"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="model.start" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modalstart = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialogstart.save(model.start)">OK</v-btn>
          </v-date-picker>
        </v-dialog>

        <v-dialog
          ref="dialogstarttime"
          v-model="modalstarttime"
          :return-value.sync="model.startTime"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="model.startTime"
              label="Scegli ora inizio"
              prepend-icon="access_time"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker v-model="model.startTime" full-width>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modalstarttime = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialogstarttime.save(model.startTime)">OK</v-btn>
          </v-time-picker>
        </v-dialog>

     

        <v-dialog
          ref="dialogendtime"
          v-model="modalendtime"
          :return-value.sync="model.endTime"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="model.endTime"
              label="Scegli ora inizio"
              prepend-icon="access_time"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker v-model="model.endTime" full-width>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modalendtime = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialogendtime.save(model.endTime)">OK</v-btn>
          </v-time-picker>
        </v-dialog>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="save">Salva</v-btn>

        <v-btn color="error" class="mr-4" @click="reset">Annulla</v-btn>

      </v-form>
    </v-col>
  </v-row>
</template>

<script>

import router from '../router/index'
import axios from 'axios'
export default {
  data() {
    return {
      lazy: false,
      valid: false,
      model: {
        name: "",
        author: "",
        start: new Date().toISOString().substr(0, 10),
        startTime: "08:00",
        endTime: "10:00"
      },
      modalstart: false,
      modalstarttime: false,
      modalendtime: false,
      nameRules: [
        v => !!v || 'Inserire il nome'
      ],
      authorRules: [
        v => !!v || 'Inserire l\'autore'
      ],

    };
  },
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        axios.post('api/event',this.model).then(ret=>{
            router.push({name:'dashboard'});
        });

      }
    },
    reset() {
      this.$refs.form.reset();
      this.model.start=new Date().toISOString().substr(0, 10);
      this.model.startTime='08:00';
      this.model.endTime='10:00';

    }
  }
};
</script>

<style lang="scss">
</style>