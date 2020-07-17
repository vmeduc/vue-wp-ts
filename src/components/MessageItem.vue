<template>
    <div>
        <strong>--></strong>
        {{message.text}}
        <span style="position: absolute; right: 0">
            <input type="button" value="x" @click="clickDel"/>
        </span>
    </div>
</template> 

<script>
export default {
    name: 'MessageItem',
    props: ['message', 'deleteMessage'],
    methods: {
        clickDel() {
            this.deleteMessage(this.message)
        }
    }

}
</script>

<style scoped>

</style>