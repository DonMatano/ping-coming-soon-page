<template>
  <div class="my-3">
    <section class="mt-20 mx-8 flex flex-col items-center">
      <img
        src="../../assets/images/logo.svg"
        alt="Ping Logo"
        class="w-16 md:w-24 h-auto mb-6"
      />
      <h1
        class="
          text-center text-neutral-gray
          font-light
          text-2xl
          md:text-5xl
          leading-9
          md:leading-10
          tracking-normal
        "
      >
        We are launching
        <span class="font-bold text-neutral-very-dark-blue">soon!</span>
      </h1>
      <p class="mt-4 text-xs md:text-xl font-light text-neutral-very-dark-blue">
        Subscribe and get notified.
      </p>
    </section>
    <div class="md:flex md:justify-center">
      <form
        class="
          md:self-center
          flex flex-col
          md:flex-row md:justify-center md:items-center
          mx-4
          mt-4
          md:h-11 md:w-2/5
        "
      >
        <div class="flex flex-col md:w-2/3 md:mr-3 md:mt-7">
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder="Your email address..."
            class="
              px-5
              py-3
              border
              rounded-3xl
              leading-4
              text-xs
              font-light
              placeholder-secondary-pale-blue
              focus:outline-none
            "
            :class="[
              isEmailValid
                ? 'border-secondary-light-red  focus:border-secondary-light-red'
                : 'border-secondary-pale-blue focus:border-secondary-pale-blue',
            ]"
          />
          <small
            v-if="isEmailValid"
            class="
              mt-2
              text-xs
              leading-5
              text-secondary-light-red text-center
              block
              italic
              md:text-left md:ml-5
            "
          >
            Please provide a valid email address
          </small>
        </div>
        <button
          type="submit"
          class="
            md:w-1/3
            mt-3
            md:mt-0
            px-5
            py-3
            leading-4
            rounded-3xl
            bg-primary-blue
            text-white
            font-semibold
            text-xs
            shadow-lg
            focus:outline-none focus:ring focus:border-secondary-pale-blue
          "
        >
          Notify Me
        </button>
      </form>
    </div>
    <div class="flex justify-center items-center mt-5">
      <img
        class="my-16 px-5 md:w-1/2"
        src="../../assets/images/illustration-dashboard.png"
        alt="illustration dashboard"
      />
    </div>
    <footer class="my-3">
      <div class="flex flex-row justify-center">
        <SocialContactAtom>
          <img
            src="../../assets/images/facebook.svg"
            alt="Contact us on Facebook"
          />
        </SocialContactAtom>
        <SocialContactAtom>
          <img
            src="../../assets/images/twitter.svg"
            alt="Contact us on Twiter"
          />
        </SocialContactAtom>
        <SocialContactAtom>
          <img
            src="../../assets/images/instagram.svg"
            alt="Contact us on Instagram"
          />
        </SocialContactAtom>
      </div>
      <small class="text-center text-neutral-gray block my-6"
        >&copy; Copyright Ping. All Rights reserved.</small
      >
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import SocialContactAtom from "../atoms/SocialContactAtom.vue";

export default defineComponent({
  name: "ComingSoonPage",
  components: { SocialContactAtom },
  setup() {
    const email = ref("");
    const isEmailValid = computed(() => {
      if (!email.value) return false;
      const emailValidationRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !emailValidationRegex.test(email.value.trim().toLowerCase());
    });
    return { email, isEmailValid };
  },
});
</script>
