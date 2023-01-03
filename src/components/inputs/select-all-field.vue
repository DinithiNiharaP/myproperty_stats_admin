<template>
  <div class="flex justify-center">
    <div class="dropdown dropdown-bottom mr-3">
      <label
        tabindex="0"
        class="flex m-1 border-solid border-2 rounded-md pl-4 pr-4 pb-2 pt-2 text-sm font-semibold text-gray-500"
      >
        {{ label }}
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2 ml-8"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </label>
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <div class="flex">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary bg-gray-100 rounded"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-semibold text-secondary"
              >Select All</label
            >
          </div>
        </li>
        <li class="divide"></li>
        <li>
          <div class="flex">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary bg-gray-100 rounded"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-semibold text-secondary"
              >Default checkbox</label
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SelectAllField',
  props: {
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      required: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    returnObject: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: true,
    },
    itemText: {
      type: String,
      default: 'text',
    },
    itemValue: {
      type: String,
      default: 'value',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: 'accent',
    },
    value: {
      type: [String, Object, Boolean, Number, Array],
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    // formData: [],
    // data: [],
  }),

  created() {
    // this.formData = this.items;
  },

  watch: {
    items: function (val) {
      this.formData = val;
    },
  },

  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.AllItems) {
          this.formData = [];
        } else {
          this.formData = this.items.slice();
        }
      });
    },

    onChange(val) {
      this.formData = val;

      this.$emit('change', val);
    },

    onSelectAll() {
      let value = [];
      console.log(this.formData.length);
      // console.log(this.items);
      if (this.formData.length == 0 || this.formData.length != this.items.length) {
        for (let item of this.items) {
          value.push(item.value);
        }
        console.log(value);
        this.formData = value;
        this.$emit('change', value);
      }
    },
  },
  computed: {
    AllItems() {
      return this.formData.length == this.items.length;
    },
    SomeItems() {
      return this.formData.length > 0 && !this.AllItems;
    },
    icon() {
      if (this.AllItems) return 'mdi-close-box';
      if (this.SomeItems) return 'mdi-minus-box';
      return 'mdi-checkbox-blank-outline';
    },

    formData: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('update:value', val);
      },
    },
  },
};
</script>



