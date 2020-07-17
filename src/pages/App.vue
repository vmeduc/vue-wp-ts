<template>
    <div>
        <md-toolbar>
            <span class="md-title">Title</span>
        </md-toolbar>

        <div class="md-layout">
            <message-form :messages="messages"/>
            <div class="md-card">
                <message-item v-for="message in messages" :key="message.id" :message="message" :messages="messages"/>
            </div>
        </div>
    </div>
</template>

<script>
import MessageForm from 'components/MessageForm.vue'
import MessageItem from 'components/MessageItem.vue'
export default {
    name: 'App',
    components: {
        MessageForm,
        MessageItem
    },
    data() {
        return {
            messages: [

            ]
        }
    },
    created() {
        this.$http.get('http://localhost:9000/messages').then(response =>
            response.json().then(data => 
                data.forEach(message => this.messages.push(message))
            )
        )
    }
}
</script>

<style scoped>

    .md-card {
        padding: 10px;
        margin: 10px;
        display: block;
        max-width: 1000px;
    }
    .md-layout {
        margin-top: 20px;
        margin-left: 50px;
        margin-right: 50px;
    }

</style>