<template>
    <div class="md-card my-form">
        <form>
            <p>Messanger</p>
            <p><input type="text" placeholder="write message" v-model="text"></p>
            <p><input type="button" value="Send" @click="saveMessage"></p>
        </form>
    </div>
</template> 

<script>
export default {
    name: 'MessageForm',
    props: ['messages'],
    data() {
        return {
            text: ''
        }
    },
    methods: {
        saveMessage() {
            if (this.$data.text === '') {
                alert('Write message, textview is empty')
            } else {
                this.$http.post('http://localhost:9000/messages', {text: this.$data.text}).then(response =>
                    response.json().then(data => {
                        this.messages.push(data)
                        this.$data.text = ''
                    })
                )    
            }
        }
    }
}
</script>

<style scoped>
    .my-form {
        height: 150px;
    }
</style>