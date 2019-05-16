<template>
    <Page actionBarHidden="true">
        <StackLayout columns="*" rows="*">
            <Label class="message" :text="msg"/>
            <Button text="LogIn" @tap="goToLogIn"/>
            <Button text="Create Event" @tap="goToCreateEvent"/>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
    import * as appSettings from "tns-core-modules/application-settings";
    import LogIn from './LogIn.vue';
    import CreateEvent from "./CreateEvent.vue";

    export default {

        methods: {
            goToCreateEvent() {
                this.$navigateTo(CreateEvent)
            },
            goToLogIn() {
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