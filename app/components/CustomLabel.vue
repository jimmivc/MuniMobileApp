<template>
    <label loaded="center" :text="text"></label>
</template>

<script lang="ts">
    import {EventData} from "tns-core-modules/data/observable";
    import {Label} from "tns-core-modules/ui/label";
    import {isAndroid} from "tns-core-modules/platform";
    import {Component, Prop, Vue} from 'vue-property-decorator'


    @Component
    export default class CustomLabel extends Vue {

        @Prop() private text : string;

        center(args:EventData) {
            const lbl = args.object as Label;
            if(isAndroid){
                lbl.android.setGravity(17);
            }
        }
    }

</script>

<style scoped>
    label{
        padding: 15;
    }
</style>