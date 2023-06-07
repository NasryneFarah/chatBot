<script>
    export default{
        props: {
            expediteur: {
                type: String,
                default: '',
            },

            text: {
                type: String,
                default: ''
            }
        },
    }
</script>

<template>
     <div class="d-flex" :class="{'flex-row-reverse':expediteur!='Zack'}">
          <i class="bi bi-person mx-2"></i>
          <p class="msg">{{ text }}</p>
        </div>
</template>

<style>

</style>