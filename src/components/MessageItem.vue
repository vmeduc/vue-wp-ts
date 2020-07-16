<template>
    <div>
        <strong>--></strong>
        {{message.text}}
    </div>
</template> 

<script>
export default {
    name: 'MessageItem',
    props: ['message']

}
</script>

<style scoped>

</style>