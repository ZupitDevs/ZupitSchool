import {
    Server
} from 'miragejs';



var utils = {
    rnd(a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
    },
    formatDate(a, withTime) {
        return withTime ?
            `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}` :
            `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
    }
}

export default {
    setup() {

        new Server({
            routes() {
                this.namespace = '';

                this.get('api/events/:start/:end', (schema, request) => {
                    const events = []
                    const colors = ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'];
                    const names = ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'];
                    const min = new Date(`${request.params.start}T00:00:00`)
                    const max = new Date(`${request.params.end}T23:59:59`)
                    const days = (max.getTime() - min.getTime()) / 86400000
                    const eventCount = utils.rnd(days, days + 20)

                    for (let i = 0; i < eventCount; i++) {
                        const allDay = utils.rnd(0, 3) === 0
                        const firstTimestamp = utils.rnd(min.getTime(), max.getTime())
                        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
                        const secondTimestamp = utils.rnd(2, allDay ? 288 : 8) * 900000
                        const second = new Date(first.getTime() + secondTimestamp)

                        events.push({
                            name: names[utils.rnd(0, names.length - 1)],
                            start: utils.formatDate(first, !allDay),
                            end: utils.formatDate(second, !allDay),
                            color: colors[utils.rnd(0, colors.length - 1)],
                        })
                    }
                    return events;
                });

            }
        });
    }
}