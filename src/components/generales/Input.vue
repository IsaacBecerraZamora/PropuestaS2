<template>
    <div class="" :class="classParent" v-if="loader">
      <label class="label" :for="id" :class="styleLabel" v-if="showLabel">{{ label }}</label>
      <div class="relative">
        <div class="flex">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <slot name="icon"></slot>
          </div>
          <input
            class="input"
            :type="type"
            :inputmode="inputmode"
            :maxlength="maxlength"
            :placeholder="placeholder ? placeholder : label"
            :id="id"
            :name="id"
            :value="valueInput"
            :disabled="disabled"
            :readonly="readonly"
            :required="required"
            :class="
              styleInput +
              (!props.error
                ? ' border-gray-300 focus:border-gray-500 dark:border-gray-600 dark:focus:border-gray-500'
                : ' border-red-300 focus:border-red-500 dark:border-red-600 dark:focus:border-red-500')
            "
            @input="updateEvent($event)"
            @keydown.enter="keydown()"
            @click="click()"
            @focus="focus()"
            @blur="blur()"
            @keypress="keypress($event)"
            @keyup="keyup()"
            @change="change()"
            v-on="von"
          />
          <div>
            <slot name="buttons"></slot>
  
            <div class="absolute inset-y-0 right-0 mr-2 flex items-center pl-3 z-50">
              <slot name="iconright"></slot>
            </div>
          </div>
        </div>
      </div>
      <p class="text-sm text-red-600 dark:text-red-500 mt-2" v-if="error">
        {{ labelError }}
      </p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref, useSlots, watch } from "vue";
  
  type HTMLInputMode = "search" | "text" | "email" | "none" | "tel" | "url" | "numeric" | "decimal" | undefined;
  
  const slots = useSlots();
  const styleInput = ref("");
  const styleLabel = ref("");
  const showLabel = ref(false);
  const labelError = ref("");
  const inputmode = ref<HTMLInputMode>("text");
  const valueInput = ref<string | number>("");
  const loader = ref(false);
  
  const props = defineProps({
    id: { type: String, require: true, default: "" },
    type: { type: String, require: false, default: "text" },
    label: { type: String, require: false, default: "" },
    placeholder: { type: String, require: false, default: "" },
    class: { type: String, require: false, default: "" },
    classParent: { type: String, require: false, default: "" },
    maxlength: { type: Number, require: false, default: 100 },
    required: { type: Boolean, require: false, default: false },
    disabled: { type: Boolean, require: false, default: false },
    readonly: { type: Boolean, require: false, default: false },
    error: { type: Boolean, require: false, default: false },
    labelError: { type: String, require: false, default: "" },
    modelValue: { type: [String, Number], require: true, default: "" },
    value: { type: String, require: false, default: "" },
    mode: { type: String, require: false, default: "text" },
    von: { type: Object, require: false, default: {} },
  });
  
  onMounted(() => {
    styleInput.value = " " + props.class;
    inputmode.value = props.mode as HTMLInputMode;
    valueInput.value = props.value.length > 0 ? props.value : props.modelValue;
  
    if (props.required) {
      styleLabel.value += "after:content-['*'] after:ml-0.5 after:text-red-500";
    }
  
    showLabel.value = props.label.length > 0;
    labelError.value = props.labelError.length > 0 ? props.labelError : "Campo Obligatorio";
  
    if (slots["icon"]) {
      styleInput.value += " pl-10 ";
    }
  
    loader.value = true;
  });
  
  watch(
    () => props.value,
    () => {
      valueInput.value = props.value;
    }
  );
  
  watch(
    () => props.modelValue,
    () => {
      valueInput.value = props.modelValue;
    }
  );
  
  const emit = defineEmits(["update:modelValue", "input", "keydown", "click", "focus", "blur", "keypress", "keyup", "change"]);
  const updateEvent = (event: any) => {
    emit("update:modelValue", event.target.value);
    emit("input");
  };
  
  const keydown = () => {
    emit("keydown");
  };
  
  const click = () => {
    emit("click");
  };
  
  const focus = () => {
    emit("focus");
  };
  
  const blur = () => {
    emit("blur");
  };
  
  const keyup = () => {
    emit("keyup");
  };
  
  const keypress = (event: any) => {
    emit("keypress", event);
  };
  
  const change = () => {
    emit("change");
  };
  </script>
  