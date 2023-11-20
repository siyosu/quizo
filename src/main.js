import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BaseButton from './components/base/BaseButton.vue'
import BaseSelect from './components/base/BaseSelect.vue'
import BaseInput from './components/base/BaseInput.vue'
import BaseRadio from './components/base/BaseRadio.vue'
import BaseModal from './components/base/BaseModal.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('BaseButton', BaseButton)
app.component('BaseSelect', BaseSelect)
app.component('BaseInput', BaseInput)
app.component('BaseRadio', BaseRadio)
app.component('BaseModal', BaseModal)

app.use(createPinia())
app.use(router)

app.mount('#app')
