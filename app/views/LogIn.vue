<template>
    <Page actionBarHidden="true">
        <StackLayout columns="*" rows="*">

            <Button horizontalAlignment="right" text="Saltar" @tap="skip"/>

            <StackLayout orientation="vertical" marginTop="10%" marginBottom="30">
                <Image width="300" marginBottom="10" src="~/assets/images/muniLogo.png"/>
                <TextField v-model="txtEmail" hint="Correo"/>
                <TextField v-model="txtPass" hint="Contraseña"/>
                <Button class="loginBtn" text="Iniciar sesion" @tap="onButtonTap"/>
                <Button class="loginBtn" text="Registrarse" @tap="onButtonTap"/>
            </StackLayout>

        </StackLayout>
    </Page>
</template>

<script lang="ts">
    import * as appSettings from "tns-core-modules/application-settings";
    import Main from './Main.vue';

    export default {
        methods: {
            skip(){
                appSettings.setBoolean('skipLogin',true);
                this.$navigateTo(Main,{clearHistory:true});
            }
        },
        data() {
            return {
                txtEmail: "",
                txtPass: "",
            }
        }
    }
</script>

<style scoped>
ActionBar {
background-color: #53ba82;
color: #ffffff;
}


.loginBtn{
 width: 250;
}

</style>