// Define a new component called button-counter
Vue.component('modal', {
  template: '#modal-template'
});

const app = new Vue({
    el: '#app',
    data: {
//        user: [
//            { firstName: 'Darnell' },
//            { lastName: 'Williams' }
//        ],
        showModal: true,
        userInfo: [
            { firstName: 'Darnell' },
            { lastName: 'Williams' }
        ],
        newTimer: '',
        newMedication: '',
        newDose: '',
        newDosage: '',
        medications: [{
            name: 'Acetaminophen',
            dose: '500 mg tablet',
            timer: 4,
            dosage: '2 caplets every 4-6 hours while symptoms last',
            checked: false,
        }, {
            name: 'Oxycodone',
            dose: '9 mg tablet',
            timer: 5,
            dosage: '1 tablet every 5-6 hours as needed',
            checked: false,
        }, {
            name: 'Amoxicillin',
            dose: '2000 mg tablet',
            timer: 12,
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
    methods: {
        addTimer: function() {
            var timer   = this.newTimer;
            var name    = this.newMedication.trim();
            var dose    = this.newDose.trim();
            var dosage  = this.newDosage.trim();
            if (name) {
                this.medications.push({
                    timer: timer,
                    name: name,
                    dose: dose,
                    dosage: dosage,
                    checked: false
                });
                this.newTimer       = '';
                this.newMedication  = '';
                this.dose           = '';
                this.dosage         = '';
            }
        }
    }
});

//const app2 = new Vue({
//   el: "#app2",
//    data: {
//        medications: [{
//            id: 0,
//            name: 'ibuprofen'
//        }, {
//            id: 1,
//            name: 'oxycodone'
//        }]
//    }
//    
//});
