<template>
    <div>
        <md-toolbar>
            <span class="md-title">Title</span>
        </md-toolbar>

        <div class="md-layout">
            <message-form :messages="messages"/>
            <div class="md-card">
                <message-item v-for="message in messages" :key="message.text" :message="message"/>
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
                {text: 'hello1'},
                {text: 'hello2'}
            ]
        }
    },
    beforeCreate() {

    }
}
</script>

<style scoped>

    .md-card {
        padding: 10px;
        margin: 10px;
        display: block;
    }
    .md-layout {
        margin-top: 20px;
        margin-left: 50px;
        margin-right: 50px;
    }

</style>