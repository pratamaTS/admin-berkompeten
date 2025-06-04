<script setup>
import logo from '@images/berkompeten_logo.svg?raw'
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png'
import authV1Tree2 from '@images/pages/auth-v1-tree-2.png'
import authV1Tree from '@images/pages/auth-v1-tree.png'
import { useTheme } from 'vuetify'

import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const TURNSTILE_SITE_KEY = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'
const turnstileWidgetId = ref(null)

const form = reactive({
  email: '',
  password: '',
  remember: false,
})

const savedEmails = ref([])
const vuetifyTheme = useTheme()
const showSuggestions = ref(false);
const filteredEmails = ref([]);

// Filter emails based on user input
const filterEmails = () => {
  const query = form.email.toLowerCase();
  filteredEmails.value = savedEmails.value.filter((email) =>
    email.toLowerCase().includes(query)
  );
};

// Select email from suggestions
const selectEmail = (email) => {
  form.email = email;
  showSuggestions.value = false;
};

// Hide suggestions on blur (with a slight delay to allow selection)
const hideSuggestions = () => {
  setTimeout(() => (showSuggestions.value = false), 200);
};

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})

const isPasswordVisible = ref(false)
const loginError = ref(null)
var token = localStorage.getItem('token');

// Add Turnstile initialization function
const initTurnstile = () => {
  if (window.turnstile) {
    // Remove previous widget if it exists
    if (turnstileWidgetId.value) {
      window.turnstile.remove(turnstileWidgetId.value);
    }
    
    // Render turnstile with invisible/managed mode
    turnstileWidgetId.value = window.turnstile.render('#turnstile-container', {
      sitekey: TURNSTILE_SITE_KEY,
      theme: 'light',
      callback: function(token) {
        // Store token in a hidden input for form submission
        const tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = 'cf-turnstile-response';
        tokenInput.value = token;
        
        // Remove any existing token input
        const existingInput = document.querySelector('input[name="cf-turnstile-response"]');
        if (existingInput) existingInput.remove();
        
        // Add the new token input to the form
        document.querySelector('form')?.appendChild(tokenInput);
      },
      'expired-callback': () => {
        // Token expired, re-render the widget
        initTurnstile();
      },
      'error-callback': () => {
        // Handle error, but don't show error to user for invisible mode
        console.error('Turnstile encountered an error');
      },
      appearance: 'interaction-only' // Only show when needed based on risk assessment
    });
  } else {
    // If turnstile isn't loaded yet, try again after a short delay
    setTimeout(initTurnstile, 500);
  }
};

onMounted(async () => {
  console.log("token login: ", token)

  if (token) {
    router.push('/dashboard');
  }

  // Load emails from localStorage
  const emails = JSON.parse(localStorage.getItem('savedEmails')) || []
  savedEmails.value = emails
  
  // Initialize Turnstile when the component is mounted
  initTurnstile();
});

// Save new email to storage when login is successful
const saveEmail = (email) => {
  if (!savedEmails.value.includes(email)) {
    savedEmails.value.push(email);
    localStorage.setItem('savedEmails', JSON.stringify(savedEmails.value));
  }
};

const login = async () => {
  try {
    if (form.email === "") {
      loginError.value = "email is required"
      return
    }

    if (form.password === "") {
      loginError.value = "password is required"
      return
    }

    if (form.password.length < 8) {
      loginError.value = "password length must be 8 character or more";
      return
    }

    const turnstileResponse = document.querySelector('[name="cf-turnstile-response"]')?.value;
    const requestData = {
      email: form.email,
      password: form.password,
    };

    if (turnstileResponse) {
      requestData['cf-turnstile-response'] = turnstileResponse;
    }

    const response = await axios.post('https://gateway.berkompeten.id/api/admin/login', requestData);

    console.log(response);

    // Assuming your backend returns a token upon successful login
    const token = response.data.token;

    console.log(token);

    // Save the token in local storage or Vuex store for future requests
    localStorage.setItem('token', token);

    saveEmail(form.email)

    // Redirect to the desired route upon successful login
    router.push('/dashboard');
  } catch (error) {
    // Handle login error (display error message, redirect, etc.)
    console.error('Login failed:', error);
    if (error.response && error.response.data) {
      loginError.value = error.response.data.message;

      if (error.response.data.errors){
        loginError.value = error.response.data.errors;
      }

      // Check if the user does not exist and store email in local storage
      if (error.response.data.is_exist === false) {
        localStorage.setItem('email', form.email);
        router.push('/register');
      }
      return
    } else {
      loginError.value = 'An unexpected error occurred during login.';
      return
    }
  }
}

const navigateToForgotPassword = () => {
  router.push('/forgot-password')
}
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->

  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div v-html="logo" />
          </div>
        </template>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Hai Selamat Datang!
        </h5>
        <p class="mb-0">
          Please sign-in to your account and start the adventure
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="login">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                clearable
                autocomplete="off"
                @focus="showSuggestions = true"
                @blur="hideSuggestions"
                @input="filterEmails"
              />

              <!-- Suggestions Dropdown -->
              <VList
                v-if="showSuggestions && filteredEmails.length"
                class="suggestions-list"
              >
                <VListItem
                  v-for="email in filteredEmails"
                  :key="email"
                  @mousedown.prevent="selectEmail(email)"
                >
                  <VListItemTitle>{{ email }}</VListItemTitle>
                </VListItem>
              </VList>
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox
                  v-model="form.remember"
                  label="Remember me"
                />

                <a
                  class="ms-2 mb-1"
                  @click="navigateToForgotPassword"
                >
                  Forgot Password?
                </a>
              </div>

              <!-- login button -->
                <!-- Hidden container for Turnstile -->
              <div>
                <div id="turnstile-container" class="mb-2"></div>
                <VBtn
                  block
                  type="submit"
                  color="#0080ff"
                >
                  Login
                </VBtn>
              </div>

              <div v-if="loginError" class="mt-2 text-danger" style="color: #ff5252;">
                {{ loginError }}
              </div>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="authV1Tree"
      :width="250"
    />

    <VImg
      :src="authV1Tree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
    />

    <!-- bg img -->
    <VImg
      class="auth-footer-mask d-none d-md-block"
      :src="authThemeMask"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@core/scss/pages/page-auth.scss";
</style>
