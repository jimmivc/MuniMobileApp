<template>
    <page actionBarHidden="true">
        <StackLayout orientation="vertical">

            <GridLayout rows="auto" columns="*">
                <Button text="Back" @tap="$navigateBack" row="0" horizontalAlignment="left"/>
                <Button text="Create" @tap="onButtonTap" row="0" horizontalAlignment="right"/>

            </GridLayout>
            <ScrollView orientation="vertical">
                <StackLayout orientation="vertical">
                    <TextField v-model="textFieldValue" hint="Titulo del evento"></TextField>
                    <GridLayout rows="auto auto auto" columns="50 180 110">
                        <Image src="~/assets/icons/round-access_time-black-18/2x/round_access_time_black_18dp.png" width="30"/>
                        <label text="Evento todo el dia" col="1"/>
                        <Switch checked="true" horizontalAlignment="right" col="2"/>

<!--                        <Image row="1" src="~/assets/icons/round-access_time-24px.svg"-->
                               width="30"/>
                        <DatePickerField class="dateTimePicker" :date="defaultStartDate" row="1" col="1"
                                         :hint="date"></DatePickerField>
                        <TimePickerField class="dateTimePicker" :time="defaultStartTime" row="1" col="2"/>

<!--                        <Image row="2" src="https://play.nativescript.org/dist/assets/img/NativeScript_logo.png"-->
                               width="30"/>
                        <DatePickerField class="dateTimePicker" :date="defaultEndDate" row="2"
                                         col="1"></DatePickerField>
                        <TimePickerField class="dateTimePicker" :time="defaultEndTime" row="2" col="2"/>
                    </GridLayout>
                    <GridLayout rows="100 auto auto auto auto auto" columns="50 300">
                        <Image src="~/assets/icons/round-comment-black-18/2x/round_comment_black_18dp.png"
                               width="30"/>
                        <TextView col="2" style="margin-top: 15px" borderColor="#DEDEDE" borderWidth="1"
                                  height="100" hint="Descripción" returnKeyType="send"
                                  class="input input-border"></TextView>

                        <Image row="1" src="~/assets/icons/round-add_photo_alternate-black-18/2x/round_add_photo_alternate_black_18dp.png"
                               width="30"/>
                        <Button row="1" col="2" text="Subir Imagenes" @tap="onButtonTap"/>

                        <Image row="2" src="~/assets/icons/round-video_call-black-18/2x/round_video_call_black_18dp.png"
                               width="30"/>
                        <Button row="2" col="2" text="Subir Video" @tap="onButtonTap"/>

                        <Image row="3" src="~/assets/icons/round-add_location-black-18/2x/round_add_location_black_18dp.png"
                               width="30"/>
                        <Button row="3" col="2" text="Ingresar Ubicación" @tap="onButtonTap"/>

                        <Image row="4" src="~/assets/icons/round-attach_file-black-18/2x/round_attach_file_black_18dp.png"
                               width="30"/>
                        <Button row="4" col="2" text="Subir PDF" @tap="onButtonTap"/>

                        <Image row="5" src="~/assets/icons/round-person_add-black-18/2x/round_person_add_black_18dp.png"
                               width="30"/>
                        <Button row="5" col="2" text="Agregar Invitados" @tap="onButtonTap"/>


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

            let nextDay = new Date();
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate()+1);
            nextDay.setDate(nextDay.getDate()+2);

            return {
                textFieldValue:"",
                defaultStartDate: tomorrow,
                defaultEndDate: nextDay,
                defaultStartTime: "11:00",
                defaultEndTime: "12:00"
            }
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
    label {
        padding: 15;
    }

    .dateTimePicker {
        padding: 15;
    }
</style>