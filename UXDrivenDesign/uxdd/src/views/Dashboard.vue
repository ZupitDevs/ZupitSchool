<template>
  <div class="container">
    <div class="row">
      <div class="col-12">

    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        :start="start"
        :end="end"
       @change="getEvents"
      ></v-calendar>
    </v-sheet>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios';

export default {
  data(){
    return {
       type: 'month',
      mode: 'stack',
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
        { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
        { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
      ],
      value: '',
      events: [],
      start:'2020-01-01',
      end:'2020-01-31'
      
     
    };
  },
  methods:{
      getEventColor (event) {
        return event.color
      },
      getEvents({ start, end }){
          axios.get(`api/events/${start.date}/${end.date}`).then(data=>{
            this.events=data.data;
          });
      }      
  },
  mounted(){
    if (this.start && this.end){
  axios.get(`api/events/${this.start}/${this.end}`).then(data=>{
            this.events=data.data;
          });
    }
  }

}
</script>