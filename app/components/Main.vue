<template>
    <Page actionBarHidden="true">
        <StackLayout columns="*" rows="*">
            <Label class="message" :text="msg"/>
            <Button text="Button" @tap="onButtonTap"/>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
    import * as appSettings from "tns-core-modules/application-settings";
    import LogIn from './LogIn.vue';

    export default {

        methods: {
            onButtonTap() {
                appSettings.setBoolean('skipLogin', false);
                this.$navigateTo(LogIn);
            },
        },
        name: "Main",
        data() {
            return {
                msg: 'This is the main screen'
            }
        }
    }
</script>

<style scoped>

</style>