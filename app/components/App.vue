<template>
    <Page actionBarHidden="true">
        <StackLayout columns="*" rows="*">
            <Image src="~/assets/images/logo_muni_santa_ana.jpg"/>

        </StackLayout>
    </Page>
</template>

<script lang="ts">
    export default {
        methods: {
            onButtonTap() {
                console.log("Button was pressed");
            },
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

</style>
