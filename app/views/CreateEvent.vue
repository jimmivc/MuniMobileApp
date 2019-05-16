<template>
    <page actionBarHidden="true">
        <StackLayout orientation="vertical">

            <GridLayout rows="auto" columns="*">
                <Button text="Back" @tap="onButtonTap" row="0" horizontalAlignment="left"/>
                <Button text="Create" @tap="test" row="0" horizontalAlignment="right"/>

            </GridLayout>
            <ScrollView orientation="vertical">
                <StackLayout orientation="vertical">
                    <TextField v-model="textFieldValue" hint="Titulo del evento"></TextField>
                    <GridLayout rows="auto auto auto" columns="50 200 100">
                        <Image src="https://play.nativescript.org/dist/assets/img/NativeScript_logo.png" width="30"/>
                        <label text="Evento todo el dia" col="1"/>
                        <Switch checked="true" horizontalAlignment="right" col="2"/>

                        <Image row="1" src="https://play.nativescript.org/dist/assets/img/NativeScript_logo.png" width="30"/>
                        <DatePickerField class="test" row="1" col="1" :hint="date"></DatePickerField>
                        <TimePickerField class="test" :hint="date" row="1" col="2"/>

                        <Image row="2" src="https://play.nativescript.org/dist/assets/img/NativeScript_logo.png" width="30"/>
                        <DatePickerField row="2"  col="1" :hint="date"></DatePickerField>
                        <TimePickerField row="2" :hint="date" col="2"/>
                    </GridLayout>

                </StackLayout>
            </ScrollView>
        </StackLayout>
    </page>
</template>

<script>
    import CustomLabel from "../components/CustomLabel";
    export default {
        components: {CustomLabel},
        data() {
            return {textFieldValue: "",}
        },
        methods: {
            onButtonTap() {
                console.log("Button was pressed");
            },

        },
        name: "CreateEvent"
    }
</script>

<style scoped>
    label{
        padding: 15;
    }
    .test{
        padding: 15;
    }
</style>