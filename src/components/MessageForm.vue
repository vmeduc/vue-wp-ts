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
            let x = {text: this.$data.text}
            this.messages.push(x)
            this.$data.text = ''
        }
    }
}
</script>

<style scoped>
    .my-form {
        height: 150px;
    }
</style>