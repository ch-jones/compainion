//var getObject = JSON.parse(localStorage.getItem('storeObj'));
let optionsKey = document.getElementById("history-slider").value;
console.log(optionsKey);
//let keyName = JSON.parse(localStorage.getItem(optionsKey));

// Define new components
Vue.component('widget', {
    template: ''
});

//Vue.component('slider', {
//    data: function() {
//        return localStorage.length - 1;
//    },
//    template: `<input class="slider" id="history-slider" type="range" min="0" max="10" step="1" value="0" v-model="optionsKey" onchange="updateImage()">`
//})
Vue.component('modal', {
    template: '#modal-template',
    template: `<transition name="modal">
                    <div class="modal-mask">
                      <div class="modal-wrapper">
                        <div class="modal-container">

                          <div class="modal-header">
                            <slot name="header">
                              default header
                            </slot>
                          </div>

                          <div class="modal-body">
                            <slot name="body">
                              default body
                            </slot>
                          </div>

                          <div class="modal-footer">
                            <slot name="footer">
                              <button class="ghost-button" @click="$emit('close')">
                                Don't show this message again
                              </button>
                              <button class="modal-default-button" @click="$emit('close')">
                                OK
                              </button>
                            </slot>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>`
});

Vue.component('timerSetup', {
    data: function () {
        return {
            hours: 0,
            minutes: 0,
            //seconds: 0
        }
    },
    template: `<form>
                    <label for="hours">Hours<br/>
                    <input type="number" v-model="hours" name="time_h" id="hours" min="0">
                    </label>
                     <label for="min">Minutes<br />
                     <input type="number" v-model="minutes" name="time_m" id="min" min="0" max="59">
                     </label>
                    
                    <div class="med-input">
                    <label for="medication"><i class="fas fa-prescription-bottle"></i>Medication</label>
                    <input v-model="newMedication" placeholder="Medication" name="medication" type="text" required>
                    <label for="dose"><i class="fas fa-tablets"></i>Dosage</label>
                    <input v-model="newDose" name="dose" placeholder="Dose" type="text">
                    <label for="directions"><i class="fas fa-prescription"></i>Directions</label>
                    <input v-model="newDosage" name="directions>" placeholder="Directions" type="text">
<!--                    <button @click="addTimer">Add Timer</button>-->
                </div>
                     <button type="button" @click="sendTime">Set time</button>
                </form>`,
    methods: {
        sendTime() {
            this.$emit('set-time', {
                hours: this.hours,
                minutes: this.minutes
                //seconds: this.seconds
            });
        }
    }
});

Vue.component('timer', {
    template: `<div class="timer">{{ time | prettify }}</div>`,
    props: ['time'],
    filters: {
        prettify: function (value) {
            let data = value.split(':');
            let hours = data[0];
            let minutes = data[1];
            //let seconds = data[2];
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
//            if (seconds < 10) {
//                seconds = "0" + seconds;
//            }
            //                    if (seconds == 60) {
            //                        seconds = "00";
            //                    }
            return hours + ":" + minutes;
        }
    }
});

// Create Vue app
const app = new Vue({
    el: '#app',
    data: {
        //        user: [
        //            { firstName: 'Darnell' },
        //            { lastName: 'Williams' }
        //        ],
        history: false,
        //optionsKey: 0,
        keyName: localStorage.key(optionsKey),
        //prettyDate: new Date(this.history),
        // timer data
        isRunning: false,
        minutes: 0,
        //seconds: 0,
        time: 0,
        timer: null,
        sound: new Audio("http://s1download-universal-soundbank.com/wav/nudge.wav"),

        // modal data
        showModal: false,
        stopModal: false,
        timerModal: false,
        
        //user info
        userInfo: [
            {
                firstName: 'Darnell'
            },
            {
                lastName: 'Williams'
            }
        ],
        newTimer: '',
        newMedication: '',
        newDose: '',
        newDosage: '',
        medications: [{
            name: 'Acetaminophen',
            dose: '500 mg tablet',
            timer: '4:00',
            dosage: '2 caplets every 4-6 hours while symptoms last',
            checked: false,
        }, {
            name: 'Oxycodone',
            dose: '9 mg tablet',
            timer: '5:00',
            dosage: '1 tablet every 5-6 hours as needed',
            checked: false,
        }, {
            name: 'Amoxicillin',
            dose: '2000 mg tablet',
            timer: '12:00',
            doseage: '1 tablet every 12 hours',
            checked: false
        }],
        myValue: 0,
        painLvls: [{
            id: 0,
            title: 'No Pain',
            text: 'I have no pain.',
            emoji: '😀',
            color: '#fafafa',
        }, {
            id: 1,
            title: 'Minimal Pain',
            text: 'My pain is hardly noticeable.',
            emoji: '🙂',
            color: '#e0f7fa'
        }, {
            id: 2,
            title: 'Mild',
            text: 'I have a low level of pain. I am aware of my pain only when I pay attention to it.',
            emoji: '😐',
            color: '#e8f5e9'
        }, {
            id: 3,
            title: 'Uncomfortable',
            text: 'My pain bothers me, but I can ignore it most of the time.',
            emoji: '😕',
            color: '#f0f4c3'
        }, {
            id: 4,
            title: 'Moderate',
            text: 'I am constantly aware of my pain, but I can continue most activities.',
            emoji: '😟',
            color: '#e6ee9c'
        }, {
            id: 5,
            title: 'Distracting',
            text: 'I think about my pain most of the time. I can’t do some of the activities I need to do each day because of the pain.',
            emoji: '🙁',
            color: '#fff176'
        }, {
            id: 6,
            title: 'Distressing',
            text: 'I think about my pain all of the time. I give up many activities because of my pain.',
            emoji: '😧',
            color: '#ffee58'
        }, {
            id: 7,
            title: 'Unmanageable',
            text: 'I am in pain all the time. It keeps me from doing most activities.',
            emoji: '😰',
            color: '#ffd54f'
        }, {
            id: 8,
            title: 'Intense',
            text: 'My pain is so severe that it is hard to think of anything else. Talking and listening are difficult.',
            emoji: '😭',
            color: '#ffa726'
        }, {
            id: 9,
            title: 'Severe',
            text: 'My pain is all than I can think about. I can barely talk or move because of the pain.',
            emoji: '😩',
            color: '#ff5722'
        }, {
            id: 10,
            title: 'Unable to Move',
            text: 'I am in bed and can’t move due to my pain. I need someone to take me to the emergency room to get help for my pain.',
            emoji: '🤮',
            color: '#d84315'
        }]
    },

    computed: {
        prettyTime() {
            let time = this.time / 60;
            let hours = parseInt(time);
            let minutes = Math.round((time - hours) * 60);
            return hours + ":" + minutes;
        },
//        prettyDate() {
//            let date = new Date(this.history.timestamp);
//        }
    },

    methods: {
        start() {
            this.isRunning = true;
            if (!this.timer) {
                this.timer = setInterval(() => {
                    if (this.time > 0) {
                        this.time--;
                    } else {
                        clearInterval(this.timer);
                        this.sound.play();
                        alert("Hello! I am an alert box!");
                        this.reset();
                    }
                }, (1000 * 60));
            }
        },
        stop() {
            this.isRunning = false;
            clearInterval(this.timer);
            this.timer = null;
        },
        reset() {
            this.stop();
            this.time = 0;
            //this.seconds = 0;
            this.minutes = 0;
        },
        setTime(payload) {
            this.time = payload.hours * 60 + payload.minutes;
            var timer = this.newTimer;
            var name = this.newMedication.trim();
            var dose = this.newDose.trim();
            var dosage = this.newDosage.trim();
            if (name) {
                this.medications.push({
                    timer: timer,
                    name: name,
                    dose: dose,
                    dosage: dosage,
                    checked: false
                });
                this.newTimer = '';
                this.newMedication = '';
                this.dose = '';
                this.dosage = '';
            }
        },
//        addTimer: function () {
//            var timer = this.newTimer;
//            var name = this.newMedication.trim();
//            var dose = this.newDose.trim();
//            var dosage = this.newDosage.trim();
//            if (name) {
//                this.medications.push({
//                    timer: timer,
//                    name: name,
//                    dose: dose,
//                    dosage: dosage,
//                    checked: false
//                });
//                this.newTimer = '';
//                this.newMedication = '';
//                this.dose = '';
//                this.dosage = '';
//            }
//        }
    },

    mounted() {
        if (localStorage.myValue) this.myValue = localStorage.myValue;
        //if (localStorage.stopModal) this.stopModal = localStorage.stopModal;
        if (localStorage) history = true;
    },

    watch: {
        myValue(newValue) {
            localStorage.myValue = newValue;
        }
//        stopModal(stopModal) {
//            localStorage.stopModal = this.stopModal;
        },
});
