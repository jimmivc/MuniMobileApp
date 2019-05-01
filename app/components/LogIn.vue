<template>
    <Page actionBarHidden="true">
        <StackLayout columns="*" rows="*">

            <Button id="btnSkip" text="Saltar" @tap="skip"/>
            <Image src="~/assets/images/logo_muni_santa_ana.jpg"/>
            <Label class="message" :text="msg"/>
            <TextField v-model="txtEmail" hint="Enter text..."/>
            <TextField v-model="txtPass" hint="Enter text..."/>
            <Button text="Iniciar sesion" @tap="onButtonTap"/>
            <Button text="Registrarse" @tap="onButtonTap"/>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
    import * as appSettings from "tns-core-modules/application-settings";
    import LogIn from './LogIn.vue';

    export default {
        methods: {
            skip(){
                appSettings.setBoolean('skipLogin',true);
                this.$navigateTo(LogIn);
            }
        },
        data() {
            return {
                txtEmail: "",
                txtPass: "",
                msg: 'Hello World!'
            }
        }
    }
</script>

<style scoped>
ActionBar {
background-color: #53ba82;
color: #ffffff;
}

.message {
margin-top: 30;
vertical-align: center;
text-align: center;
font-size: 20;
color: #333333;
}

#btnSkip{
width: 100;
text-align: right;
}

</style>