<template>
    <Page actionBarHidden="true">
        <StackLayout columns="*" rows="*">

            <Button horizontalAlignment="right" id="btnSkip" text="Saltar" @tap="skip"/>

            <StackLayout orientation="vertical" marginTop="50">
                <Image width="200" src="~/assets/images/psa_logo.png"/>
                <TextField v-model="txtEmail" hint="Correo"/>
                <TextField v-model="txtPass" hint="Contraseña"/>
                <Button text="Iniciar sesion" @tap="onButtonTap"/>
                <Button text="Registrarse" @tap="onButtonTap"/>
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
text-align: center;
}

</style>