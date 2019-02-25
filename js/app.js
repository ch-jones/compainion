const app = new Vue({
    el: '#app',
    data: {
        myValue: 0,
        name: 'Caleb',
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
