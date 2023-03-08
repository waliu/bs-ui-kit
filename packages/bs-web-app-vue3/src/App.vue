<template>
    <div>
        <bs-alert :bsOptions='option' :type="type" dismissible="true" message="一个简单的初级警报，看看吧！"></bs-alert>
        <bs-alert :bsOptions="option" type="secondary"></bs-alert>
        <bs-alert :bsOptions="option" type="success"></bs-alert>
        <bs-alert :bsOptions="option" type="danger"></bs-alert>
        <bs-alert :bsOptions="option" type="warning"></bs-alert>
        <bs-alert :bsOptions="option" type="info"></bs-alert>
        <bs-alert :bsOptions="option" type="light"></bs-alert>
        <bs-alert :bsOptions="option" type="dark"></bs-alert>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: String
})
const option ={
    message: "A simple primary alert—check it out!",
    dismissible: true
};
const type="primary"
// let options ="123";
</script>
